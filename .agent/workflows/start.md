---
description: Guided onboarding — teaches concepts, sets up tools, and builds first project
---

# /start — Coach Gravity Guided Onboarding

> This workflow is educational, not just installation. It teaches concepts from the guide files, pauses for questions, and only moves to technical steps when the user is ready.
>
> **Bootstrap mode**: If Coach Gravity content is not found locally, this workflow will auto-install it via npm.

## BOOTSTRAP CHECK

Before anything else, check if Coach Gravity content is available:

// turbo
```bash
# Check if Coach Gravity is installed as a skill or local content
if [ -d "$HOME/.gemini/antigravity/skills/coach-gravity/getting-started" ]; then
    echo "COACH_GRAVITY_SOURCE=$HOME/.gemini/antigravity/skills/coach-gravity"
elif [ -d "getting-started" ]; then
    echo "COACH_GRAVITY_SOURCE=."
else
    echo "COACH_GRAVITY_NOT_FOUND"
fi
```

**If COACH_GRAVITY_NOT_FOUND**:
1. Tell the user: "Let me install Coach Gravity first — one moment!"
2. Run:
   ```bash
   npx -y coach-gravity install
   ```
3. Set `COACH_GRAVITY_SOURCE=$HOME/.gemini/antigravity/skills/coach-gravity`
4. Continue to the checklist below

**Otherwise**: Use the detected source path for all `getting-started/` and `reference/` file reads below.

---

## CHECKLIST

### Phase 0: Welcome & Trust Building

1. Print a warm welcome message:
   ```
   👋 Welcome to Coach Gravity!
   
   I'm going to walk you through everything — what Antigravity is, 
   how it works, and how to build your first app.
   
   We'll go at your pace. If you have questions at any point, 
   just ask. There are no wrong questions.
   
   Let's start with the basics...
   ```

