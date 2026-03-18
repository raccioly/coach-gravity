# 🚀 Phase 1 — Your First App

> **Time: ~15 minutes** | ❌ **This is the whole point. Don't skip this.**

---

## What's About to Happen

You're going to paste a single prompt into Antigravity and watch it build you a complete, working expense tracker — with charts, forms, animations, and dark mode. In your browser. In about 5 minutes.

No coding. No configuration. Just one prompt.

---

## Step 1: Paste This Prompt

![Your first interaction with AI](/images/lessons/p2-first-interaction.png)

Copy this **entire block** and paste it into the Antigravity chat:

```
Build me a personal expense tracker app. I want to be able to:
- Add expenses with a name, amount, category (food, transport, 
  entertainment, bills, other), and date
- See a dashboard with: total spent this month, a pie chart 
  breaking down spending by category, and a bar chart showing 
  daily spending for the last 7 days
- See a list of all my expenses with the ability to delete them
- Store everything in the browser (no backend needed)

Make it look premium and modern with dark mode. Use smooth 
animations and a purple/blue color scheme. Make it mobile-friendly.
```

## Step 2: Watch the Plan

Antigravity will show you a **plan** before building anything. It looks something like this:

```
## Pre-Implementation Checklist
- Docs reviewed: [files it checked]
- Proposed approach: [what it will build]
- Files to change: [list of files]
- Risk level: LOW

Waiting for approval to proceed.
```

**📸 What you'll see:**

<!-- PLACEHOLDER: Screenshot of Antigravity showing a plan approval prompt for the expense tracker -->

**What to do:** Read through the plan. Does it make sense? Then type:

```
Proceed
```

> 🛡️ **This is your safety net.** Antigravity always shows you the plan first. You approve before anything happens. If something doesn't look right, say "Wait, I want to change..." and explain what's different.

## Step 3: Watch It Build

Now sit back and watch. Antigravity will:

1. 📁 Create the project files (HTML, CSS, JavaScript)
2. 📦 Install any needed packages
3. 🖥️ Start a local server on your computer
4. 🔗 Give you a URL to open in your browser

When it's done, it will show you a URL like:

```
http://localhost:3000
```

**Open that URL in your browser** (Chrome, Firefox, Edge — any browser works).

## Step 4: See Your App 🤯

![Your app running in the browser](/images/lessons/p4-see-it-running.png)

You should now see a beautiful expense tracker dashboard in your browser:
- A dark, premium interface
- A form to add expenses
- A pie chart (empty for now)
- A bar chart showing the last 7 days

**📸 What you'll see:**

<!-- PLACEHOLDER: Screenshot of the running expense tracker app at localhost — showing the dark dashboard with empty charts -->

**Try it out:**
1. Add a few expenses — click the add button, enter "Coffee - $5 - Food"
2. Watch the **pie chart update in real-time**
3. Add a few more with different categories
4. Watch the **bar chart change**
5. Delete one and watch the charts adjust

**You built that.** Not from a template. Not by dragging and dropping. Antigravity wrote every line of code from your one-paragraph description.

> 🤔 **What just happened?** You typed one paragraph in plain English. Antigravity interpreted it, created ~15 code files (HTML for structure, CSS for design, JavaScript for charts and interactions), installed the needed tools, started a server on your computer, and served the app to your browser. All automatically. You'll learn more about what each piece does in [Phase 2](phase-2-what-just-happened.md).

> 🛡️ **Remember:** This app is running on YOUR computer only. Nobody else can see it. It's like a private dress rehearsal before opening night.

---

## 🎯 Missions — Level Up

Now that you've seen the magic, let's practice the most important skill: **directing the AI**. Each mission teaches you something new.

---

### 🟢 Mission 1: Change the Look *(~2 minutes)*

Paste this into the chat:

```
Change the color scheme from purple/blue to green and gold. 
Keep the dark mode.
```

Watch Antigravity update the design. Refresh your browser to see the changes.

**What you just learned:** You can change anything about the design just by describing what you want.

> 🤔 **What just happened?** Antigravity found the CSS file (the file that controls colors and styling), changed the color values from purple/blue to green/gold, and reloaded the app. You didn't need to know which file, which line, or what "CSS" even means.

---

### 🟢 Mission 2: Add a Feature *(~3 minutes)*

Paste this into the chat:

```
Add a monthly budget feature. I want to:
- Set a monthly spending limit (default to $2,000)
- Show a progress bar at the top of the dashboard that fills 
  up as I spend more
- When I'm over 80% of the budget, make the progress bar 
  turn yellow. Over 100%, make it red.
```

After it builds, test it — add expenses and watch the progress bar react.

**What you just learned:** You can add entirely new features by describing them. The AI figures out the code.

> 🤔 **What just happened?** Antigravity created new variables to track the budget, added a progress bar HTML element, wrote the logic to calculate percentages and change colors at thresholds, and styled it to fit the existing design. From your 3-sentence description.

---

### 🟡 Mission 3: Use Your Secret Weapon — Screenshots *(~2 minutes)*

This is one of the most powerful things most people don't know: **Antigravity understands images.**

1. Look at your app in the browser
2. Take a screenshot of something you want changed:
   - **Windows:** `Win + Shift + S` → select the area → paste into chat with `Ctrl + V`
   - **Mac:** `Cmd + Shift + 4` → select the area → drag the file into the chat
3. Along with the screenshot, type something like:

```
[paste screenshot]
"The spacing between the cards looks too tight. 
Make them more spread out. Also, make the delete 
button smaller and more subtle."
```

**What you just learned:** A screenshot + one sentence is worth more than a paragraph of description. Use this constantly.

---

### 🟡 Mission 4: Run a Quality Check *(~1 minute)*

Type this:

```
/preflight
```

This runs an automated quality check — does the code compile? Are there bugs? Any security issues?

Think of it like a building inspector checking the electrical and plumbing. You don't need to understand what they check — just that they checked it.

**What you just learned:** Professional quality checks are one command away. Run `/preflight` before deploying anything.

---

## What You Just Accomplished

![What you accomplished](/images/lessons/p4-accomplished.png)

Let's take a moment:

| What You Did | What Happened |
|---|---|
| Pasted a one-paragraph description | Antigravity wrote ~15 files of code |
| Said "change the colors" | Antigravity redesigned the entire app |
| Described a new feature | Antigravity added budget tracking with a progress bar |
| Pasted a screenshot | Antigravity fixed exact visual issues you pointed at |
| Typed `/preflight` | Automatic quality checks verified your code is solid |

**You built a real, interactive application — with charts, animations, and real-time data — without touching a single line of code.**

---

## What's Next?

You've experienced the tool. Now let's understand it deeper:

> **Phase 2:** [What Just Happened?](phase-2-what-just-happened.md) — understand what Antigravity actually created and the concepts behind it

> **Phase 3:** [How to Talk to AI](phase-3-talking-to-ai.md) — master the communication skills to get exactly what you want

> **Phase 4:** [Plan Your Project](phase-4-plan-your-project.md) — when you're ready to build YOUR own project, start here

> 🎬 **Video companion:** There's a short audio walkthrough covering this first-app experience. See `delivery/video-guide.md` for details.

---

> 🛡️ **Nothing can go wrong.** If any mission didn't work perfectly, just tell Antigravity: *"That didn't work right. Here's what I see: [describe or screenshot]. Fix it."* It will figure it out.

---

> *This guide is part of the Coach Gravity Starter Kit — built to help anyone, regardless of technical background, build real software with Antigravity AI.*
