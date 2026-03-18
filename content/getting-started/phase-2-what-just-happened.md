# 🤔 Phase 2 — What Just Happened?

> **Time: ~10 minutes reading** | Now that you've seen the magic, let's understand what happened behind the scenes.

---

## The Files Antigravity Created

![Opening your project folder](/images/lessons/p2-open-folder.png)

When you pasted that expense tracker prompt, Antigravity created **about 15 files** in your project folder. Here's what they are and why they exist:

```
your-project/
├── index.html          ← The main web page (structure)
├── styles.css          ← How everything looks (colors, layout, fonts)
├── app.js              ← How everything works (logic, interactions)
├── package.json        ← List of ingredients your project needs
├── node_modules/       ← The actual ingredients (downloaded automatically)
├── AGENT-REFERENCE.md  ← A description of your project for the AI
├── docs-canonical/     ← What you asked to build (your requirements)
├── docs-implementation/← What was actually built (auto-generated notes)
└── .agent/workflows/   ← The slash commands (/preflight, /launch, etc.)
```

> **You don't need to touch any of these files.** Antigravity manages them for you. But understanding what they are helps you feel in control.

---

## Key Concepts — Now That You've Seen Them

You've already experienced all of these. Now let's name them:

| What You Saw | What It's Called | Plain English |
|---|---|---|
| The text box where you typed prompts | **Terminal** | A way to give your computer text commands. Like texting it. |
| `http://localhost:3000` in your browser | **Localhost** | Your computer pretending to be a website. Only you can see it. |
| The `:3000` part | **Port** | An apartment number. Your computer can run multiple things, each on a different port. |
| The window showing progress text | **Dev Server** | A mini server that runs on your computer so you can preview your app. |
| The files Antigravity created | **Source Code** | Instructions that tell the computer what to build and how it should look. |
| The colored charts and dark theme | **Frontend** | The part of an app you see — screens, buttons, charts. |
| `localStorage` (where expenses are saved) | **Browser Storage** | Your browser remembers data even after you close the page. |

> 💡 **You already used all of these in Phase 1.** Now you have names for them. That's it.

---

## Your Role vs. Antigravity's Role

![Your role vs Antigravity's role](/images/lessons/p0-roles.png)

Think of it like building a house:

| Role | You (The Boss) | Antigravity (The Team) |
|---|---|---|
| **Decides what to build** | ✅ | ❌ |
| **Reviews the blueprint** | ✅ | Shows it for approval |
| **Does the construction** | ❌ | ✅ |
| **Inspects the result** | ✅ | Helps with quality checks |
| **Requests changes** | ✅ | Makes them |
| **Approves the final result** | ✅ | Waits for your OK |

> **You never need to know HOW things work. You only need to know WHAT you want.**

---

## About AI Models

When Antigravity talks to AI, it uses different models. Think of them as different specialists:

| Model | Analogy | Best For |
|---|---|---|
| **Gemini 2.5 Pro** | The architect | Complex planning, understanding big projects |
| **Claude Sonnet** | The craftsman | Careful, precise code writing |
| **GPT-4** | The generalist | Good all-around work |

> 💡 **You don't need to choose.** Antigravity picks the right model for each task. If you have a preference, you can set it in the Antigravity settings.
>
> ![Gemini settings panel showing model options](../images/gemini-settings.png)

---

## Your Data & Privacy

A few things worth knowing:

| Question | Answer |
|---|---|
| **Where does the code run?** | On YOUR computer. Not in the cloud. |
| **Can Antigravity see my other files?** | Only the folder you opened. Everything else is invisible. |
| **Is my code stored on Antigravity's servers?** | No. The AI processes your requests but doesn't permanently store your code files. |
| **What about the expense data I entered?** | Saved in your browser's local storage. Not sent anywhere. |

---

## What You Can Say If Things Feel Confusing

| If you feel... | Say this to Antigravity |
|---|---|
| **Lost** | *"Explain what's happening in simple terms."* |
| **Overwhelmed** | *"Let's slow down. What did you just do and why?"* |
| **Like something broke** | *"Something doesn't look right. Here's what I see: [describe or screenshot]. Fix it."* |
| **Curious** | *"Why did you choose that approach? What alternatives are there?"* |

---

## What's Next

You've built an app. You understand what happened behind the scenes. Now let's master the skill of communicating with AI:

**Next:** [Phase 3 — How to Talk to AI →](phase-3-talking-to-ai.md)

---

> *This guide is part of the Coach Gravity Starter Kit — built to help anyone, regardless of technical background, build real software with Antigravity AI.*
