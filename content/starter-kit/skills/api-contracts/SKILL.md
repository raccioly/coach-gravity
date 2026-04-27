---
name: api-contracts
description: API contract validation and Zod-first design patterns. Use when designing, implementing, or validating API routes and schemas.
---

# API Contract Patterns

All API routes MUST follow Zod-first contract design. Request bodies are validated before processing, and responses follow a consistent envelope pattern.

## Instructions

1. **Before creating any API route**, define the Zod schema first
2. **Run the validation script** to verify routes match their schemas:
   ```bash
   python scripts/validate_api.py <project_root>
   ```
3. **Follow the response envelope pattern** shown below

## Core Principles

1. **Zod-First**: Define the schema, then write the handler — never the reverse
2. **Envelope Pattern**: All responses wrapped in `{ success, data?, error? }`
3. **Flat Errors**: Client receives `{ error: "message" }` — never stack traces
4. **Type Safety**: Export schemas for use in both API routes and client code
5. **Versioning**: If breaking changes needed, discuss with user first

## Response Envelope

### Success Response
```json
{
    "success": true,
    "data": { ... }
}
```

### Error Response
```json
{
    "success": false,
    "error": "Human-readable error message"
}
```

### Validation Error Response
```json
{
    "success": false,
    "error": "Validation failed",
    "details": {
        "fieldErrors": { "email": ["Invalid email format"] },
        "formErrors": []
    }
}
```

## Schema Pattern

```typescript
// Define in: src/lib/schemas/feedback.ts
import { z } from "zod";

export const CreateFeedbackSchema = z.object({
    type: z.enum(["bug", "content", "feature", "rating"]),
    message: z.string().min(10).max(2000),
    rating: z.number().int().min(1).max(5).optional(),
});

export type CreateFeedbackInput = z.infer<typeof CreateFeedbackSchema>;

// Use in: src/app/api/feedback/route.ts
const parsed = CreateFeedbackSchema.safeParse(body);
if (!parsed.success) {
    return NextResponse.json({
        success: false,
        error: "Validation failed",
        details: parsed.error.flatten(),
    }, { status: 400 });
}
```

## API Route Checklist

```
[ ] Zod schema defined BEFORE the handler
[ ] Input validated with safeParse (not parse)
[ ] Success returns { success: true, data }
[ ] Error returns { success: false, error }
[ ] Auth checked for protected routes
[ ] No raw error details exposed
```

## Auto-Clone to Project

When you first detect this project has API routes:
1. Create `.agent/skills/api-contracts/` in the project root
2. Copy this SKILL.md as the base
3. Read the project's API routes and existing schemas
4. Append a `## Project-Specific` section listing all routes, their schemas, and methods
5. Inform the user: "I've set up the local api-contracts skill with your project's API route inventory."
