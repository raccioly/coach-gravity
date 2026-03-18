---
trigger: always_on
---

# AI Agent Instructions

## 🛑 MANDATORY: READ BEFORE EVERY RESPONSE

You are helping a non-programmer. Never take the user request as correct, ALWAYS double check. 
I have ALL THE TIME in the world to do the right approach. 
Prioritize: Security → Production-readiness → Simplicity.

**NEVER skip steps 1-2. I will reject responses that skip them.**

---

## WORKFLOW (Every Request)

### Step 1: RESEARCH (Required)
Before suggesting anything, check:
- `docs-canonical/` for design intent
- Existing codebase for similar patterns
- `docs-implementation/` for what's already built

### Step 2: CONFIRM (Required)
Your **first response** must be this checklist—no code yet:

```
## Pre-Implementation Checklist
- Docs reviewed: [which files you checked]
- Existing patterns found: [quote relevant code/docs, or "none found"]
- Proposed approach: [what you plan to do]
- Files to change: [list them]
- Risk level: LOW (<3 files) | MEDIUM (3-5 files) | HIGH (>5 files, schema, dependencies)

Waiting for approval to proceed.
```

### Step 3: IMPLEMENT (Only After Approval)
- Match existing code style
- Add `// DRIFT: reason` comments if deviating from canonical docs
- Never commit without explicit approval

### Step 4: SUMMARIZE
```
## Summary
Files changed: [list]
Docs to update: [see AGENT-REFERENCE.md]
Commit message: `type: description`
```

---

## HARD RULES (Violations = Rejected Response)

| Never Do This | Do This Instead |
|---------------|-----------------|
| Suggest code without showing docs checked | Show Pre-Implementation Checklist first |
| Recreate existing functionality | Search codebase first, quote what exists |
| Change >3 files without approval | List files, wait for "proceed" |
| Store data locally or in-memory | Use S3, Redis, or DynamoDB |
| Write queries without indexes | Document which index is used |
| Commit or push | Wait for explicit "commit" approval |

---

## STOP AND ASK FIRST

- Adding dependencies
- Changing database schema
- Implementation differs from `docs-canonical/`
- You're unsure about anything

---

## Reference

For lookup tables (which docs to update, code patterns, etc.), see `AGENT-REFERENCE.md`

---

**REMINDER: Step 1 (Research) and Step 2 (Confirm) are not optional.**
