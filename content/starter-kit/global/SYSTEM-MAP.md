# Antigravity System Map

> Inventory of the Super Antigravity toolkit. Read once at session start.
>
> For routing decisions, see `agents/ROUTING.md`.
> For behavioral rules and loading strategy, see `~/.gemini/GEMINI.md`.
> For complex-request gates, see `GATES.md`.

## Global Setup Location

```
~/.gemini/
├── GEMINI.md                    # Global rules (lean core: classify, gate, route, implement)
├── CLAUDE.md                    # Same rules for Claude-compatible agents
├── agreement.md                 # Human-AI working agreement
└── antigravity/
    ├── GATES.md                 # Socratic + Spec-Kit gate (loaded for COMPLEX/DESIGN only)
    ├── SYSTEM-MAP.md            # This file
    ├── mcp_config.json          # MCP server configuration
    ├── agents/                  # 20 specialist agent personas
    │   └── ROUTING.md           # Agent selection table (loaded when implementing)
    ├── global_workflows/        # 23 slash commands (user-triggered actions)
    ├── skills/                  # 71 domain knowledge modules (auto-activated)
    ├── scripts/                 # 4 Python validation scripts
    └── knowledge/               # 19 project-specific knowledge bases
```

## On-Demand Modules

These files are NOT loaded every turn. The lean `GEMINI.md` references them; the AI loads them only when the classifier triggers a matching scenario.

| File | Loaded When |
|------|-------------|
| `antigravity/GATES.md` | Request classified as COMPLEX CODE or DESIGN/UI |
| `antigravity/agents/ROUTING.md` | Step 4 fires (implementation begins) |
| `antigravity/skills/<name>/SKILL.md` | Agent specifies the skill as required |

---

## Agents (20 Specialist Personas)

Full routing and skills per agent live in `agents/ROUTING.md`. This list is inventory only.

| Agent | Domain |
|-------|--------|
| `orchestrator` | Multi-agent coordination |
| `project-planner` | Discovery, task planning |
| `frontend-specialist` | Web UI/UX |
| `backend-specialist` | API, business logic |
| `database-architect` | Schema, SQL, NoSQL |
| `mobile-developer` | iOS, Android, RN, Flutter |
| `game-developer` | Game logic, mechanics |
| `devops-engineer` | CI/CD, Docker, Deploy |
| `security-auditor` | Security compliance |
| `penetration-tester` | Offensive security testing |
| `test-engineer` | Testing strategies |
| `debugger` | Root cause analysis |
| `performance-optimizer` | Speed, Web Vitals |
| `seo-specialist` | Ranking, visibility |
| `documentation-writer` | Manuals, API docs |
| `product-manager` | Requirements, user stories |
| `product-owner` | Strategy, backlog, MVP |
| `qa-automation-engineer` | E2E testing, CI pipelines |
| `code-archaeologist` | Legacy code, refactoring |
| `explorer-agent` | Codebase discovery |

---

## Workflows (23 Slash Commands)

User-triggered action shortcuts. The agent does NOT auto-discover these — use skills for auto-activated domain expertise.

### Daily Drivers
| Command | Purpose |
|---------|---------|
| `/launch` | Start the dev server |
| `/preflight` | Run quality checks before committing |
| `/courier` | Commit, push, and deploy |
| `/status` | Project health dashboard |

### Architecture & Planning
| Command | Purpose |
|---------|---------|
| `/brainstorm` | Structured idea exploration (3+ options with tradeoffs) |
| `/create` | Create new application with agent coordination |
| `/plan` | Structured task breakdown with estimates |
| `/differ` | Preview impact of changes before making them |
| `/guardian` | Protect critical files from accidental changes |

### Development
| Command | Purpose |
|---------|---------|
| `/enhance` | Add NEW features to existing app |
| `/ui-ux-pro-max` | Professional UI design with 50 styles, 21 palettes, 50 fonts |
| `/deploy` | Production deployment with pre-flight + health checks |

### Code Quality
| Command | Purpose |
|---------|---------|
| `/sheriff` | Naming conventions, file structure consistency |
| `/janitor` | Remove dead code, unused exports, stale flags |

### Performance & UX
| Command | Purpose |
|---------|---------|
| `/palette` | UX polish, accessibility, delight |
| `/stage` | End-to-end UI testing via browser |

### Documentation
| Command | Purpose |
|---------|---------|
| `/auditor` | Documentation review |
| `/scribe` | Deep documentation enhancement |
| `/sync` | Sync docs to WU Documentation folder |

### Automation & CI
| Command | Purpose |
|---------|---------|
| `/jules` | Set up Google Jules AI agent for scheduled tasks |
| `/jules-review` | Review and merge Jules AI PRs |
| `/quality-setup` | Set up CI gates, security lint, Playwright, Lighthouse |
| `/branchsync` | Sync unmerged branches into main |

---

## Skills (71 Auto-Activated Domain Modules)

Skills auto-activate via `activate_skill` when the agent detects a matching request. Only name + description are loaded at session start; full content loads on demand.

### Frontend & UI
| Skill | Purpose |
|-------|---------|
| `frontend-design` | UX psychology, color theory, audience analysis (design principles) |
| `ui-design-system` | Dark-first aesthetic, oklch colors, glass morphism (design implementation) |
| `nextjs-react-expert` | Next.js App Router patterns + React performance optimization |
| `tailwind-patterns` | Tailwind CSS v4 utilities |
| `web-design-guidelines` | 100+ rules for accessibility, UX, performance |

### Backend & API
| Skill | Purpose |
|-------|---------|
| `api-design` | REST/GraphQL/tRPC selection + Zod-first contract validation |
| `nodejs-best-practices` | Node.js async, modules, Express |
| `python-patterns` | Python standards, FastAPI |

