# Agent Instructions

> This project follows **Canonical-Driven Development (CDD)**.  
> Read canonical docs before making changes. Log drift when deviating.

---

## Project Overview

Coach Gravity is an AI-assisted coaching toolkit (npm package) that teaches non-programmers how to build real software. It distributes the Super Antigravity toolkit — 20 specialist agents, 58 domain skills, 35 slash command workflows, validation scripts, and global AI configuration — via `npx coach-gravity install`. Version 3.0 adds native GitHub Copilot and Cursor support through the Agent Skills spec.

## Project Documentation (CDD)

This project uses Canonical-Driven Development. Key locations:

- **Canonical docs** (design intent, READ-ONLY): `docs-canonical/`
- **Implementation docs** (current state): `docs-implementation/`
- **Drift tracking**: `DRIFT-LOG.md`
- **Change tracking**: `CHANGELOG.md`

## Build & Dev Commands

| Command | Purpose |
|---------|---------|
| `node bin/cli.js install` | Test full install locally |
| `node bin/cli.js init` | Test per-project setup locally |
| `node bin/cli.js update` | Test update path locally |
| `npm publish` | Publish to npm (automated via GitHub Actions) |

## DocGuard — Documentation Enforcement

This project uses **DocGuard** for CDD compliance. Run these commands to validate:

```bash
# Check documentation status
npx docguard audit

# Validate compliance (errors + warnings)
npx docguard guard

# See CDD maturity score
npx docguard score

# Find and fix CDD issues
npx docguard fix

# Get AI-ready fix prompt
npx docguard fix --format prompt
```

### AI Agent Workflow (IMPORTANT)

When working on this project, follow this workflow:

1. **Before any work**: Run `npx docguard guard` to understand current compliance state
2. **After making changes**: Run `npx docguard fix --format prompt` to find remaining issues
3. **Fix what DocGuard reports**: Each issue includes an `ai_instruction` telling you exactly what to do
4. **Run guard again**: Verify all issues are resolved before committing
5. **Update CHANGELOG.md**: All changes need a changelog entry

### Auto-Fix Available Issues

If DocGuard detects missing files, run:
```bash
npx docguard fix --auto
```

This auto-creates required documentation from templates. Then review and fill in project-specific content.

## Workflow Rules

1. **Research first** — Check `docs-canonical/` before suggesting changes
2. **Confirm before implementing** — Show a plan, wait for approval
3. **Match existing patterns** — Search codebase for similar implementations
4. **Document drift** — If deviating from canonical docs, add `// DRIFT: reason`
5. **Update changelog** — All changes need a `CHANGELOG.md` entry
6. **Run DocGuard** — After any documentation changes, run `npx docguard guard`

## Code Conventions

- **Language**: JavaScript (Node.js, no TypeScript)
- **Style**: CommonJS (`require`), no build step
- **CLI Entry**: `bin/cli.js` — single file, cross-platform (macOS + Windows)
- **Content**: All distributable content lives in `content/` directory
- **Safe installs**: Never overwrite existing user files without `--force` flag

## File Change Rules

- Changes to >3 files require explicit approval
- New dependencies require justification
- Never commit without explicit approval
- Documentation changes must pass `docguard guard` before commit
- Version bumps auto-trigger GitHub Actions release pipeline
