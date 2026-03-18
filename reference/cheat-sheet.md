# 🧲 Coach Gravity — Quick Reference Cheat Sheet

> Print this page and keep it next to your monitor for your first few sessions.

---

## 🗣️ 10 Essential Phrases

| # | When You Need To... | Say This |
|---|---|---|
| 1 | **Start something** | *"I want to build..."* |
| 2 | **Approve a plan** | *"Proceed"* or *"Go ahead"* |
| 3 | **Stop the AI** | *"Stop. Don't make any changes."* |
| 4 | **Redirect** | *"That's not what I meant. I want X, not Y."* |
| 5 | **Simplify** | *"Too complex. Do the minimum."* |
| 6 | **Undo** | *"Undo the last change"* |
| 7 | **Get explanation** | *"Explain that in simple terms."* |
| 8 | **See options** | *"Show me 2-3 options."* |
| 9 | **Show a visual** | *[Paste a screenshot]* + describe what's wrong |
| 10 | **Check quality** | *"Run /preflight"* |

---

## ⚡ 5 Core Workflows

| Command | What It Does | When |
|---|---|---|
| `/launch` | Start your app locally | To preview your app |
| `/preflight` | Quality check | Before every deploy |
| `/sentinel` | Security scan | Before going live |
| `/architect` | Architecture review | After big changes |
| `/courier` | Commit + push + deploy | When ready to publish |

---

## 🖼️ The Screenshot Shortcut

**Screenshots are your superpower.** The AI understands images instantly.

| To do this... | Do this... |
|---|---|
| **Take screenshot (Windows)** | `Win + Shift + S` → select area → `Ctrl + V` in chat |
| **Take screenshot (Mac)** | `Cmd + Shift + 4` → select area → drag into chat |
| **Show what's broken** | Screenshot it + *"Fix this"* |
| **Copy a design you like** | Screenshot another website + *"Make mine look like this"* |
| **Report errors** | Open console (`F12`) → screenshot red errors → share |

---

## 🔍 Browser Console (F12)

When something breaks, press `F12` to open the browser console:

- 🔴 **Red** = error (screenshot and share)
- 🟡 **Yellow** = warning (usually OK)
- ⚪ **Gray** = informational (ignore)

---

## 🛡️ Safety Rules (Already Active)

✅ AI must show a plan before changing anything
✅ You approve every change before it happens
✅ More than 3 files? AI stops and asks first
✅ Commands require your explicit permission
✅ AI never commits without your say-so

---

## 📋 The Golden Rule

> **Describe WHAT you want, not HOW to build it.**
>
> ❌ *"Create a REST API with JWT middleware"*
> ✅ *"I need users to log in with email and password"*

---

## 🆘 If Things Go Wrong

1. Say *"Undo the last change"*
2. Open browser console (`F12`) and screenshot errors
3. Say *"Something broke. Here's what I see: [screenshot]"*
4. If stuck: start a new conversation in the same project folder