### Database
| Skill | Purpose |
|-------|---------|
| `database-design` | Schema design, indexing, ORM selection, DynamoDB/Drizzle patterns |

### Architecture & Planning
| Skill | Purpose |
|-------|---------|
| `architecture` | System design patterns, ADRs |
| `architecture-review` | Enterprise architecture review with prioritized remediation |
| `app-builder` | Full-stack app scaffolding |
| `plan-writing` | Task planning, breakdown |
| `brainstorming` | Socratic questioning protocol |

### Testing & Quality
| Skill | Purpose |
|-------|---------|
| `testing-patterns` | Jest, Vitest, strategies |
| `webapp-testing` | E2E, Playwright |
| `tdd-workflow` | Test-driven development |
| `code-review-checklist` | Code review standards |
| `code-quality-review` | Lint results, console statements, TypeScript strictness |
| `lint-and-validate` | Linting, type coverage |
| `clean-code` | Pragmatic coding standards |

### Security
| Skill | Purpose |
|-------|---------|
| `vulnerability-scanner` | OWASP 2025, supply chain security + tactical scanning commands |
| `red-team-tactics` | Offensive security, MITRE ATT&CK |

### DevOps & Infrastructure
| Skill | Purpose |
|-------|---------|
| `deployment-procedures` | CI/CD, safe deploy workflows |
| `server-management` | Process management, monitoring |
| `dependency-health` | Dependency audit, outdated/vulnerable packages, license compliance |

### Observability & Validation
| Skill | Purpose |
|-------|---------|
| `observability-audit` | Logging, error handling, monitoring patterns |
| `api-contract-validation` | API contract drift detection, response shape validation |
| `schema-consistency` | Zod ↔ TypeScript ↔ OpenAPI ↔ DB schema sync |

### Performance
| Skill | Purpose |
|-------|---------|
| `performance-profiling` | Core Web Vitals, optimization + variety enforcement protocol |
| `bundle-optimization` | Bundle size reduction, code splitting, tree shaking |

### Mobile
| Skill | Purpose |
|-------|---------|
| `mobile-design` | iOS/Android patterns, touch UX |

### Game Development
| Skill | Purpose |
|-------|---------|
| `game-development` | 2D/3D/VR/mobile/web/PC games (10 sub-skills) |

### SEO & Growth
| Skill | Purpose |
|-------|---------|
| `seo-fundamentals` | SEO, E-E-A-T, Core Web Vitals |
| `geo-fundamentals` | GenAI optimization (ChatGPT, Perplexity) |

### Shell & CLI
| Skill | Purpose |
|-------|---------|
| `bash-linux` | Linux/macOS commands, scripting |
| `powershell-windows` | Windows PowerShell patterns |

### Language-Specific
| Skill | Purpose |
|-------|---------|
| `rust-pro` | Rust 1.75+, Tokio, axum |

### Code Maintenance
| Skill | Purpose |
|-------|---------|
| `tech-debt-scanning` | TODO/FIXME, `any` types, dead code, debt markers |
| `i18n-completeness` | Translation coverage, hardcoded string detection |

### System-Level
| Skill | Purpose |
|-------|---------|
| `behavioral-modes` | Agent personas (brainstorm, implement, debug, review, ship) |
| `parallel-agents` | Multi-agent coordination patterns |
| `intelligent-routing` | Auto agent selection |
| `mcp-builder` | Model Context Protocol server building |
| `documentation-templates` | README, API docs, code comments |
| `i18n-localization` | Internationalization patterns |
| `systematic-debugging` | 4-phase debugging methodology |
| `security-first` | Security-first development practices |
| `error-handling` | Structured AppError hierarchy, HTTP status codes |
| `git-commit-format` | Conventional Commits spec |
| `non-technical-comms` | Plain English explanations |
| `project-scaffolder` | Project template orchestration |
| `jules-environment-setup` | Google Jules VM configuration |
| `skill-creator` | Skill creation workflow and evaluation |
| `aws-deployment` | AWS Amplify, App Runner, DynamoDB, S3, Lambda |

### Document Processing
| Skill | Purpose |
|-------|---------|
| `docx` | Word document creation/editing |
| `pdf` | PDF processing, merging, splitting, OCR |
| `pptx` | Presentation creation/editing |
| `xlsx` | Excel creation/editing, financial models |

### Educational
| Skill | Purpose |
|-------|---------|
| `coach-gravity` | 9-phase curriculum for non-programmers |

---

## Scripts (Python Validation)

| Script | Purpose | When to Use |
|--------|---------|-------------|
| `checklist.py` | Priority-based project audit (security, lint, tests, UX, SEO) | During development |
| `verify_all.py` | Full verification (Lighthouse, E2E, bundle, mobile, i18n) | Pre-deployment |
| `session_manager.py` | Project state tracking | Multi-session work |
| `auto_preview.py` | Auto-start preview server | After building |

---

## Knowledge Bases (19 Project Archives)

Project-specific architectural context stored in `knowledge/`. Each subdirectory contains design docs, pipeline specs, and platform decisions for a specific project.

---

## MCP Servers

| Server | Purpose |
|--------|---------|
| `context7` | Live library documentation lookup (prevents stale API patterns) |

---

## Governing Rules (Priority Order)

1. **P0** — `~/.gemini/GEMINI.md` (global rules: classify, gate, route, implement)
2. **P0** — `~/.gemini/agreement.md` (always-on working agreement)
3. **P1** — Per-project `AGENTS.md` or `.agent/` rules
4. **P2** — Skill-specific `SKILL.md` instructions

---

**Last Updated**: 2026-04-17
**Version**: 3.0 (Skills-first architecture: 14 workflows converted to auto-activated skills, 4 skill pairs consolidated, agent frontmatter standardized)
