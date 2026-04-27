#!/usr/bin/env python3
"""
API Route Validator — Checks that all API routes have corresponding Zod schemas.

Usage:
    python scripts/validate_api.py <project_root>

Checks:
    1. Every route.ts file has at least one Zod schema import
    2. Every handler (GET, POST, PUT, DELETE) uses safeParse or parse
    3. Error responses follow the envelope pattern

Exit codes:
    0 = All checks pass
    1 = Validation errors found
"""

import os
import re
import sys

def find_api_routes(project_root):
    """Find all route.ts files in the app/api directory."""
    api_dir = os.path.join(project_root, "src", "app", "api")
    routes = []
    if not os.path.exists(api_dir):
        return routes
    for root, dirs, files in os.walk(api_dir):
        for f in files:
            if f == "route.ts" or f == "route.tsx":
                routes.append(os.path.join(root, f))
    return routes


def check_route(filepath):
    """Check a single route file for Zod usage and envelope pattern."""
    errors = []
    with open(filepath, 'r') as f:
        content = f.read()

    rel_path = os.path.relpath(filepath)

    # Check 1: Has Zod import
    if 'from "zod"' not in content and "from 'zod'" not in content:
        if 'Schema' not in content:
            errors.append(f"  WARN: No Zod schema import found in {rel_path}")

    # Check 2: Uses safeParse or parse
    handlers = re.findall(r'export\s+async\s+function\s+(GET|POST|PUT|DELETE|PATCH)', content)
    if handlers:
        if 'safeParse' not in content and '.parse(' not in content:
            errors.append(f"  WARN: Handlers {handlers} in {rel_path} don't validate input")

    # Check 3: Returns structured responses
    if 'NextResponse.json' in content:
        if '"success"' not in content and "'success'" not in content:
            errors.append(f"  INFO: {rel_path} may not use envelope pattern (missing 'success' key)")

    return errors


def main():
    if len(sys.argv) < 2:
        print("Usage: python validate_api.py <project_root>")
        sys.exit(1)

    project_root = sys.argv[1]
    routes = find_api_routes(project_root)

    if not routes:
        print(f"No API routes found in {project_root}/src/app/api/")
        sys.exit(0)

    print(f"Found {len(routes)} API route(s)\n")

    all_errors = []
    for route in routes:
        errors = check_route(route)
        if errors:
            all_errors.extend(errors)

    if all_errors:
        print("Issues found:\n")
        for e in all_errors:
            print(e)
        print(f"\n{len(all_errors)} issue(s) found")
        sys.exit(1)
    else:
        print("All API routes pass validation checks!")
        sys.exit(0)


if __name__ == "__main__":
    main()
