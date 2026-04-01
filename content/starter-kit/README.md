# 🧰 Starter Kit — What's Inside

> This folder contains the files that power your Super Antigravity experience.

---

## Global Configuration (`global/`)

These files go in your home directory (`~/.gemini/`) and apply to **every project** you work on:

| File | Purpose |
|---|---|
| `GEMINI.md` | Rules the AI follows — request classifier, Socratic gate, agent routing, research-first |
| `CLAUDE.md` | Same rules in alternative format (for compatibility with different AI engines) |
| `agreement.md` | Operating agreement defining your working relationship with the AI |
| `SYSTEM-MAP.md` | Architecture self-reference — maps all agents, skills, and workflows |
| `mcp_config.json` | MCP server config (Context7 for live documentation lookup) |

**Installation:** Run `npx coach-gravity install` to set everything up automatically.

---

## Specialist Agents (`agents/`)

20 specialist agent personas that the AI loads based on your task type:

| Agent | Domain |
|---|---|
| `frontend-specialist` | Web UI/UX (React, CSS, HTML) |
| `backend-specialist` | API, Node.js, Python |
| `database-architect` | SQL, NoSQL, Schema design |
| `security-auditor` | Vulnerabilities, Auth |
| `test-engineer` | Unit, E2E, Coverage |
| `debugger` | Root cause analysis |
| `project-planner` | Task breakdown, planning |
| `orchestrator` | Multi-agent coordination |
| + 12 more | DevOps, Mobile, Game, SEO, Performance, etc. |

---

## Domain Skills (`skills/`)

37 knowledge modules the AI loads contextually:

**Frontend:** `frontend-design`, `nextjs-react-expert`, `tailwind-patterns`, `web-design-guidelines`
**Backend:** `api-patterns`, `nodejs-best-practices`, `python-patterns`
**Testing:** `testing-patterns`, `webapp-testing`, `tdd-workflow`
**Security:** `vulnerability-scanner`, `red-team-tactics`
**And more:** database-design, architecture, mobile-design, game-development, seo, i18n, Rust, etc.

---

## Per-Project Files (`per-project/`)

These files are copied into **each new project** you create:

| File/Folder | Purpose |
|---|---|
| `AGENT-REFERENCE.md` | Your project's "brain" — tells the AI about your project's tech, structure, and conventions |
| `.agent/workflows/*.md` | The 37 slash command definitions (see below) |

### Included Workflows (37 total)

**Everyday:** `/launch`, `/preflight`, `/courier`, `/stage`, `/status`, `/start`
**Building:** `/brainstorm`, `/create`, `/plan`, `/enhance`, `/orchestrate`, `/debug`
**Quality:** `/architect`, `/sentinel`, `/critic`, `/bolt`, `/tester`
**Maintenance:** `/hunter`, `/janitor`, `/sheriff`, `/medic`
**Docs:** `/scribe`, `/auditor`, `/sync`
**Data:** `/mirror`, `/keeper`
**UI/UX:** `/ui-ux-pro-max`, `/palette`, `/packer`
**Deploy:** `/deploy`, `/branchsync`, `/differ`, `/guardian`
**Specialized:** `/observer`, `/translator`
**CI/CD:** `/jules`, `/jules-review`, `/quality-setup`

> See [Slash Commands Reference](../reference/slash-commands.md) for detailed descriptions of each command.

---

## Validation Scripts (`scripts/`)

4 Python validation scripts for quality gates:

| Script | Purpose |
|---|---|
| `checklist.py` | Priority-based project audit (security, lint, tests, UX, SEO) |
| `verify_all.py` | Full verification suite (Lighthouse, E2E, bundle analysis) |
| `session_manager.py` | Project state tracking across sessions |
| `auto_preview.py` | Auto-start preview server after building |

---

## How It All Fits Together

```
~/.gemini/
├── GEMINI.md              ← Global rules (all projects)
├── CLAUDE.md              ← Global rules (alternative format)
├── agreement.md           ← Working agreement
└── antigravity/
    ├── agents/            ← 20 specialist personas
    ├── skills/            ← 38 domain knowledge modules
    ├── global_workflows/  ← 37 slash commands
    ├── scripts/           ← 4 validation scripts
    ├── SYSTEM-MAP.md      ← Architecture self-reference
    └── mcp_config.json    ← Context7 MCP config

your-project/
├── AGENT-REFERENCE.md     ← This project's context
├── .agent/workflows/      ← Project workflows
├── docs-canonical/        ← What you want to build
├── docs-implementation/   ← What's been built
└── src/                   ← Your application code
```
