# Antigravity System Map

> Self-reference document for AI agents. Read at session start to understand the full toolkit.

## Global Setup Location

```
~/.gemini/
├── GEMINI.md                    # Global rules (merged: research-first + agent routing)
├── CLAUDE.md                    # Same rules for Claude-compatible agents
├── agreement.md                 # Human-AI working agreement
└── antigravity/
    ├── agents/                  # 20 specialist agent personas
    ├── global_workflows/        # 37 slash commands
    ├── skills/                  # 38 domain knowledge modules
    ├── scripts/                 # 4 Python validation scripts
    ├── mcp_config.json          # MCP server configuration (Context7)
    ├── SYSTEM-MAP.md            # This file
    └── knowledge/               # Persistent knowledge base (KIs)
```

---

## Agents (20 Specialist Personas)

Each agent is a `.md` file defining a specialist persona with required skills.

| Agent | Domain | Skills Loaded |
|-------|--------|---------------|
| `orchestrator` | Multi-agent coordination | parallel-agents, behavioral-modes |
| `project-planner` | Discovery, task planning | brainstorming, plan-writing, architecture |
| `frontend-specialist` | Web UI/UX | frontend-design, nextjs-react-expert, tailwind-patterns, web-design-guidelines |
| `backend-specialist` | API, business logic | api-patterns, nodejs-best-practices, database-design |
| `database-architect` | Schema, SQL, NoSQL | database-design |
| `mobile-developer` | iOS, Android, RN, Flutter | mobile-design |
| `game-developer` | Game logic, mechanics | game-development |
| `devops-engineer` | CI/CD, Docker, Deploy | deployment-procedures |
| `security-auditor` | Security compliance | vulnerability-scanner, red-team-tactics |
| `penetration-tester` | Offensive security testing | red-team-tactics |
| `test-engineer` | Testing strategies | testing-patterns, tdd-workflow, webapp-testing |
| `debugger` | Root cause analysis | systematic-debugging |
| `performance-optimizer` | Speed, Web Vitals | performance-profiling |
| `seo-specialist` | Ranking, visibility | seo-fundamentals, geo-fundamentals |
| `documentation-writer` | Manuals, API docs | documentation-templates |
| `product-manager` | Requirements, user stories | plan-writing, brainstorming |
| `product-owner` | Strategy, backlog, MVP | plan-writing, brainstorming |
| `qa-automation-engineer` | E2E testing, CI pipelines | webapp-testing, testing-patterns |
| `code-archaeologist` | Legacy code, refactoring | clean-code, code-review-checklist |
| `explorer-agent` | Codebase analysis | — |

---

## Workflows (37 Slash Commands)

### 🔧 Daily Drivers
| Command | Purpose |
|---------|---------|
| `/launch` | Start the dev server |
| `/preflight` | Run quality checks before committing |
| `/courier` | Commit, push, and deploy |
| `/start` | Guided onboarding for new learners |
| `/status` | Project health dashboard |
| `/preview` | Preview changes in browser |

### 🏗️ Architecture & Planning
| Command | Purpose |
|---------|---------|
| `/architect` | Full codebase review with prioritized remediation |
| `/brainstorm` | Structured idea exploration (3+ options with tradeoffs) |
| `/create` | Create new application with agent coordination |
| `/plan` | Structured task breakdown with estimates |
| `/differ` | Preview impact of changes before making them |
| `/guardian` | Protect critical files from accidental changes |

### 🛠️ Development
| Command | Purpose |
|---------|---------|
| `/enhance` | Add NEW features to existing app (not perf — use /bolt) |
| `/debug` | Systematic hypothesis-driven debugging |
| `/orchestrate` | Multi-agent coordination (3+ agents for complex tasks) |
| `/ui-ux-pro-max` | Professional UI design with 50 styles, 21 palettes, 50 fonts |
| `/deploy` | Production deployment with pre-flight + health checks |

### 📝 Code Quality
| Command | Purpose |
|---------|---------|
| `/critic` | Code and comment quality review |
| `/sheriff` | Naming conventions, file structure consistency |
| `/hunter` | Find TODO/FIXME, `any` types, tech debt markers |
| `/janitor` | Remove dead code, unused exports, stale flags |

