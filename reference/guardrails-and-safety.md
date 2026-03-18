# 🛡️ Guardrails & Safety — Why AI Coding Is Safe

> Everything you need to know about how Antigravity keeps you in control.

---

## The Three Layers of Protection

### Layer 1: Configuration Rules (GEMINI.md / CLAUDE.md)

Your global config files enforce these behaviors on **every interaction**:

| Rule | What It Does |
|---|---|
| **Pre-Implementation Checklist** | Before writing any code, the AI must show: what docs it checked, what patterns already exist, its proposed approach, files it will change, and the risk level. You approve before anything happens. |
| **3-File Change Limit** | If the AI needs to change more than 3 files, it must stop, list all files, and wait for "proceed." |
| **No Storage Shortcuts** | The AI is not allowed to store data in-memory or locally — it must use proper cloud services (S3, DynamoDB, Redis). |
| **No Silent Commits** | The AI never commits or pushes code without explicit "commit" approval from you. |
| **Documentation Checks** | Before writing code, it checks `docs-canonical/` for existing requirements and `docs-implementation/` for what's been built. |

### Layer 2: Command Approval

Every time Antigravity wants to run a command on your computer, it shows you:
- The **exact command** it wants to run
- What the command **does** in plain English
- You click **Approve** or **Reject**

Exception: Steps marked with `// turbo` in workflows run automatically. These are intentionally safe operations like starting a dev server or running tests.

### Layer 3: Quality Workflows

| Workflow | What It Catches |
|---|---|
| `/preflight` | Build errors, test failures, unused code, environment issues |
| `/sentinel` | Security vulnerabilities, exposed secrets, unsafe dependencies |
| `/architect` | Architecture problems, missing error handling, poor code organization |
| `/critic` | Code quality issues, bad naming, duplicated logic |
| `/tester` | Missing tests, flaky tests, untested edge cases |

---

## Common Safety Questions

### "Can the AI delete my files?"

Only if you approve. File deletions always require explicit confirmation. The AI shows you what it plans to delete before doing it.

### "What if it installs malicious software?"

All dependencies come from **npm** (the official JavaScript package registry). The `/medic` workflow checks for known vulnerabilities. The AI won't install random software — only well-known, widely-used packages needed for your project.

### "Can it access the internet from my computer?"

Antigravity can browse the web to look up documentation and best practices. It does not make financial transactions, log into accounts, or access services without your knowledge.

### "What if I leave it running overnight?"

Nothing happens. Antigravity only acts when you send a message. It doesn't run in the background or make changes while you're away.

---

## Best Practices

| Practice | Why |
|---|---|
| **Always review the plan before saying "proceed"** | Catches misunderstandings early |
| **Run `/preflight` before deploying** | Catches bugs before they go live |
| **Run `/sentinel` for apps with user data** | Ensures security is solid |
| **Keep the approval gates in your config files** | They protect you from unintended changes |
| **Commit often with Git** | Creates restore points you can go back to |
