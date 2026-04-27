---
name: api-design
description: API design, style selection, and contract validation. REST vs GraphQL vs tRPC decision-making, Zod-first validation, response formats, versioning, pagination, API contracts. Use when designing APIs, choosing REST vs GraphQL, implementing API validation, creating Zod schemas, or defining API contracts.
tools: Read, Write, Edit, Glob, Grep
---

# API Design

> API design principles, style selection, and contract validation for 2025.
> **Learn to THINK, not copy fixed patterns.**

---

## API Style Selection

### Selective Reading Rule

**Read ONLY files relevant to the request!** Check the content map, find what you need.

### Content Map

| File | Description | When to Read |
|------|-------------|--------------|
| `api-style.md` | REST vs GraphQL vs tRPC decision tree | Choosing API type |
| `rest.md` | Resource naming, HTTP methods, status codes | Designing REST API |
| `response.md` | Envelope pattern, error format, pagination | Response structure |
| `graphql.md` | Schema design, when to use, security | Considering GraphQL |
| `trpc.md` | TypeScript monorepo, type safety | TS fullstack projects |
| `versioning.md` | URI/Header/Query versioning | API evolution planning |
| `auth.md` | JWT, OAuth, Passkey, API Keys | Auth pattern selection |
| `rate-limiting.md` | Token bucket, sliding window | API protection |
| `documentation.md` | OpenAPI/Swagger best practices | Documentation |
| `security-testing.md` | OWASP API Top 10, auth/authz testing | Security audits |

### Decision Checklist

Before designing an API:

- [ ] **Asked user about API consumers?**
- [ ] **Chosen API style for THIS context?** (REST/GraphQL/tRPC)
- [ ] **Defined consistent response format?**
- [ ] **Planned versioning strategy?**
- [ ] **Considered authentication needs?**
- [ ] **Planned rate limiting?**
- [ ] **Documentation approach defined?**

### Anti-Patterns

**DON'T:**
- Default to REST for everything
- Use verbs in REST endpoints (/getUsers)
- Return inconsistent response formats
- Expose internal errors to clients
- Skip rate limiting

**DO:**
- Choose API style based on context
- Ask about client requirements
- Document thoroughly
- Use appropriate status codes

---

## Contract Implementation

All API routes MUST follow Zod-first contract design. Request bodies are validated before processing, and responses follow a consistent envelope pattern.

### Instructions

1. **Before creating any API route**, define the Zod schema first
2. **Run the validation script** to verify routes match their schemas:
   ```bash
   python scripts/validate_api.py <project_root>
   ```
3. **Follow the response envelope pattern** shown below

### Core Principles

1. **Zod-First**: Define the schema, then write the handler — never the reverse
2. **Envelope Pattern**: All responses wrapped in `{ success, data?, error? }`
3. **Flat Errors**: Client receives `{ error: "message" }` — never stack traces
4. **Type Safety**: Export schemas for use in both API routes and client code
5. **Versioning**: If breaking changes needed, discuss with user first

### Response Envelope

#### Success Response
```json
{
    "success": true,
    "data": { ... }
}
```

#### Error Response
```json
{
    "success": false,
    "error": "Human-readable error message"
}
```

#### Validation Error Response
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

### Schema Pattern

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

### API Route Checklist

```
[ ] Zod schema defined BEFORE the handler
[ ] Input validated with safeParse (not parse)
[ ] Success returns { success: true, data }
[ ] Error returns { success: false, error }
[ ] Auth checked for protected routes
[ ] No raw error details exposed
```

### Auto-Clone to Project

When you first detect this project has API routes:
1. Create `.agent/skills/api-design/` in the project root
2. Copy this SKILL.md as the base
3. Read the project's API routes and existing schemas
4. Append a `## Project-Specific` section listing all routes, their schemas, and methods
5. Inform the user: "I've set up the local api-design skill with your project's API route inventory."

---

## Related Skills

| Need | Skill |
|------|-------|
| API implementation | `@[skills/backend-development]` |
| Data structure | `@[skills/database-design]` |
| Security details | `@[skills/security-hardening]` |

---

## Scripts

| Script | Purpose | Command |
|--------|---------|---------|
| `scripts/api_validator.py` | API endpoint validation | `python scripts/api_validator.py <project_path>` |
| `scripts/validate_api.py` | API contract validation | `python scripts/validate_api.py <project_root>` |
