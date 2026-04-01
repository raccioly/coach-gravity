# 👋 Welcome to Coach Gravity

**Super Antigravity v2.0** — Learn to build real software, no coding experience required.

**To get started, type `/start` in the chat below.**

That's it. The tool will walk you through everything from here.

---

## What You Get

| Component | Count | Description |
|-----------|-------|-------------|
| 🤖 **Specialist Agents** | 20 | AI personas for frontend, backend, security, design, etc. |
| 🧩 **Domain Skills** | 38 | Knowledge modules the AI loads contextually |
| ⚡ **Slash Commands** | 37 | Workflows like `/brainstorm`, `/create`, `/deploy` |
| 📜 **Validation Scripts** | 4 | Python-based quality gates |
| 🌐 **MCP Server** | 1 | Context7 for live documentation lookups |
| 📚 **Curriculum** | 9 phases | From zero to deployed app |

## Installation

**Option A — npm (recommended):**
```bash
npx coach-gravity install
```
This installs everything: agents, skills, workflows, scripts, MCP config, DocGuard, and global config files into `~/.gemini/`.

**Option B — ZIP archive:**
1. **Unzip** `coach-gravity-full-v2.0.0.zip` into a folder on your machine
2. **Open** the folder in your AI coding agent (Antigravity)
3. **Type** `/start` in the agent chat to begin
4. **Follow** the 9-phase curriculum (Phase 0–8)

### Per-Project Setup
```bash
npx coach-gravity init
```
Sets up `AGENT-REFERENCE.md`, `.agent/workflows/start.md`, and `docs-canonical/` in the current directory.

---

## Project Structure

| Directory | Purpose |
|-----------|---------|
| `content/getting-started/` | 9-phase learning curriculum (Phase 0–8) |
| `content/reference/` | Cheat sheets, glossary, troubleshooting, slash commands |
| `content/starter-kit/` | Distributable agents, skills, workflows, scripts, configs |
| `content/project-planning/` | Questionnaires and documentation structure guides |
| `content/delivery/` | Email templates and video guide scripts |
| `bin/cli.js` | CLI installer (cross-platform: macOS + Windows) |
| `.agent/` | Project-level AI agent configuration |

### CLI Commands

| Command | Purpose |
|---------|---------|
| `npx coach-gravity install` | Full global setup |
| `npx coach-gravity install --force` | Reset global configs to defaults |
| `npx coach-gravity init` | Set up current project |
| `npx coach-gravity update` | Update workflows, agents, skills |
| `npx coach-gravity uninstall` | Remove Coach Gravity |

### Developer Commands

| Command | Purpose |
|---------|---------|
| `node bin/cli.js install` | Test full install locally |
| `docguard guard` | Validate documentation quality |
| `docguard score` | Check documentation maturity score |

---

## Quick Links

- 💡 **Curious what this is about?** Read [What Is This?](content/getting-started/phase-0-trust-and-setup.md)
- 🤔 **Have questions?** Read the [FAQ](content/getting-started/faq.md)
- ⚡ **All 37 slash commands** — [Slash Commands Reference](content/reference/slash-commands.md)
- 📧 **Got this ZIP from someone?** They're available to help if you get stuck.

## License

MIT — Free to use, modify, and distribute.

Made with ❤️ by [Ricardo Accioly](https://github.com/raccioly)
