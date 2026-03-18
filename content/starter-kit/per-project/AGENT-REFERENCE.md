# [Your Project Name] — Agent Reference

> **Project-specific context for AI agents following GEMINI.md workflow**

---

## Project Overview

| Field | Value |
|-------|-------|
| **Name** | [Your Project Name] |
| **Type** | [SaaS Platform / Website / API / Mobile App / etc.] |
| **Domain** | [What industry or problem does it solve?] |
| **Stage** | [Development / Staging / Production] |
| **Repository** | [GitHub URL] |
| **Live URL** | [Production URL, if applicable] |

---

## Tech Stack

<!-- Fill in the technologies your project uses. Remove rows that don't apply. -->

| Layer | Technology |
|-------|------------|
| **Frontend** | [e.g., Next.js 16, React 19, TypeScript] |
| **Styling** | [e.g., Tailwind CSS v4, Vanilla CSS] |
| **Backend** | [e.g., Next.js API Routes, Express, Fastify] |
| **Database** | [e.g., PostgreSQL via RDS, DynamoDB] |
| **Cache** | [e.g., Redis via ElastiCache, Valkey] |
| **AI** | [e.g., OpenAI GPT-4o, Claude] |
| **Hosting** | [e.g., AWS Amplify, Vercel, App Runner] |
| **Auth** | [e.g., Auth.js v5, Cognito, Okta] |
| **Payments** | [e.g., Stripe] |

---

## Directory Structure

<!-- Update this tree to match your project's actual folder layout. -->

```
your-project/
├── docs-canonical/          # Source of truth for design
│   ├── architecture/        # System design, data model
│   └── product/             # Feature specs, personas
├── docs-implementation/     # Build-time decisions + audit reports
├── src/                     # Source code
│   ├── app/                 # Pages + API routes
│   ├── components/          # React components
│   └── lib/                 # Shared utilities
├── AGENT-REFERENCE.md       # This file
└── .agent/workflows/        # Slash command overrides
```

---

## Key Documents

### Must Read Before Changes

<!-- List the most important docs the AI should check before modifying code. -->

| Document | Purpose |
|----------|---------|
| `docs-canonical/architecture/SYSTEM-OVERVIEW.md` | Tech stack, architecture |
| `docs-canonical/architecture/DATA-MODEL.md` | Database schema |
| `docs-canonical/product/FEATURES.md` | Feature specifications |

---

## Code Patterns (MANDATORY)

> [!IMPORTANT]
> All code MUST follow these patterns. Violations will be rejected.

### File Size Limits

| Type | Max Lines | Action if exceeded |
|------|-----------|-------------------|
| Component | 200 | Split into sub-components |
| Page | 150 | Extract to feature components |
| Hook | 100 | Split responsibilities |
| Utility | 50 | Create separate utilities |

### Naming Conventions

| Type | Pattern | Example |
|------|---------|---------| 
| Components | PascalCase | `UserProfile.tsx` |
| Hooks | camelCase + "use-" | `use-auth.ts` |
| Types/Interfaces | PascalCase | `UserProfile` |
| Constants | SCREAMING_SNAKE | `MAX_RETRIES` |
| Utilities | camelCase | `formatDate.ts` |

---

## Documentation Sync (MANDATORY)

> [!IMPORTANT]
> **All code changes MUST include corresponding documentation updates.**

### Required Doc Updates

<!-- Customize this table to match your project's documentation structure. -->

| If You Change... | Update These Docs | Priority |
|------------------|-------------------|----------|
| Database schema | `docs-canonical/architecture/DATA-MODEL.md` | 🔴 Critical |
| API endpoints | API reference docs | 🔴 Critical |
| Navigation/Routes | URL mapping docs | 🔴 Critical |
| UI components | Design system docs | ⚡ High |
| New features | Implementation status docs | ⚡ High |

---

## Commit Message Conventions

```
feat: add new capability
fix: resolve bug
docs: update documentation
refactor: improve code structure
test: add or update tests
chore: maintenance tasks
```

---

**Last Updated**: [DATE]
