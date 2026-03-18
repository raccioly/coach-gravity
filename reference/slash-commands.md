# ⚡ Slash Commands — All 25 Workflows

> Type any of these in the Antigravity chat. They're like calling in a specialist.

---

## Everyday Commands

| Command | Description |
|---|---|
| **`/launch`** | Start your local development server so you can preview your app at `localhost`. |
| **`/preflight`** | Run pre-commit quality checks — build verification, linting, test execution. Catches problems before they go live. |
| **`/courier`** | Commit all changes, run preflight checks, and push to deploy. Your one-command publish button. |
| **`/stage`** | Open a real browser and test your UI end-to-end. Clicks buttons, fills forms, validates user flows. |

---

## Quality & Security

| Command | Description |
|---|---|
| **`/architect`** | Comprehensive architecture review — analyzes your codebase across 6 dimensions and provides a prioritized remediation plan. |
| **`/sentinel`** | Security scan — finds vulnerabilities, exposed secrets, unsafe dependencies, and security risks. |
| **`/critic`** | Code and comment quality review — checks naming, clarity, duplication, and overall code health. |
| **`/tester`** | Test health audit — identifies coverage gaps, flaky tests, stale mocks, and missing edge cases. |
| **`/bolt`** | Performance optimization — identifies and implements targeted speed improvements. |

---

## Code Maintenance

| Command | Description |
|---|---|
| **`/hunter`** | Technical debt finder — tracks TODO/FIXME comments, `any` types, code duplication, and other debt markers. |
| **`/janitor`** | Dead code eliminator — removes unused exports, unreachable code, stale feature flags, and commented-out code. |
| **`/sheriff`** | Code consistency enforcer — ensures naming conventions, file structure, and patterns are followed consistently. |
| **`/medic`** | Dependency health audit — checks for outdated, vulnerable, and unused packages. |

---

## Documentation

| Command | Description |
|---|---|
| **`/scribe`** | Deep documentation enhancer — improves documentation quality, completeness, and accuracy. |
| **`/auditor`** | Documentation review — compares docs against actual code to find discrepancies. |
| **`/sync`** | Sync documentation changes to the Documentation folder since last workflow run. |

---

## Data & Schema Integrity

| Command | Description |
|---|---|
| **`/mirror`** | Schema consistency enforcer — ensures Zod schemas, TypeScript types, and OpenAPI specs stay in sync. |
| **`/keeper`** | API contract validator — ensures API responses match documented contracts and catches breaking changes. |

---

## UI & UX

| Command | Description |
|---|---|
| **`/palette`** | UX polish agent — adds accessibility, small delights, and usability improvements to your interface. |
| **`/packer`** | Bundle size optimizer — implements code splitting and reduces frontend load times. |

---

## Git & Deployment

| Command | Description |
|---|---|
| **`/branchsync`** | Syncs branches with main — verifies changes and keeps your project up to date. |
| **`/differ`** | Change impact analyzer — shows what files and features will be affected before you make changes. |
| **`/guardian`** | Critical file protection — prevents accidental changes to core system files. |

---

## Specialized

| Command | Description |
|---|---|
| **`/observer`** | Observability audit — ensures proper logging, error handling, and monitoring patterns across the codebase. |
| **`/translator`** | i18n completeness checker — ensures all user-facing text is translated for multi-language apps. |

---

## How to Use Them

Just type the command in the Antigravity chat:

```
/preflight
```

That's it. The workflow runs automatically and reports back with results.

### Combining Commands

For a full pre-deployment check:
```
/preflight
/sentinel
/architect
```

For a monthly maintenance pass:
```
/medic
/hunter
/janitor
```

### Creating Your Own

Add a `.md` file to `.agent/workflows/`. If you name it `mycommand.md`, you can use `/mycommand`. See the existing workflow files for the format.
