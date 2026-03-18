# ⚙️ Phase 1 — Setup Your Computer

> **Read time: ~10 minutes** | **Do time: ~15 minutes**

---

> **🏁 Ready Check — Can I skip this section?**
>
> ✅ Skip if: You already have **Node.js** (v18+) and **Git** installed
> 📖 Read if: You've never installed a programming tool before
>
> Not sure? Open your terminal and type `node --version` then `git --version`. If both show a version number, skip to [Phase 2](phase-2-configure-antigravity.md).

---

## What We're Installing and Why

Before Antigravity can build software for you, your computer needs two free tools. Think of it like this:

> Antigravity is the **architect and construction crew**. But even the best crew needs tools on the job site. Node.js and Git are those tools.

| Tool | What It Does | Analogy |
|---|---|---|
| **Node.js** | Runs the code that Antigravity writes | The engine that powers everything |
| **Git** | Saves versions of your work | "Undo" for your entire project — like Google Docs version history |

Both are:
- ✅ Free
- ✅ Safe (used by millions of professional developers worldwide)
- ✅ Open-source (you can see exactly what they do)

---

## Installing Node.js

### Windows

1. Go to **[nodejs.org](https://nodejs.org)**
2. Click the **LTS** (Long Term Support) button — this is the stable version
3. Run the downloaded installer
4. Click **Next** through all the steps (the defaults are fine)
5. When it asks about **"Tools for Native Modules"** — check the box, then continue
6. Click **Install**, then **Finish**

### Mac

1. Go to **[nodejs.org](https://nodejs.org)**
2. Click the **LTS** button
3. Open the downloaded `.pkg` file
4. Click **Continue** through all the steps
5. Click **Install** (you may need to enter your computer password)
6. Click **Close**

### Verify It Worked

Open your terminal:
- **Windows**: Press `Win + R`, type `powershell`, press Enter
- **Mac**: Press `Cmd + Space`, type `terminal`, press Enter

Type this and press Enter:
```
node --version
```

You should see something like `v22.13.1` (the exact number doesn't matter, as long as it's v18 or higher).

> **Didn't work?** Close your terminal and open a new one. The installer needs a fresh terminal to take effect. If it still doesn't work, restart your computer and try again.

---

## Installing Git

### Windows

1. Go to **[git-scm.com/download](https://git-scm.com/download)**
2. Click the **Windows** download link
3. Run the installer
4. Click **Next** through all the steps (the defaults are fine for all options)
5. Click **Install**, then **Finish**

### Mac

Git might already be installed. Open Terminal and type:
```
git --version
```

If you see a version number, you're done! If not:
1. It will prompt you to install **Xcode Command Line Tools**
2. Click **Install** when prompted
3. Wait for the installation (this can take a few minutes)
4. Try `git --version` again

### Verify It Worked

In your terminal, type:
```
git --version
```

You should see something like `git version 2.47.1`.

---

## Understanding the Terminal

The terminal is something you'll use occasionally. Here's everything you need to know:

### What It Is

The terminal is a way to **type commands** to your computer. Instead of clicking buttons and menus, you type text commands.

Think of it like texting your computer:
- You type a command
- Your computer does something
- It types back what happened

### Essential Commands

| Command | What It Does | Example |
|---|---|---|
| `cd folder-name` | Go into a folder | `cd Desktop` |
| `cd ..` | Go back one folder level | Goes from `Desktop/projects` to `Desktop` |
| `ls` (Mac) / `dir` (Windows) | List what's in the current folder | Shows files and folders |
| `pwd` (Mac) / `cd` (Windows, alone) | Show where you currently are | Prints the current folder path |
| `clear` | Clear the screen | Just cleans up visual clutter |

> **You won't need to use the terminal much.** Antigravity handles most terminal operations for you — it types the commands and shows you what happened. But understanding these basics helps you know what you're looking at.

---

## Checkpoint ✅

At this point, you should have:

- [x] Node.js installed (verified with `node --version`)
- [x] Git installed (verified with `git --version`)
- [x] A basic understanding of what the terminal is

**Next:** [Phase 2 — Configure Antigravity →](phase-2-configure-antigravity.md)