### 🛡️ Security & Dependencies
| Command | Purpose |
|---------|---------|
| `/sentinel` | Security vulnerability scan |
| `/medic` | Dependency health audit (outdated, vulnerable packages) |

### 📊 Performance & UX
| Command | Purpose |
|---------|---------|
| `/bolt` | Performance OPTIMIZATION of existing code (not new features) |
| `/packer` | Bundle size reduction, code splitting |
| `/palette` | UX polish, accessibility, delight |
| `/stage` | End-to-end UI testing via browser |

### 📚 Documentation
| Command | Purpose |
|---------|---------|
| `/auditor` | Documentation review |
| `/scribe` | Deep documentation enhancement |
| `/sync` | Sync docs to WU Documentation folder |

### 🔬 Testing & Validation
| Command | Purpose |
|---------|---------|
| `/tester` | Test coverage gaps, flaky tests, stale mocks |
| `/keeper` | API contract validation |
| `/mirror` | Schema consistency (Zod ↔ TypeScript ↔ OpenAPI) |
| `/observer` | Logging, error handling, monitoring patterns |

### 🌐 Internationalization
| Command | Purpose |
|---------|---------|
| `/translator` | i18n completeness checker |

### 🤖 Automation & CI
| Command | Purpose |
|---------|---------|
| `/jules` | Set up Google Jules AI agent for scheduled tasks |
| `/jules-review` | Review and merge Jules AI PRs |
| `/quality-setup` | Set up CI gates, security lint, Playwright, Lighthouse |
| `/branchsync` | Sync unmerged branches into main |

---

## Skills (38 Domain Knowledge Modules)

### Frontend & UI
| Skill | Purpose |
|-------|---------|
| `frontend-design` | UI/UX patterns, color systems, typography, animation |
| `nextjs-react-expert` | React & Next.js performance (9 sections, Vercel patterns) |
| `tailwind-patterns` | Tailwind CSS v4 utilities |
| `web-design-guidelines` | 100+ rules for accessibility, UX, performance |

### Backend & API
| Skill | Purpose |
|-------|---------|
| `api-patterns` | REST, GraphQL, tRPC design |
| `nodejs-best-practices` | Node.js async, modules, Express |
| `python-patterns` | Python standards, FastAPI |

### Database
| Skill | Purpose |
|-------|---------|
| `database-design` | Schema design, indexing, ORM selection |

### Architecture & Planning
| Skill | Purpose |
|-------|---------|
| `architecture` | System design patterns, ADRs |
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
| `lint-and-validate` | Linting, type coverage |
| `clean-code` | Pragmatic coding standards |

### Security
| Skill | Purpose |
|-------|---------|
| `vulnerability-scanner` | Security auditing, OWASP 2025 |
| `red-team-tactics` | Offensive security, MITRE ATT&CK |

### DevOps & Infrastructure
| Skill | Purpose |
|-------|---------|
| `deployment-procedures` | CI/CD, safe deploy workflows |
| `server-management` | Process management, monitoring |

### Mobile
| Skill | Purpose |
|-------|---------|
| `mobile-design` | iOS/Android patterns, touch UX |

### Game Development
| Skill | Purpose |
|-------|---------|
| `game-development` | 2D/3D/VR/mobile/web/PC games |

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

### System-Level
| Skill | Purpose |
|-------|---------|
| `behavioral-modes` | Agent personas (brainstorm, implement, debug, review, ship) |
| `parallel-agents` | Multi-agent coordination patterns |
| `intelligent-routing` | Auto agent selection |
| `mcp-builder` | Model Context Protocol server building |
| `documentation-templates` | README, API docs, code comments |
| `i18n-localization` | Internationalization patterns |
| `performance-profiling` | Core Web Vitals, optimization |
| `systematic-debugging` | 4-phase debugging methodology |

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

## MCP Servers

| Server | Purpose |
|--------|---------|
| `context7` | Live library documentation lookup (prevents stale API patterns) |

---

## Governing Rules (Priority Order)

1. **P0** — `~/.gemini/GEMINI.md` (global rules: research-first, confirm-before-code, agent routing)
2. **P1** — Per-project `AGENTS.md` or `.agent/` rules
3. **P2** — Skill-specific `SKILL.md` instructions

---

**Last Updated**: 2026-04-01
**Version**: 2.0 (Super Antigravity Merge)
