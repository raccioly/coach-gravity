---
name: project-scaffolder
description: Scaffolds a new project with all standard conventions, design system, and tooling. Use when creating a new application or starting a fresh codebase.
---

# Project Scaffolder

This skill orchestrates the creation of new projects with all of Ricardo's established conventions. It combines templates, scripts, and examples to generate a complete, production-ready foundation.

## Instructions

1. **Identify the project type** (ask the user if unclear):
   - `nextjs` — Full-stack Next.js with App Router
   - `api` — Standalone API (Fastify or Express)
   - `static` — Static site or landing page

2. **Run the scaffolder script**:
   ```bash
   bash scripts/scaffold_project.sh <project-name> <project-type>
   ```

3. **Review the example project** in `examples/` to understand the expected structure

4. **After scaffolding**, apply these post-setup steps:
   - Install dependencies: `npm install`
   - Copy the global `.env.example` and configure for the project
   - Set up the global skills as local skills (run auto-clone for each relevant skill)
   - Create initial commit: `git init && git add . && git commit -m "chore: initial scaffold"`

## What the Scaffold Creates

### For `nextjs` Projects

```
<project-name>/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with design system
│   │   ├── page.tsx            # Landing page
│   │   ├── globals.css         # Full oklch design system
│   │   ├── loading.tsx         # Root loading state
│   │   ├── error.tsx           # Error boundary
│   │   └── api/
│   │       └── health/
│   │           └── route.ts    # Health check endpoint
│   ├── components/
│   │   └── Icon.tsx            # Styled icon component
│   └── lib/
│       ├── errors.ts           # AppError hierarchy
│       └── schemas.ts          # Shared Zod schemas
├── .env.example
├── .gitignore
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## Resources

- `resources/tsconfig-template.json` — Standard TypeScript config
- `resources/gitignore-template` — Comprehensive .gitignore
- `resources/env-example` — Standard .env.example template

## Post-Scaffold Checklist

```
[ ] Dependencies installed
[ ] .env configured with project-specific values
[ ] Git initialized with initial commit
[ ] Local skills cloned from globals
[ ] Dev server starts without errors
[ ] Health endpoint responds at /api/health
```

## Auto-Clone to Project

After scaffolding, this skill auto-clones itself to the new project as `.agent/skills/project-scaffolder/` to preserve the project's scaffold history and template versions used.
