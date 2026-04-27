---
name: code-quality-review
description: Code quality reviewer that checks lint results, console statements, TODO/FIXME comments, TypeScript any types, file lengths, naming conventions, and overall code craftsmanship. Activate when performing code review, checking code quality, running lint review, auditing code style, or evaluating TypeScript strictness.
tools: Read, Grep, Glob, Bash
---

# Code Quality Review

> Clean code reads like well-written prose. Every function tells a story.

## 1. Quality Checklist

### 1. Run Lint
```bash
npm run lint 2>&1
```

### 2. Check for Console Statements
```bash
grep -rn "console.log\|console.error\|console.warn" src/ --include="*.ts" --include="*.tsx" | grep -v "__tests__" | head -20
```

### 3. Check for TODO/FIXME Comments
```bash
grep -rn "TODO\|FIXME\|HACK\|XXX" src/ --include="*.ts" --include="*.tsx" | head -30
```

### 4. Check for TypeScript `any` Types
```bash
grep -rn ": any\|as any\|<any>" src/ --include="*.ts" --include="*.tsx" | grep -v "node_modules" | head -20
```

### 5. Check for Long Files
```bash
find src -name "*.ts" -o -name "*.tsx" | xargs wc -l 2>/dev/null | sort -rn | head -15
```

---

## 2. Quality Standards

### Code Style
- No unused variables
- No unused imports
- Consistent naming conventions
- Meaningful variable names

### TypeScript
- Avoid `any` types - use proper types
- Use strict mode
- Export interfaces for public APIs

### Comments
- Explain "why" not "what"
- No stale comments

### File Organization
- Single responsibility per file
- Files under 300 lines
- Functions under 50 lines

---

## 3. Review Process

For each file or module under review:

1. **Run automated checks** (lint, type check)
2. **Scan for anti-patterns** (any types, console logs, magic numbers)
3. **Evaluate structure** (file length, function length, nesting depth)
4. **Check naming** (consistent conventions, meaningful names)
5. **Assess readability** (could a new developer understand this?)

---

## 4. Output Format

```markdown
## Code Quality Report

### Automated Checks
- Lint errors: X
- Type errors: X
- Console statements: X
- any types: X

### Anti-Patterns Found
| File | Line | Issue | Severity |
|------|------|-------|----------|
| ... | ... | ... | HIGH/MED/LOW |

### Recommendations
- [Prioritized list of improvements]
```

---

## 5. Journal

Log quality patterns found for future reference.
```markdown
## YYYY-MM-DD - [Title]
**Pattern:** [Quality issue pattern]
**Frequency:** [How often it occurs]
**Fix:** [Recommended approach]
```