2. Read and present key content from `getting-started/phase-0-trust-and-setup.md`:
   - What Antigravity is (~2 paragraphs)
   - Show 1-2 gallery examples to inspire confidence
   - Safety guarantees (folder-only access, approval gates, can't break anything)

3. Ask: **"Does this make sense so far? Any questions before we continue?"**
   - Answer any questions thoroughly before proceeding
   - If they say "makes sense" or similar, continue

### Phase 1: Experience Check

4. Ask: **"Have you used Antigravity before, or is this your first time?"**

5. **If experienced user:**
   - Say: "Great! Since you're familiar, I'll skip the basics and jump to setting up your project."
   - Skip to Phase 4 (Your First App — step 15)

6. **If first-time user:**
   - Continue to Phase 2 (Prerequisites)

### Phase 2: Prerequisites Check

// turbo
7. Silently check for Node.js: `node --version`

// turbo
8. Silently check for Git: `git --version`

9. **If both found:**
    - Print: "✅ Great news — Node.js and Git are already installed on your computer!"
    - Briefly explain what they are:
      ```
      Quick explanation:
      - Node.js is what runs the code I write for you (think of it as the engine)
      - Git saves versions of your work (like Google Docs version history)
      
      You won't need to use these directly — I handle them for you.
      ```

10. **If either is missing:**
    - Read and present installation instructions from `getting-started/phase-0-trust-and-setup.md`
    - Walk through installation step by step
    - Verify installation after each tool is installed
    - Explain what each tool does in plain English

### Phase 3: Global Configuration

11. Set up global config files:
    - Check if `~/.gemini/GEMINI.md` already exists
    - If not, create the directory and copy files:
      ```bash
      mkdir -p ~/.gemini
      ```
    - Copy from Coach Gravity source (detected in bootstrap check):
      ```bash
      cp $COACH_GRAVITY_SOURCE/starter-kit/global/GEMINI.md ~/.gemini/
      cp $COACH_GRAVITY_SOURCE/starter-kit/global/CLAUDE.md ~/.gemini/
      cp $COACH_GRAVITY_SOURCE/starter-kit/global/agreement.md ~/.gemini/
      ```
    - Explain what these files do:
      ```
      ✅ Config files installed!
      
      Here's what I just set up:
      - GEMINI.md — Rules I follow: always show a plan before coding, 
        never change more than 3 files without asking, etc.
      - CLAUDE.md — Same rules in an alternative format (for compatibility)
      - agreement.md — Our working agreement: I research first, plan second, 
        build third, and always wait for your approval.
      
      These rules protect you. I can't skip steps or make changes 
      without showing you first.
      ```

// turbo
12. Install DocGuard documentation quality tool:
    - Check if DocGuard is already installed:
      ```bash
      command -v docguard &> /dev/null && echo "DocGuard already installed" || npm i -g docguard-cli
      ```
    - Explain what DocGuard does:
      ```
      ✅ DocGuard installed!
      
      DocGuard is a documentation quality checker. Think of it like 
      a spell-checker, but for your project's technical documents.
      
      When you run /preflight before deploying, DocGuard automatically 
      checks that your project's documentation is complete and correct.
      
      You don't need to run it manually — it's built into the workflow.
      ```

// turbo
13. Install all 25 global workflows:
    - Create the global workflows directory and copy all workflow files:
      ```bash
      mkdir -p ~/.gemini/antigravity/global_workflows
      cp $COACH_GRAVITY_SOURCE/starter-kit/per-project/.agent/workflows/*.md ~/.gemini/antigravity/global_workflows/
      ```
    - Explain what these are:
      ```
      ✅ 25 slash commands installed globally!
      
      These are specialist workflows — like having a team of experts 
      you can call on at any time. Here are a few highlights:
      
      🚀 /launch    — Start your app so you can see it in the browser
      🔍 /preflight — Run quality checks before deploying
      🛡️ /sentinel  — Scan for security issues
      📦 /courier   — Save, check, and deploy in one command
      🎨 /palette   — Polish your design and usability
      🏗️ /architect — Get a full architecture review with a score
      
      There are 25 total — you don't need to memorize them. 
      They're available in every project you open.
      
      Want the full list? Check reference/slash-commands.md anytime,
      or type one of these commands in any project to try it out.
      ```

### Phase 4: Your First App — The Wow Moment

14. **If using the npm-installed skill** (no local getting-started/ folder):
    - Read content from `$COACH_GRAVITY_SOURCE/getting-started/` instead

15. Transition to the first build:
    ```
    🚀 Everything is set up! Now let's do something amazing.
    
    I'm going to give you a prompt to paste. This one prompt will build 
    you a complete expense tracker — with charts, animations, dark mode, 
    and real-time updates. Ready?
    ```

16. Present the expense tracker prompt from `getting-started/phase-1-your-first-app.md`:
    ```
    Copy and paste this into the chat:
    
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

17. After the user pastes and the app builds:
    - Guide them to open `localhost` in the browser
    - Explain what they're seeing:
      ```
      🖥️ Your app is running!
      
      Open your browser and go to the URL shown above (usually http://localhost:3000).
      
      What you're seeing is called "localhost" — it's your computer pretending 
      to be a website. Only you can see it right now. Nobody else on the internet 
      can access this.
      
      Try adding a few expenses and watch the charts update in real-time!
      ```

### Phase 5: Missions — Practice Directing the AI

18. Guide through Mission 1 (change colors):
    ```
    🎯 Mission 1: Let's practice changing things.
    
    Paste this into the chat:
    "Change the color scheme from purple/blue to green and gold. 
    Keep the dark mode."
    
    Watch how the design updates from just one sentence!
    ```

19. Guide through Mission 2 (add a feature):
    ```
    🎯 Mission 2: Now let's add a brand new feature.
    
    Paste this:
    "Add a monthly budget feature. I want to set a monthly spending 
    limit (default to $2,000). Show a progress bar at the top that 
    fills up as I spend. Over 80% make it yellow, over 100% make it red."
    ```

### Phase 6: Celebration & Continue Learning

20. Celebrate what was accomplished and offer a choice:
    ```
    🎉 Congratulations! You just built and customized real software!
    
    What you accomplished so far:
    ✅ Learned what Antigravity is and how it works
    ✅ Set up your computer with the tools you need
    ✅ Installed safety rules that protect you
    ✅ Installed 25 slash commands — your specialist team
    ✅ Built a complete expense tracker from one prompt
    ✅ Changed the design with a single sentence
    ✅ Added a new feature by describing it
    
    There's more to learn — 7 more phases covering everything from 
    understanding what was built to deploying on the internet.
    ```

21. Ask: **"Would you like me to keep going and walk you through the rest of the course right here? Or would you prefer to read the guides on your own in the `getting-started/` folder?"**

    - If they prefer to read on their own, print:
      ```
      No problem! Here's the reading order:
      
      📖 Phase 2 — What Just Happened (understand what was built)
      📖 Phase 3 — How to Talk to AI (master communication)
      📖 Phase 4 — Plan Your Project (plan YOUR project)
      📖 Phase 5 — Build Your Project (build YOUR project)
      📖 Phase 6 — Iterate & Improve (all 25 slash commands)
      📖 Phase 7 — Version Control (save and share)
      📖 Phase 8 — Deploy (put it on the internet!)
      
      These are all in the getting-started/ folder. 
      Come back anytime — just type /start and tell me 
      where you left off. 💪
      ```
      - End the workflow here.

    - If they want to continue, proceed to step 22.

### Phase 7: Guided Course — What Just Happened (Phase 2)

22. Read the **full content** of `getting-started/phase-2-what-just-happened.md` and present it to the user conversationally in the chat. Present ALL sections — the file structure explanation, key concepts table, roles table, AI models, data & privacy, and what to say when confused.

23. Ask: **"That covers what happened behind the scenes. Ready for Phase 3 — How to Talk to AI? This one is really practical."**
    - If they have questions, answer them thoroughly before continuing
    - If ready, proceed

### Phase 8: Guided Course — How to Talk to AI (Phase 3)

24. Read the **full content** of `getting-started/phase-3-talking-to-ai.md` and present it to the user conversationally. Present ALL sections — the golden rules, all 9 conversation scenarios, the Stop-Redirect-Resume pattern, the communication cheat sheet, visual communication tips, and common mistakes.

25. Ask: **"Those communication skills will make a huge difference. Ready for Phase 4 — Planning Your Project? This one helps you think through YOUR project idea."**
    - Answer any questions before continuing

### Phase 9: Guided Course — Plan Your Project (Phase 4)

26. Read the **full content** of `getting-started/phase-4-plan-your-project.md` and present it to the user conversationally. Present ALL sections — why planning matters, the full project questionnaire (all 25 questions), the docs-first philosophy, what a good project description looks like, and tips for descriptions.

27. Ask: **"Would you like to go through the questionnaire now for YOUR project idea? Or would you rather continue to Phase 5 first and come back to planning later?"**
    - If they want to do the questionnaire now, walk them through it conversationally
    - If they want to continue, proceed

### Phase 10: Guided Course — Build Your Project (Phase 5)

28. Read the **full content** of `getting-started/phase-5-build-your-project.md` and present it to the user conversationally. Present ALL sections — creating the project, seeing it running, the review and adjust cycle, the screenshot power move, real feedback loop examples, the quality check, common first-time issues, and the browser console guide.

29. Ask: **"That's the full build process! Ready for Phase 6 — Iterate & Improve? This one covers all 25 slash commands in detail."**
    - Answer any questions before continuing

### Phase 11: Guided Course — Iterate & Improve (Phase 6)

30. Read the **full content** of `getting-started/phase-6-iterate-and-improve.md` and present it to the user conversationally. Present ALL sections — the iteration cycle, the full slash command toolbox (daily drivers, specialists, deep experts), enterprise-ready quality gates, the pre-deployment checklist, reading architect results, the feedback loop pattern, and the "when to use which workflow" table.

31. Ask: **"Now you know all 25 workflows! Ready for Phase 7 — Version Control? This one teaches you how to save and share your work with Git."**
    - Answer any questions before continuing

### Phase 12: Guided Course — Version Control (Phase 7)

32. Read the **full content** of `getting-started/phase-7-version-control.md` and present it to the user conversationally. Present ALL sections — why version control matters, the concepts table (repo, commit, push, pull, branch, merge), GitHub account setup, Git configuration, using Git with Antigravity and the `/courier` workflow, and the manual commands reference.

33. Ask: **"Almost there! Ready for Phase 8 — Deploy to the Internet? This is the grand finale — putting your app live for the world to see."**
    - Answer any questions before continuing

### Phase 13: Guided Course — Deploy to the Internet (Phase 8)

34. Read the **full content** of `getting-started/phase-8-deploy-to-aws.md` and present it to the user conversationally. Present ALL sections — what deploy means, why AWS, the two approaches (manual console vs automated CLI), AWS account creation, billing alerts, Amplify deployment steps, automating with `/courier`, and cost expectations.

35. Present the **full course completion celebration**:
    ```
    🎉🎉🎉 You've completed the ENTIRE Coach Gravity course! 🎉🎉🎉
    
    Look at everything you've accomplished:
    
    ✅ Phase 0 — Set up your computer and installed safety rules
    ✅ Phase 1 — Built your first app (the Expense Tracker)
    ✅ Phase 2 — Understood what happened behind the scenes
    ✅ Phase 3 — Learned how to communicate effectively with AI
    ✅ Phase 4 — Learned how to plan a project before building
    ✅ Phase 5 — Learned the full build-and-iterate cycle
    ✅ Phase 6 — Mastered the 25 slash commands
    ✅ Phase 7 — Learned version control with Git & GitHub
    ✅ Phase 8 — Learned how to deploy to the internet
    
    You went from zero to a fully equipped software creator 
    — without writing a single line of code.
    
    What's next? Build something real. The best way to learn 
    is to build something you actually need.
    
    Open a new folder, type /start, and create your next project.
    
    Or if you have a project idea right now, just tell me about it 
    and we'll start planning! 💪
    ```
