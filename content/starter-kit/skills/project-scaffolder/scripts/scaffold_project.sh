#!/bin/bash
# ══════════════════════════════════════════════════
# Project Scaffolder
# Creates a new project with standard conventions
# ══════════════════════════════════════════════════
#
# Usage:
#   bash scripts/scaffold_project.sh <project-name> <project-type>
#
# Types:
#   nextjs  — Full-stack Next.js with App Router
#   api     — Standalone API (Fastify)
#   static  — Static site
#

set -e

PROJECT_NAME="${1:?Usage: scaffold_project.sh <project-name> <project-type>}"
PROJECT_TYPE="${2:-nextjs}"
SKILL_DIR="$(cd "$(dirname "$0")/.." && pwd)"

echo "╔══════════════════════════════════════════╗"
echo "║  Project Scaffolder                      ║"
echo "║  Name: $PROJECT_NAME"
echo "║  Type: $PROJECT_TYPE"
echo "╚══════════════════════════════════════════╝"
echo ""

# ── Create project directory ──
if [ -d "$PROJECT_NAME" ]; then
    echo "ERROR: Directory '$PROJECT_NAME' already exists"
    exit 1
fi

if [ "$PROJECT_TYPE" = "nextjs" ]; then
    echo "▸ Creating Next.js project..."
    npx -y create-next-app@latest "$PROJECT_NAME" \
        --typescript \
        --eslint \
        --app \
        --src-dir \
        --no-tailwind \
        --import-alias "@/*" \
        --use-npm

    cd "$PROJECT_NAME"

    echo "▸ Creating standard directories..."
    mkdir -p src/lib src/components

    echo "▸ Copying templates..."
    # Copy .gitignore
    if [ -f "$SKILL_DIR/resources/gitignore-template" ]; then
        cp "$SKILL_DIR/resources/gitignore-template" .gitignore
    fi

    # Copy .env.example
    if [ -f "$SKILL_DIR/resources/env-example" ]; then
        cp "$SKILL_DIR/resources/env-example" .env.example
    fi

    echo "▸ Installing core dependencies..."
    npm install zod next-auth

    echo ""
    echo "✓ Project '$PROJECT_NAME' created successfully!"
    echo ""
    echo "Next steps:"
    echo "  1. cd $PROJECT_NAME"
    echo "  2. cp .env.example .env.local"
    echo "  3. Configure environment variables"
    echo "  4. npm run dev"

elif [ "$PROJECT_TYPE" = "api" ]; then
    echo "▸ Creating API project..."
    mkdir -p "$PROJECT_NAME/src"
    cd "$PROJECT_NAME"
    npm init -y
    npm install fastify zod @fastify/cors
    npm install -D typescript @types/node tsx
    echo "✓ API project '$PROJECT_NAME' created!"

else
    echo "▸ Creating static project..."
    mkdir -p "$PROJECT_NAME"
    cd "$PROJECT_NAME"
    echo "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>$PROJECT_NAME</title></head><body></body></html>" > index.html
    echo "✓ Static project '$PROJECT_NAME' created!"
fi
