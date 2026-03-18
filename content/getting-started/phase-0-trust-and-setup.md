# 🌟 Phase 0 — Trust & Setup

> **Time: ~20 minutes** | Before anything else, let's make sure you trust the tool and have everything installed.

---

## Welcome

Hi. 👋

If you're reading this, someone thought you'd benefit from a tool that lets you build real software — websites, dashboards, business tools — without writing any code yourself.

**Here's the deal:**
- You will **not** need to learn to code
- You will **not** break your computer
- You **will** build a working app today (in Phase 1)

This page gets you set up. Phase 1 is where the magic happens.

---

## What Is Antigravity?

Think of Antigravity as having a **full engineering team sitting next to you**, ready to work whenever you are. You talk to it in plain English, and it builds real software for you.

> **You are the boss. Antigravity is your engineering team.**
>
> You describe what you want in everyday language. Antigravity figures out how to build it, shows you a plan, and only proceeds when you say "go ahead."

You don't need to know how to code. You just need to know **what you want to build** and **who it's for**.

---

## See What Other People Built (Zero Coding Experience)

These are real projects — all built by someone with **zero programming experience**, using only Antigravity:

---

### 🏢 Nonprofit Community Portal

**What it is:** A complete 15-page bilingual website for a real nonprofit organization — with volunteer and client portals, content management, and full English/Spanish support.

**What the user said to start building it:**
> *"I need a website for a nonprofit that helps connect volunteers with clients in Atlanta. It should have pages for volunteers to apply, clients to request help, and an about page with our history since 1995. Support English and Spanish."*

That's it. One paragraph. Antigravity built the entire thing.

![Nonprofit Community Portal](../images/cct_project_example.png)

---

### 🎯 Interactive Strategy Presentation

**What it is:** An interactive web-based presentation with decision trees, financial modeling sliders, and animated charts — replacing a traditional PowerPoint.

**What the user said:**
> *"Instead of a boring PowerPoint, I want an interactive web experience where executives can explore pathways, see costs with sliders, and visualize regulatory timelines."*

![Interactive Strategy Presentation](../images/credit_union_example.png)

---

### 💬 Customer Support Inbox

**What it is:** A live production system handling real customer messages in real-time, with CRM, agent management, SLA tracking, and performance dashboards.

**What the user said:**
> *"I need a WhatsApp inbox system where agents can see incoming messages, respond, manage contacts, and track SLA performance."*

![Customer Support Inbox](../images/gallery-strategy-presentation.png)

---

> **The pattern:** In every case, the user described what they wanted in plain English — and Antigravity built a complete, professional application. No coding. No templates. Custom software.

---

## Safety — Why You Can't Break Anything

Let's address the fears directly:

| Fear | Truth |
|---|---|
| **"Can it break my computer?"** | No. It only works inside the folder you open. Before making changes, it shows a plan and waits for approval. Before running commands, it asks permission. |
| **"Can it access my personal files?"** | Only the folder you open. Photos, documents, emails — invisible and inaccessible. |
| **"What if I say the wrong thing?"** | There are no wrong inputs. The worst that happens is it builds something you don't like — and you say "undo." |
| **"Will it cost money?"** | Not to get started. Antigravity, Node.js, and Git are all free. AWS free tier covers prototypes for 12 months. |

> 🛡️ **Nothing you type can break your computer. The worst outcome is you say "undo."**

---

## Install the Prerequisites

Before Antigravity can build software for you, your computer needs two free tools:

| Tool | What It Does | Analogy |
|---|---|---|
| **Node.js** | Runs the code that Antigravity writes | The engine that powers everything |
| **Git** | Saves versions of your work | "Undo" for your entire project |

### Install Node.js

**Windows:**
1. Go to **[nodejs.org](https://nodejs.org)**
2. Click the **LTS** button
3. Run the installer → click **Next** through all steps (defaults are fine)
4. When asked about **"Tools for Native Modules"** — check the box

**Mac:**
1. Go to **[nodejs.org](https://nodejs.org)**
2. Click the **LTS** button
3. Open the downloaded `.pkg` file → click **Continue** through all steps

**Verify:** Open your terminal (Windows: `Win + R` → type `powershell` / Mac: `Cmd + Space` → type `terminal`), then type:
```
node --version
```
You should see a version number like `v22.13.1`.

> **Didn't work?** Close your terminal and open a new one. If still failing, restart your computer.

### Install Git

**Windows:**
1. Go to **[git-scm.com/download](https://git-scm.com/download)**
2. Click Windows → run installer → click **Next** through all steps

**Mac:** Open Terminal and type `git --version`. If not installed, it will prompt you to install Xcode Command Line Tools → click **Install**.

**Verify:**
```
git --version
```

---

## Install & Configure Antigravity

### Step 1: Open This Folder in Antigravity

1. Download and install Antigravity (if not already done)
2. Open Antigravity
3. Click **File → Open Folder** → navigate to this `coach_gravity` folder

![Antigravity file explorer sidebar](../images/antigravity-file-explorer.png)

### Step 2: Type `/start`

In the Antigravity chat, type:

```
/start
```

This does four things:
1. ✅ **Copies safety rules** to your computer — these tell Antigravity to always show plans, get approval, and follow a structured workflow
2. ✅ **Installs 25 slash commands** globally — specialist workflows like `/preflight`, `/sentinel`, and `/architect` that are available in every project
3. ✅ **Checks your tools** — verifies Node.js and Git are installed
4. ✅ **Guides you to your first build** — Phase 1

> [!CAUTION]
> **Don't skip `/start`.** It installs the safety rules that protect you. Without them, Antigravity can make changes without showing you a plan first.

### Step 3: Install the Chrome Extension

Antigravity has a Chrome extension that lets it see and test your app in the browser:

1. Open **Google Chrome**
2. Go to the Chrome Web Store page for the Antigravity extension
3. Click **Add to Chrome** → **Add Extension**

> This is optional but recommended. It powers the `/stage` command (automated browser testing).

---

## Checkpoint ✅

At this point, you should have:

- [x] Node.js installed (verified with `node --version`)
- [x] Git installed (verified with `git --version`)
- [x] This folder open in Antigravity
- [x] `/start` completed (safety rules installed)

**Now the fun part → [Phase 1 — Your First App 🚀](phase-1-your-first-app.md)**

---

> *This guide is part of the Coach Gravity Starter Kit — built to help anyone, regardless of technical background, build real software with Antigravity AI.*
