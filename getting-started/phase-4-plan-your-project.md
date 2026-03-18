# 📋 Phase 4 — Plan Your Project

> **Read time: ~10 minutes** | ❌ **Everyone should read this — even experienced users.**

---

## Why Planning First?

![Plan before you build](/images/lessons/p3-planning.png)

Here's a truth most people learn the hard way: **the biggest waste of time when building software isn't bugs or bad code — it's building the wrong thing.**

Antigravity is incredibly powerful. It can build nearly anything you describe. But if you don't know what you want, or if your description is vague, you'll end up going in circles — "change this, no wait, undo that, actually go back to..."

**Ten minutes of planning saves ten hours of rework.**

This phase helps you answer the most important question before writing a single line of code: **What exactly am I building, and for whom?**

---

## The Project Questionnaire

Before you start building, you'll go through a set of questions. These aren't a test — there are no wrong answers. They're designed to help Antigravity understand your vision clearly.

> 🛡️ **Relax — this isn't a test.** You don't need to answer all the questions. You don't need to answer them "correctly." If you're not sure about something, just say "I don't know" or skip it. Antigravity will figure out reasonable defaults for anything you leave blank.

When you type `/start` in Antigravity, it will ask you these questions conversationally. You can also fill them out in advance by editing `project-planning/project-questionnaire.md`.

### The Questions

**🎯 Project Vision**

1. **What is this project?** Describe it in 1-2 sentences as if you're explaining it to a friend.
2. **Who is this for?** Who will use this? (Clients, customers, your team, the public?)
3. **What problem does it solve?** What's the pain point or need?
4. **What does success look like?** How will you know this project is "done" or working?

**🏗️ Scope & Features**

5. **What are the must-have features?** List the things it absolutely needs to do.
6. **What are the nice-to-have features?** Things that would be great but aren't critical.
7. **Are there existing tools or services it should connect to?** (Email, payments, databases, APIs, etc.)
8. **How many pages or screens will it need?** Just a rough estimate.

**👤 Users & Access**

9. **Who can access it?** Is it public (anyone) or private (login required)?
10. **Are there different user roles?** (e.g., admin vs. regular user vs. viewer)
11. **How will people log in?** Email/password? Google? Magic link?

**🎨 Look & Feel**

12. **What's the vibe?** Professional? Fun? Minimal? Premium? Playful?
13. **Any websites you admire?** Share URLs of designs you like.
14. **Do you have a logo or brand colors?** If yes, what are they?
15. **Light mode, dark mode, or both?**

**📱 Platform**

16. **Where will people use it?** Desktop only? Mobile too? Tablet?
17. **Any specific browser requirements?** (Usually "no" is fine)

**🔧 Technical (Don't Worry If You Don't Know)**

18. **Do you have a domain name?** (e.g., `myapp.com`) If not, do you want one?
19. **Where should it be hosted?** (If unsure, we'll use AWS — it's what we know best.)
20. **Do you already have any data?** Spreadsheets, databases, CSVs, etc.?
21. **Do you need to store user data?** Names, emails, preferences, files, etc.?

**📊 Business Context**

22. **Is this for a business or personal use?**
23. **Will you charge users?** If so, subscription or one-time?
24. **What's your timeline?** Is there a deadline?
25. **What's your budget for hosting/services?** (Don't worry — most prototypes are free.)

---

## The "Docs-First" Philosophy

![Documentation drives the build](/images/lessons/p3-docs-first.png)

Once you've answered the questionnaire, Antigravity will create your project's documentation **before writing a single line of code**:

| Document | What It Contains |
|---|---|
| `AGENT-REFERENCE.md` | Project overview, tech stack decisions, folder structure |
| `docs-canonical/REQUIREMENTS.md` | Features broken down by priority (must-have vs. nice-to-have) |
| `docs-canonical/DATA-MODEL.md` | What data your app stores and how it's organized |
| `docs-canonical/FEATURES.md` | Detailed feature descriptions and acceptance criteria |
| `docs-implementation/` | Technical decisions, architecture choices |

### Why Docs First?

1. **You review the plan before anything is built** — catch misunderstandings early
2. **The AI reads these docs every time it works** — it stays consistent
3. **You can share them** with anyone to explain your project
4. **They prevent drift** — the AI checks the docs before making changes

> Think of it like getting architectural blueprints approved before construction starts. The builder (Antigravity) checks the blueprints before every action to make sure they're building what you designed.

> 🤔 **What just happened?** By answering a few questions, you gave Antigravity enough context to create a complete project blueprint. These docs act as the AI's "memory" — every time it makes a change, it reads these docs first to make sure it stays aligned with your vision. This is why planning works so well.

---

## What a Good Project Description Looks Like

![Turning ideas into structured plans](/images/lessons/p3-good-description.png)

Here's a real example of how a user described a project:

> *"I need a website for a nonprofit that helps connect volunteers with clients in Atlanta. It should have pages for volunteers to apply, clients to request help, and an about page with our history since 1995. Support English and Spanish."*

From this single paragraph, Antigravity created:
- A 15-page website with navigation
- Volunteer and client application forms
- A bilingual toggle (English ↔ Spanish)
- A content management system for the nonprofit to update their own content
- An admin dashboard for managing applications
- SEO optimization for search engines

**You don't need to specify all of this.** You describe the "what" and "who," and Antigravity figures out the "how."

---

## Tips for Good Project Descriptions

| Do This | Don't Do This |
|---|---|
| *"I want a dashboard where managers can see team performance"* | *"Make me a React app with REST API endpoints"* |
| *"Users should be able to upload photos and comment on them"* | *"Implement S3 integration with presigned URLs"* |
| *"It should look modern and premium, like Stripe's website"* | *"Use Inter font, 16px body, oklch color space"* |
| *"Send me an email when a new order comes in"* | *"Set up SES with SNS topic subscription"* |

**Describe the outcome, not the implementation.** Antigravity knows the technical details — you just need to know what you want the result to look and feel like.

---

## Checkpoint ✅

At this point, you should have:

- [x] An understanding of why planning comes before building
- [x] Familiarity with the project questionnaire questions
- [x] An understanding of the "docs-first" approach
- [x] Confidence that you can describe a project in plain English

**Next:** [Phase 5 — Build Your Project →](phase-5-build-your-project.md)

> 🎬 **Video companion:** There's a short audio walkthrough covering project planning. See `delivery/video-guide.md` for details.
