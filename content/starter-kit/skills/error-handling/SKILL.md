---
name: error-handling
description: Enterprise error handling patterns using structured AppError class hierarchy. Use when implementing API routes, services, or any error-prone code paths.
---

# Enterprise Error Handling

All projects MUST use a structured error hierarchy — never generic `throw new Error()`. This ensures correct HTTP status codes, clean client responses, and actionable server logs.

## Instructions

1. **Review** `examples/app-errors.ts` for the full error class hierarchy
2. **Review** `examples/error-boundary.tsx` for the React error boundary pattern
3. **Use the appropriate error class** based on the failure type (see table below)
4. **Never expose stack traces** to the client

## Error Class Selection

| Situation | Class | HTTP Status |
|-----------|-------|-------------|
| Invalid user input (bad form data) | `ValidationError` | 400 |
| Malformed request (missing fields) | `BadRequestError` | 400 |
| Not logged in | `UnauthorizedError` | 401 |
| Logged in but wrong role | `ForbiddenError` | 403 |
| Resource doesn't exist | `NotFoundError` | 404 |
| External API failed | `ExternalServiceError` | 502 |
| Unknown/unexpected | `AppError` (base) | 500 |

## The 400 vs 500 Rule

- **400-level** = the CLIENT made a mistake (bad input, missing auth, wrong permissions)
- **500-level** = the SERVER made a mistake (bugs, crashes, external failures)
- NEVER return 500 for validation failures
- NEVER return 400 for internal crashes

## Pattern: API Route Error Handler

```typescript
try {
    // Business logic
} catch (error) {
    if (error instanceof AppError) {
        return NextResponse.json(
            { error: error.message },
            { status: error.statusCode }
        );
    }
    // Unexpected error — log details, return generic message
    console.error("Unhandled error:", error);
    return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 }
    );
}
```

## Auto-Clone to Project

When you first detect a project lacks structured error handling:
1. Create `.agent/skills/error-handling/` in the project root
2. Copy this SKILL.md and examples
3. Check if the project already has error classes — if so, map them
4. If not, suggest creating `src/lib/errors.ts` using the example
5. Inform the user: "I've set up the local error-handling skill. Consider adding the AppError hierarchy from the examples."
