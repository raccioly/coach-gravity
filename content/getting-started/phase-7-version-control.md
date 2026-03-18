# 📦 Phase 7 — Version Control (Git & GitHub)

> **Read time: ~10 minutes** | **Do time: ~15 minutes**

---

> **🏁 Ready Check — Can I skip this section?**
>
> ✅ Skip if: You already use Git, have a GitHub account, and know how to commit/push
> 📖 Read if: You've never used Git or GitHub
>
> Not sure? If "git commit" means nothing to you, read on.

---

## Why Version Control?

![Save points for your project](/images/lessons/p7-version-control.png)

Imagine writing a 50-page document without any "Save As" or version history. One mistake, and everything could be lost. Version control is the solution to that problem.

**Git** gives you:
- An **undo button** for your entire project (not just one file)
- A **history** of every change ever made (who, when, what)
- The ability to **experiment safely** (try something → if it fails → go back)
- A way to **share your project** publicly or with collaborators

**GitHub** is like **Google Drive for code** — a place on the internet where your project lives so you can access it from anywhere and share it with others.

---

## The Concepts (5 Minutes)

![Git branching and merging](/images/lessons/p7-git-concepts.png)

| Concept | What It Means | Analogy |
|---|---|---|
| **Repository (Repo)** | Your project folder, tracked by Git | A Google Doc with version history |
| **Commit** | A snapshot of your project at a specific moment | Pressing "Save" with a note about what changed |
| **Push** | Upload your commits from your computer to GitHub | Syncing your Google Doc to the cloud |
| **Pull** | Download the latest version from GitHub | Refreshing a shared Google Doc |
| **Branch** | A separate copy of your project for experimenting | Making a copy of a document to try edits |
| **Merge** | Combining your experiment back into the main version | Accepting the tracked changes |

---

## Setup (One Time)

### 1. Create a GitHub Account

1. Go to **[github.com](https://github.com)**
2. Click **Sign up** and create a free account
3. Verify your email

### 2. Configure Git on Your Computer

Tell Git who you are (this labels your commits):

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

Replace with your actual name and the email you used for GitHub.

---

## Using Git With Antigravity

Here's the good news: **Antigravity handles most Git operations for you.** The `/courier` workflow automates the entire commit-push-deploy cycle.

### Your Typical Workflow

```
1. Make changes (through conversation with Antigravity)
2. Run /preflight (quality check)
3. Run /courier (commit + push + deploy)
```

That's it. The `/courier` command:
- Stages all changes
- Creates a descriptive commit message
- Pushes to GitHub
- Deploys if configured

### Creating Your First Repository

Tell Antigravity:

```
Initialize a Git repository for this project and help me 
push it to GitHub.
```

It will:
1. Run `git init` (create the tracking system)
2. Create a `.gitignore` file (tells Git which files to skip)
3. Make the first commit
4. Guide you through connecting to GitHub

---

## Manual Git Commands (For Reference)

You probably won't need these often, but they're here if you want to understand what's happening behind the scenes:

| What You Want | Command | What It Does |
|---|---|---|
| See what changed | `git status` | Shows modified files |
| Save a snapshot | `git add . && git commit -m "your message"` | Saves all changes with a note |
| Upload to GitHub | `git push` | Sends your commits to the cloud |
| Download latest | `git pull` | Gets the newest version from GitHub |
| See history | `git log --oneline -10` | Shows the last 10 commits |
| Undo last commit | `git reset HEAD~1` | Goes back one step (keeps changes) |

---

## Checkpoint ✅

At this point, you should:

- [x] Understand why version control matters
- [x] Have a GitHub account
- [x] Have Git configured with your name and email
- [x] Know that `/courier` handles commits and pushes for you

**Next:** [Phase 8 — Deploy to the Internet →](phase-8-deploy-to-aws.md)
