# 🧰 Starter Kit — What's Inside

> This folder contains the files that power your Antigravity experience.

---

## Global Configuration (`global/`)

These files go in your home directory (`~/.gemini/`) and apply to **every project** you work on:

| File | Purpose |
|---|---|
| `GEMINI.md` | Rules the AI follows — show plans first, get approval, check docs before coding |
| `CLAUDE.md` | Same rules in alternative format (for compatibility with different AI engines) |
| `agreement.md` | Operating agreement defining your working relationship with the AI |

**Installation:** The `/start` workflow installs these automatically, along with all 25 global workflows. Or manually copy them:
```bash
mkdir -p ~/.gemini && cp global/* ~/.gemini/
mkdir -p ~/.gemini/workflows && cp per-project/.agent/workflows/*.md ~/.gemini/workflows/
```

---

## Per-Project Files (`per-project/`)

These files are copied into **each new project** you create:

| File/Folder | Purpose |
|---|---|
| `AGENT-REFERENCE.md` | Your project's "brain" — tells the AI about your project's tech, structure, and conventions |
| `.agent/workflows/*.md` | The 25 slash command definitions (see below) |

### Included Workflows (25 total)

**Everyday:** `/launch`, `/preflight`, `/courier`, `/stage`
**Quality:** `/architect`, `/sentinel`, `/critic`, `/bolt`, `/tester`
**Maintenance:** `/hunter`, `/janitor`, `/sheriff`, `/medic`
**Docs:** `/scribe`, `/auditor`, `/sync`
**Data:** `/mirror`, `/keeper`
**UI/UX:** `/palette`, `/packer`
**Git:** `/branchsync`, `/differ`, `/guardian`
**Specialized:** `/observer`, `/translator`

> See [Slash Commands Reference](../reference/slash-commands.md) for detailed descriptions of each command.

---

## How It All Fits Together

```
~/.gemini/
├── GEMINI.md          ← Global rules (all projects)
├── CLAUDE.md          ← Global rules (alternative format)
└── agreement.md       ← Working agreement

your-project/
├── AGENT-REFERENCE.md ← This project's context
├── .agent/workflows/  ← 25 slash commands
├── docs-canonical/    ← What you want to build
├── docs-implementation/ ← What's been built
└── src/               ← Your application code
```
