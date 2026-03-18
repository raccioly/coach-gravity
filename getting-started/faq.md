# 🤔 FAQ — Fears, Doubts, and Misconceptions

> Every question here is one that a real person asked (or thought but didn't ask).

---

## Before Getting Started

### "I've never written a line of code. Can I really build software?"

**Yes.** Antigravity writes all the code. Your job is to describe what you want, review what it builds, and give feedback. If you can explain something to a friend, you can direct Antigravity.

### "Is this just for simple stuff? Like toy projects?"

**No.** The projects in the [gallery](phase-0-trust-and-setup.md#see-what-other-people-built-zero-coding-experience) include a production messaging platform handling real customers, a 15-page bilingual website for a real nonprofit, and an interactive financial strategy tool used in enterprise presentations. These are real, professional-grade applications.

### "Will this cost me money?"

**Not to start.** Antigravity, Node.js, and Git are all free. AWS has a generous 12-month free tier. The only costs come if you deploy a high-traffic application — and even then, small projects typically cost $5-15/month. See [Phase 8](phase-8-deploy-to-aws.md#cost-expectations) for details.

### "What if I break something?"

**You can always undo.** Git tracks every change, so you can revert to any previous state. Antigravity asks permission before making changes, so nothing happens by surprise. And if something does go wrong, you can say "undo the last change" and it will restore the previous version.

### "Do I need a powerful computer?"

**No.** Any computer made in the last 5-6 years should be fine. You need:
- Windows 10/11 or macOS
- 8GB+ RAM (most computers have this)
- 10GB+ free disk space
- Internet connection

---

## While Building

### "The AI built something wrong. What do I do?"

Say: *"That's not what I meant. Let me explain what I actually want..."* — then describe what you wanted differently. The AI adjusts based on your feedback. See [Phase 3](phase-3-talking-to-ai.md) for detailed conversation examples.

### "I don't understand what the AI is doing."

Say: *"Explain what you just did in simple terms."* — The AI will break it down into plain English. You can also ask *"Why did you choose that approach?"* to understand its reasoning.

### "It keeps doing the same wrong thing."

Be more explicit: *"I specifically want X, not Y. This is a hard requirement."* If it persists, start a new conversation with a clearer description.

### "Can I work on my project from multiple computers?"

**Yes** — once you push your project to GitHub (Phase 7), you can clone it on any computer. Your code, history, and documentation travel with the repository.

### "What if my internet goes out?"

You can still work! Building and testing happens on your computer (localhost). You only need internet to push to GitHub, deploy to AWS, or use Antigravity itself.

### "Can I use Antigravity for work/commercial projects?"

**Yes.** The code Antigravity generates is yours. There are no licensing restrictions on projects you build.

---

## About Safety

### "Can Antigravity access my email, photos, or personal files?"

**No.** Antigravity can only access the folder you explicitly open in it. Everything else on your computer is invisible and inaccessible to it.

### "Can the AI run things on my computer without asking?"

**By default, it asks permission for every command.** Certain workflow steps marked with `// turbo` run automatically (like starting your dev server), but these are safe operations that don't change anything permanently.

### "Is my project data sent to Antigravity's servers?"

The code runs locally on your computer. Antigravity communicates with AI services to process your requests, but your code files aren't stored on their servers permanently.

### "What about the `/courier` command — can it deploy without my permission?"

`/courier` runs `/preflight` first (quality checks). But it still needs you to **approve the deployment** before it pushes to production. The approval gate is enforced by your configuration files.

---

## About the Technology

### "Do I need both `GEMINI.md` and `CLAUDE.md`?"

**Only if you use both AI providers.** Having both doesn't cause conflicts — extra files are ignored by the provider that doesn't use them. Having both is recommended for compatibility.

### "What if I don't fill out `AGENT-REFERENCE.md`?"

Antigravity still works, but less effectively. Without project context, it might name things differently, put files in unexpected places, or miss documentation updates. The more context you provide, the better — but you can start bare and add detail over time.

### "Can I add my own slash commands?"

**Yes!** Create a new `.md` file in `.agent/workflows/`. If you name it `mycommand.md`, you can use it as `/mycommand`. See [Phase 6](phase-6-iterate-and-improve.md) for details.

### "What if a global workflow and a project workflow have the same name?"

The **project-level** workflow takes priority. This lets you customize behavior per project while keeping global defaults for everything else.

### "I have all 25 workflows — do I need them all?"

**No.** They're available when you need them. Most people use `/launch`, `/preflight`, and `/courier` daily and dip into others as needed. Having unused workflows doesn't slow anything down.

---

## Getting Help

### "Where do I get help if I'm stuck?"

1. **Ask Antigravity** — it can troubleshoot most issues itself
2. **Check this FAQ** and the [Troubleshooting](../reference/troubleshooting.md) guide
3. **Contact the person who sent you this** — they set up Coach Gravity specifically to help you
4. **Try starting a new conversation** — sometimes a fresh start resolves confusion

### "I followed all the steps but something doesn't work."

Tell Antigravity exactly what happened: *"I did X, expected Y, but got Z instead."* Include any error messages you see. The more specific you are, the faster it can help.
