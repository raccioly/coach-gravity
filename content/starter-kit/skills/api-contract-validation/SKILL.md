---
name: api-contract-validation
description: API contract validator that ensures API responses match documented contracts and catches breaking changes. Activate when validating API contracts, checking schema validation, detecting contract drift, comparing OpenAPI specs with implementation, finding undocumented endpoints, or auditing response shapes.
tools: Read, Grep, Glob, Bash
---

# API Contract Validation

> Consumers trust your API docs. Breaking that trust breaks integrations.

## 1. Philosophy

| Principle | Meaning |
|-----------|---------|
| **Consumers trust your API docs** | Breaking that trust breaks integrations |
| **Version carefully** | Breaking changes need major versions |
| **Test the contract, not the implementation** | Focus on what consumers see |
| **Changelog everything** | API changes must be documented |

---

## 2. Contract Validation Areas

### 1. Response Shape Validation
- Response fields match OpenAPI spec
- Data types are correct
- Required fields are present
- Extra fields are documented

### 2. Status Code Validation
- Correct status codes for scenarios
- Error responses match schema

### 3. Breaking Change Detection
- Removed fields
- Type changes
- Required field additions
- Enum value removals

---

## 3. Audit - Validate API Contracts

### 1. OpenAPI vs Implementation
```bash
# List all defined routes
grep -rn "router\.\(get\|post\|put\|patch\|delete\)" backend/src/routes --include="*.ts" | head -30

# Compare with OpenAPI paths
grep -rn "^  /" openapi.yaml | head -30
```

### 2. Response Schema Validation
```typescript
// In tests, validate response against Zod schema
const response = await request(app).get('/api/users/123');
const result = UserResponseSchema.safeParse(response.body);
expect(result.success).toBe(true);
```

### 3. Find Undocumented Endpoints
```bash
# Routes in code but not in OpenAPI
# Manual comparison needed
```

### 4. Breaking Change Check
```bash
# Compare current OpenAPI with last release
git diff HEAD~10 -- openapi.yaml | grep "^-\|^+"

# Look for:
# - Removed paths
# - Removed fields
# - Changed types
# - New required fields
```

---

## 4. Report

```markdown
## API Contract Report

### Endpoints
| Route | In Code | In OpenAPI | In Tests |
|-------|---------|------------|----------|
| GET /users | Yes | Yes | Yes |
| POST /users | Yes | Yes | Missing |
| GET /legacy | Yes | Missing | Missing |

### Response Validation
| Endpoint | Schema Match | Issues |
|----------|--------------|--------|
| GET /users/:id | Yes | - |
| GET /conversations | No | Extra field: `_internal` |

### Breaking Changes (since last release)
| Change | Impact | Migration |
|--------|--------|-----------|
| Removed `legacyId` field | HIGH | Use `id` instead |
```

---

## 5. Fix - Resolve Contract Issues

### Add Missing OpenAPI Documentation
```yaml
/api/users/{id}:
  get:
    summary: Get user by ID
    responses:
      200:
        description: User found
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/User'
      404:
        description: User not found
```

### Add Contract Tests
```typescript
describe('API Contract: Users', () => {
  it('GET /users/:id matches schema', async () => {
    const response = await request(app).get('/api/users/123');
    expect(UserSchema.safeParse(response.body).success).toBe(true);
  });
});
```

### Document Breaking Changes
```markdown
# CHANGELOG.md

## [2.0.0] - YYYY-MM-DD
### BREAKING CHANGES
- Removed `legacyId` from User response. Use `id` instead.
```

---

## 6. Verify

```bash
cd backend && npm run build && npm test
```

---

## 7. Output Format

```
## API Contract Report

### Summary
- Endpoints audited: X
- Undocumented: X
- Schema mismatches: X
- Breaking changes: X

### Actions Taken
- Documented: [endpoints]
- Fixed: [schema issues]
- Flagged: [breaking changes]

### Recommendations
- [Tests to add]
- [Breaking changes to consider]
```

---

## 8. Journal

Before starting, read `.agent/keeper.md` (create if missing).

**Only journal CRITICAL learnings:**
```markdown
## YYYY-MM-DD - [Title]
**Learning:** [Insight about API contracts]
**Context:** [Why it matters]
**Action:** [How to apply next time]
```
