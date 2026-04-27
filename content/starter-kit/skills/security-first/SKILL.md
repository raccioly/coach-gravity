---
name: security-first
description: Enforces security-first development practices across all projects. Applies to any code generation, API design, authentication, or data handling task.
---

# Security-First Development

You MUST follow these security rules in ALL code you generate or modify. Security takes priority over simplicity or speed.

## Hard Rules

### Secrets & Environment Variables
- NEVER hardcode secrets, API keys, tokens, or passwords in source code
- NEVER commit `.env` files — always verify `.gitignore` includes them
- Use environment variables via `process.env` server-side only
- NEVER expose `process.env` values in client-side code unless prefixed with `NEXT_PUBLIC_`

### Input Validation
- ALL user inputs MUST be validated with Zod schemas before processing
- NEVER trust client-side data — validate again server-side
- Sanitize strings that will be rendered as HTML to prevent XSS
- Validate and constrain numeric inputs (min, max, integer vs float)

### Error Handling
- NEVER return raw error stacks or internal details to the client
- Use structured error classes (`AppError` subclasses) — never `throw new Error("message")`
- Return generic messages to clients, log details server-side
- Distinguish 400-level (client fault) from 500-level (server fault) errors

### Authentication & Authorization
- ALWAYS check session/auth before processing protected routes
- Use `signOut({ callbackUrl: "/" })` for client-side logout
- Verify user roles/permissions before allowing admin operations
- Never rely solely on client-side auth checks

### API Security
- ALWAYS use HTTPS for external API calls
- Set appropriate CORS headers
- Rate-limit sensitive endpoints (login, signup, password reset)
- Never expose internal IDs or database keys directly in URLs

### Database
- Use parameterized queries — NEVER concatenate user input into queries
- Apply least-privilege access for database credentials
- Set TTL on sensitive temporary data (sessions, tokens, OTPs)
- Always document which index a query uses

## Checklist (Apply Before Every PR)

```
[ ] No secrets in code or committed .env files
[ ] All inputs validated with Zod
[ ] Errors use AppError subclasses, not generic Error
[ ] Auth checked on all protected routes
[ ] No raw error details exposed to clients
[ ] HTTPS only for external calls
```
