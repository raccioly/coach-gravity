---
name: tech-debt-scanning
description: Technical debt hunter that identifies and tracks TODO/FIXME comments, `any` types, code duplication, dead code, eslint-disable overrides, and other debt markers. Activate when scanning for tech debt, finding TODO or FIXME comments, auditing dead code, checking for type safety violations, or cataloging technical debt.
tools: Read, Grep, Glob, Bash
---

# Tech Debt Scanning

> Visible debt is manageable debt. Unknown debt is dangerous.

## 1. Philosophy

| Principle | Meaning |
|-----------|---------|
| **Visible debt is manageable debt** | Unknown debt is dangerous |
| **Prioritize by risk** | Not all debt is equal |
| **Track trends** | Is debt growing or shrinking? |
| **Actionable findings** | Every issue should have a clear fix |

---

## 2. Scan - Look for Technical Debt

### High Priority Markers (Fix Soon)
```bash
# TODO/FIXME/HACK comments with no tracking
grep -rn "TODO\|FIXME\|HACK\|XXX" backend/src frontend/src --include="*.ts" --include="*.tsx"

# Unsafe type assertions
grep -rn "as any\| any;" backend/src frontend/src --include="*.ts" --include="*.tsx"

# eslint-disable without expiration
grep -rn "eslint-disable" backend/src frontend/src --include="*.ts" --include="*.tsx"

# @ts-ignore comments
grep -rn "@ts-ignore\|@ts-nocheck\|@ts-expect-error" backend/src frontend/src
```

### Medium Priority (Track)
```bash
# Console.log left in production code
grep -rn "console\.log\|console\.debug" backend/src frontend/src --include="*.ts" --include="*.tsx"

# Empty catch blocks (silent failures)
grep -rn "catch.*{}" backend/src frontend/src

# Hardcoded magic numbers
grep -rn "[^a-zA-Z][0-9]{4,}[^a-zA-Z]" backend/src frontend/src --include="*.ts"

# Large files (> 500 lines)
find backend/src frontend/src -name "*.ts" -o -name "*.tsx" | xargs wc -l | sort -rn | head -20
```

### Low Priority (Monitor)
```bash
# Commented-out code blocks
grep -rn "^//" backend/src frontend/src --include="*.ts" | head -50

# Duplicate string literals (potential constants)
grep -rn "\"[^\"]{20,}\"" backend/src --include="*.ts" | sort | uniq -d
```

---

## 3. Catalog - Document Findings

```markdown
## Technical Debt Inventory

### High Priority (Security/Reliability Risk)
| File | Line | Issue | Suggested Fix |
|------|------|-------|---------------|
| ... | ... | `as any` bypass | Add proper type |

### Medium Priority (Maintainability)
| File | Line | Issue | Suggested Fix |
|------|------|-------|---------------|
| ... | ... | TODO without ticket | Create ticket or fix |

### Low Priority (Nice to Have)
| Issue Type | Count | Notes |
|------------|-------|-------|
| Commented code | X | Consider removal |
```

---

## 4. Prioritize - Rank by Impact

**Prioritization matrix:**
| | High Frequency | Low Frequency |
|---|---|---|
| **High Severity** | Fix immediately | Fix this sprint |
| **Low Severity** | Track in backlog | Ignore or delete |

---

## 5. Fix - Address Top Issues

For the top 3-5 issues by priority:
1. **Fix** if < 20 lines of changes
2. **Create ticket** if larger refactor needed
3. **Document** why it exists if intentional

---

## 6. Verify

```bash
cd backend && npm run build && npm test
cd frontend && npm run build
```

---

## 7. Output Format

```
## Tech Debt Report

### Summary
- Total TODO/FIXME: X
- `any` types: X
- Large files (>500 lines): X
- eslint-disable comments: X

### Actions Taken
- Fixed: [list]
- Tickets created: [list]
- Intentionally ignored: [list with reasons]

### Trend
[Is debt growing or shrinking compared to last audit?]
```

---

## 8. Journal

Track in `.agent/debt.md` (create if missing):
- Debt trends over time
- Patterns that keep recurring
- Decisions on intentional debt
