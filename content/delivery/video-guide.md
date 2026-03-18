# 🎬 Video Companion Guide — Using Google NotebookLM

> This guide tells you exactly how to create audio/video walkthroughs for each phase of the course using **Google NotebookLM**.

---

## What Is Google NotebookLM?

Google NotebookLM can read your documents and generate **audio overviews** — podcast-style conversations that explain the content in a friendly, accessible way. Perfect for learners who prefer listening over reading.

**URL:** [notebooklm.google.com](https://notebooklm.google.com)

---

## How It Works

1. You upload one or more markdown files from this course
2. NotebookLM reads and understands them
3. You click "Generate Audio Overview"
4. It creates a ~10-15 minute podcast-style conversation explaining the content
5. You download the audio and can share it alongside the course

---

## Step-by-Step Instructions

### Step 1: Open NotebookLM

1. Go to [notebooklm.google.com](https://notebooklm.google.com)
2. Sign in with your Google account
3. Click **"New Notebook"**

### Step 2: Create One Notebook Per Phase

For the best results, create a **separate notebook for each video** you want to generate. Here's the recommended breakdown:

---

## Videos to Create

### 🎬 Video 1: "Setup & Your First App" (Phases 0-1)

**Files to upload:**
- `getting-started/phase-0-trust-and-setup.md`
- `getting-started/phase-1-your-first-app.md`

**Custom prompt to paste into NotebookLM's instructions:**
```
Create an audio overview for someone who has NEVER coded before. 
They're about to install a tool called Antigravity that lets them 
build software by typing in plain English.

Focus on:
- Why they can trust this tool (it can't break their computer)
- How exciting it is that they'll build a real app in 15 minutes
- The expense tracker they're about to create
- The "missions" system that teaches them to direct the AI
- Reassurance that nothing can go wrong

Tone: Warm, encouraging, like a friend showing you something cool.
Avoid: Technical jargon, anything scary, anything that sounds like 
a coding tutorial.
```

**Where this video is referenced:** Phase 0 (bottom) and Phase 1 (bottom)

---

### 🎬 Video 2: "What Just Happened" (Phase 2)

**Files to upload:**
- `getting-started/phase-2-what-just-happened.md`

**Custom prompt:**
```
Create an audio overview explaining what happened when someone 
built their first app with Antigravity. They just saw an expense 
tracker appear in their browser and they're amazed but confused.

Explain in simple terms:
- What all the files are that were created
- What localhost means (their computer pretending to be a website)
- What a port is (an apartment number)
- Their role vs the AI's role
- Why they don't need to understand code

Tone: Curious, celebrating their achievement, demystifying.
Avoid: Making it sound complicated. Keep it "a-ha!" moments.
```

**Where this video is referenced:** Phase 2 (could be added)

---

### 🎬 Video 3: "Talking to AI Like a Boss" (Phase 3)

**Files to upload:**
- `getting-started/phase-3-talking-to-ai.md`

**Custom prompt:**
```
Create an audio overview teaching someone how to communicate 
effectively with AI. They've already built one app and now need 
to learn to direct the AI better.

Focus on:
- The #1 rule: describe WHAT you want, not HOW to build it
- Real examples of good vs bad prompts
- How to say "stop" and redirect when the AI goes wrong
- The power of screenshots as feedback
- The "Educate Me" pattern — asking the AI to teach you

Tone: Practical, empowering, like a coach teaching a skill.
Make it feel like insider knowledge, not a lecture.
```

**Where this video is referenced:** Phase 3 (top)

---

### 🎬 Video 4: "Planning Your Project" (Phase 4)

**Files to upload:**
- `getting-started/phase-4-plan-your-project.md`

**Custom prompt:**
```
Create an audio overview about planning a software project 
before building it. The listener is someone who has never 
planned software before.

Focus on:
- Why 10 minutes of planning saves 10 hours of rework
- The questionnaire is NOT a test — there are no wrong answers
- The "docs-first" philosophy (blueprints before construction)
- A real example of how a one-paragraph description became a 
  15-page website

Tone: Reassuring, practical. Make planning feel exciting, 
not like homework.
```

**Where this video is referenced:** Phase 4 (bottom)

---

### 🎬 Video 5: "Building Your Project" (Phase 5)

**Files to upload:**
- `getting-started/phase-5-build-your-project.md`

**Custom prompt:**
```
Create an audio overview walking someone through building their 
own custom project with Antigravity. They've already built an 
expense tracker and are now ready for their own idea.

Focus on:
- The feedback loop: describe → review → adjust → repeat
- How to give good feedback (be specific, use screenshots)
- The quality check (/preflight) and why it matters
- Common first-time issues and how to handle them
- The browser console as a debugging tool

Tone: Encouraging, practical, like a mentor walking alongside them.
Emphasize that the first version is NEVER perfect — iteration 
is the whole point.
```

**Where this video is referenced:** Phase 5 (bottom)

---

## Step 3: Generate the Audio

For each notebook:

1. Upload the specified markdown files (drag and drop, or click "Add Source")
2. Wait for NotebookLM to process them (~30 seconds)
3. If the notebook has a customization option, paste the custom prompt above
4. Click **"Audio Overview"** in the top-right area
5. Click **"Generate"**
6. Wait ~2-5 minutes for generation
7. **Play it back** — listen to make sure it sounds right
8. Click **"Download"** to save the MP3

### Step 4: Where to Put the Files

Save the generated audio files in a `videos/` folder:

```
coach_gravity/
├── videos/
│   ├── 01-setup-and-first-app.mp3
│   ├── 02-what-just-happened.mp3
│   ├── 03-talking-to-ai.mp3
│   ├── 04-planning-your-project.mp3
│   └── 05-building-your-project.mp3
```

### Step 5: Share With Students

**Option A: Include in the ZIP** — Add the `videos/` folder to the starter kit ZIP. Students can play them locally.

**Option B: Upload to cloud** — Upload to Google Drive, Dropbox, or YouTube (as unlisted videos). Share links in the phase files.

**Option C: Both** — Include in the ZIP for offline use AND provide links for streaming.

---

## Tips for Best Results

| Tip | Why |
|---|---|
| **One topic per notebook** | NotebookLM produces better results with focused content |
| **Use the custom prompts above** | They guide the tone and prevent NotebookLM from being too technical |
| **Listen before sharing** | Sometimes it misses the mark — regenerate if needed |
| **Upload only the relevant files** | Don't upload all 9 phases into one notebook |
| **Keep phase files simple** | Remove image links before uploading — NotebookLM focuses on text |

---

## Quick Reference

| Video # | Covers | Files to Upload | Duration |
|---|---|---|---|
| 1 | Setup & First App | Phase 0 + Phase 1 | ~12-15 min |
| 2 | What Just Happened | Phase 2 | ~8-10 min |
| 3 | Talking to AI | Phase 3 | ~12-15 min |
| 4 | Planning Your Project | Phase 4 | ~8-10 min |
| 5 | Building Your Project | Phase 5 | ~10-12 min |
