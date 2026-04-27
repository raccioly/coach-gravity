---
name: git-commit-format
description: Formats git commit messages according to Conventional Commits specification. Use when committing changes, preparing PRs, or writing changelog entries.
---

# Git Commit Formatter

When writing a git commit message, you MUST follow the Conventional Commits specification, tailored to Ricardo's workflow.

## Format

```
<type>(<scope>): <description>
```

## Allowed Types

| Type | When to Use | Example |
|------|------------|---------|
| `feat` | New feature or capability | `feat(auth): add Google OAuth login` |
| `fix` | Bug fix | `fix(dashboard): correct progress calculation` |
| `docs` | Documentation changes only | `docs: update API reference` |
| `style` | Formatting, no logic change | `style(ui): align card spacing` |
| `refactor` | Code restructure, same behavior | `refactor(api): extract validation middleware` |
| `perf` | Performance improvement | `perf(db): add index for user queries` |
| `test` | Adding or fixing tests | `test(auth): add login flow coverage` |
| `chore` | Build, config, tooling | `chore: update dependencies` |

## Rules

1. Use **imperative mood**: "add feature" not "added feature"
2. Keep description under **72 characters**
3. Use **scope** when the change is in a specific area (component, service, page)
4. If there are breaking changes, add footer: `BREAKING CHANGE: description`
5. NEVER commit without explicit user approval

## Multi-File Commits

When a commit touches multiple areas, use the most significant type:
- If it adds a feature AND fixes styles → `feat`
- If it fixes a bug AND updates docs → `fix`

## Example Messages

```
feat(lessons): add interactive comparison table component
fix(auth): resolve session expiry redirect loop
docs: add deployment guide for AWS Amplify
style(landing): replace emojis with Icon components
refactor(api): migrate to AppError class hierarchy
chore: upgrade next.js to 15.1
```
