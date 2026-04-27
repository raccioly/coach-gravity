# 🧰 Starter Kit — What's Inside

> This folder contains the files that power your Super Antigravity experience.

---

## Global Configuration (`global/`)

These files go in your home directory (`~/.gemini/`) and apply to **every project** you work on:

| File | Purpose |
|---|---|
| `GEMINI.md` | Rules the AI follows — request classifier, Socratic gate, agent routing, research-first |
| `CLAUDE.md` | Same rules for Claude Code compatibility (`~/.claude/CLAUDE.md`) |
| `SYSTEM-MAP.md` | Architecture self-reference — maps all agents, skills, and workflows |
| `GATES.md` | Mandatory quality gate for complex requests |

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

58 knowledge modules the AI loads contextually:

**Frontend:** `frontend-design`, `nextjs-react-expert`, `nextjs-patterns`, `tailwind-patterns`, `ui-design-system`, `web-design-guidelines`
**Backend:** `api-patterns`, `api-design`, `api-contracts`, `nodejs-best-practices`, `python-patterns`, `error-handling`
**Testing:** `testing-patterns`, `webapp-testing`, `tdd-workflow`
**Security:** `vulnerability-scanner`, `red-team-tactics`, `security-first`
**Architecture:** `architecture`, `architecture-review`, `aws-deployment`
**And more:** database-design, database-patterns, mobile-design, game-development, seo, i18n, Rust, etc.

---

## Per-Project Files (`per-project/`)

These files are copied into **each new project** you create:

| File/Folder | Purpose |
|---|---|
| `AGENT-REFERENCE.md` | Your project's "brain" — tells the AI about your project's tech, structure, and conventions |
| `.agent/workflows/*.md` | The 35 slash command definitions (see below) |

### Included Workflows (35 total)

**Everyday:** `/launch`, `/preflight`, `/courier`, `/stage`, `/status`, `/start`
**Building:** `/brainstorm`, `/create`, `/plan`, `/enhance`, `/orchestrate`, `/debug`
**Quality:** `/architect`, `/sentinel`, `/critic`, `/bolt`, `/tester`
**Maintenance:** `/hunter`, `/janitor`, `/sheriff`, `/medic`
**Docs:** `/scribe`, `/auditor`, `/sync`
**Data:** `/mirror`, `/keeper`
**UI/UX:** `/ui-ux-pro-max`, `/palette`, `/packer`
**Deploy:** `/deploy`, `/branchsync`, `/differ`, `/guardian`
**Specialized:** `/observer`, `/translator`, `/quality-setup`

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

### For Gemini / Claude Code (Global Install)

```
~/.gemini/
├── GEMINI.md              ← Global rules (all projects)
└── antigravity/
    ├── agents/            ← 20 specialist personas
    ├── skills/            ← 58 domain knowledge modules
    ├── global_workflows/  ← 35 slash commands
    ├── scripts/           ← 4 validation scripts
    ├── SYSTEM-MAP.md      ← Architecture self-reference
    └── GATES.md           ← Quality gate for complex tasks

~/.claude/
└── CLAUDE.md              ← Global rules for Claude Code
```

### For VS Code Copilot / Cursor (Per-Project Init)

```
your-project/
├── .vscode/
│   └── settings.json      ← Copilot hooks (auto-generated)
├── .github/
│   ├── copilot-instructions.md  ← Global AI instructions
│   ├── skills/            ← 58 skills (native Agent Skills)
│   ├── prompts/           ← 35 workflows as /slash commands
│   └── agents/            ← 20 personas as @participants
├── AGENT-REFERENCE.md     ← This project's context
├── .agent/workflows/      ← Project workflows
├── docs-canonical/        ← What you want to build
├── docs-implementation/   ← What's been built
└── src/                   ← Your application code
```
