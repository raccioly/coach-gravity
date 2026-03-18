# 💬 Phase 3 — How to Talk to AI

> **Read time: ~15 minutes** | ❌ **Don't skip this — it's the most practical skill you'll learn.**

---

## Why This Phase Exists

Most people don't know how to "talk to AI" effectively. They either:
- **Under-communicate:** Give vague instructions and get frustrated when the result isn't right
- **Over-communicate:** Try to give technical instructions they don't understand
- **Don't know when to intervene:** Let the AI go in the wrong direction for too long

This phase teaches you the single most important skill for using Antigravity: **how to communicate with it like a good boss communicates with their team.**

> 🛡️ **There's no wrong way to talk to AI.** You can't break anything by saying the wrong thing. The worst that happens is it builds something you don't want — and you say "undo." These tips just help you get better results, faster.

> 🎬 **Video companion:** There's a short audio walkthrough covering these communication patterns. See `delivery/video-guide.md` for details.

---

## The Golden Rules

![The Golden Rules for talking to AI](/images/lessons/p5-golden-rules.png)

### Rule 1: Describe the WHAT, Not the HOW

You're the boss. You describe what you want the outcome to look like. The AI figures out how to build it.

| ❌ Don't say this | ✅ Say this instead |
|---|---|
| *"Create a React component with useState hooks"* | *"Add a counter that shows how many orders came in today"* |
| *"Implement JWT authentication middleware"* | *"Users should log in with email and password"* |
| *"Set up a PostgreSQL database with foreign keys"* | *"I need to store customer information and their orders"* |
| *"Add CSS media queries for responsive layout"* | *"Make it look good on phones too"* |

### Rule 2: Be Specific About the Result

Vague descriptions lead to the AI guessing — and guessing wrong.

| ❌ Vague | ✅ Specific |
|---|---|
| *"Make it look nice"* | *"Make it look like Stripe.com — dark, modern, premium"* |
| *"Add user management"* | *"I need a page where admins can see all users, disable accounts, and change roles"* |
| *"Fix the layout"* | *"The sidebar is too wide and the main content area needs more padding"* |

### Rule 3: Say No When It's Wrong

This is the one most people struggle with. **The AI is not always right.** It will sometimes:
- Overcomplicate things
- Misunderstand your intent
- Go in a direction you didn't want
- Propose something that doesn't match your vision

**Your job is to catch it and redirect.** Here's how:

---

## Real Conversation Examples

### Scenario 1: It's Building the Wrong Thing

```
You: "I need a page to manage our team's schedule."

Antigravity: "I'll create a full calendar application with 
drag-and-drop event management, recurring events, Google Calendar 
integration, timezone support, and email notifications..."

You: "Stop. That's way too much. I just need a simple list view — 
a table showing who's working which day this week. Names in rows, 
days in columns, with checkboxes. Nothing fancy."

Antigravity: "Understood. I'll create a simple weekly schedule 
grid instead. Here's the plan..."
```

**What happened:** The AI assumed a complex solution. You pulled it back to what you actually needed. This is normal and expected.

> 🤔 **What just happened?** The AI doesn't know if you want a simple solution or a complex one — so it often defaults to "impressive." Your job is to simplify. This is the #1 most common interaction you'll have: *"That's too much. I just need..."*

---

### Scenario 2: It's Overcomplicating Things

```
You: "Add a way for users to submit feedback."

Antigravity: "I'll implement a multi-step feedback wizard with 
sentiment analysis, automatic categorization, feedback routing 
to departments, satisfaction scoring, and trend analytics..."

You: "That's over-engineered. I just need a simple form — 
a text box where they type their feedback, a star rating (1-5), 
and a submit button that saves it to the database. That's it."

Antigravity: "Got it — keeping it simple. Here's the revised plan..."
```

**Key phrase:** *"That's over-engineered. I just need..."*

---

### Scenario 3: It Made a Wrong Assumption

```
You: "Proceed with the changes."

[Antigravity builds a light-themed dashboard]

You: "Wait — I wanted dark mode. Everything should be dark 
background with light text. This isn't what I asked for."

Antigravity: "I apologize for the oversight. Let me update the 
entire theme to dark mode..."

You: "Yes, go ahead. And keep dark mode as the default going forward."
```

**Key phrase:** *"This isn't what I asked for."* — Don't be afraid to say this.

---

### Scenario 4: You Don't Understand What It's Doing

```
Antigravity: "I'll set up a middleware chain with authentication 
guards, CORS policies, and rate limiting..."

You: "I don't understand any of that. Can you explain what each 
of those things does and why we need them? Use simple language."

Antigravity: "Of course! Here's what each one does:
- Authentication guard = checks that the user is logged in 
  before showing them certain pages
- CORS policy = a security rule that prevents random websites 
  from stealing your data
- Rate limiting = prevents someone from spamming your app with 
  1000 requests per second..."
```

**Key phrase:** *"I don't understand. Explain in simple language."*

> 🤔 **What just happened?** You used the most powerful phrase in your toolkit. Whenever the AI says something you don't understand, just ask it to explain. It will always simplify. **Never feel embarrassed to ask** — the AI doesn't judge, and asking is how you learn.

---

### Scenario 5: It Keeps Going After You Said Stop

```
You: "Let's stop here. I want to review what we have so far."

[Antigravity continues suggesting changes]

You: "I said stop. Don't make any more changes right now. I need 
to review what we have. Just confirm the current state."

Antigravity: "Understood. Here's where we are currently..."
```

**Key phrase:** *"I said stop. Don't make any more changes."*

---

### Scenario 6: You Want to Undo

```
You: "The changes you just made broke the design. It looked 
better before. Undo everything from the last round of changes."

Antigravity: "I'll revert the recent changes. Let me restore 
the previous version..."
```

**Key phrase:** *"Undo everything from the last round."*

---

### Scenario 7: You Want Options

```
You: "I need a login page. Show me 2-3 different approaches 
and explain the pros and cons of each."

Antigravity: "Here are three approaches:
1. Email/password — simple, works everywhere
2. Google sign-in — easier for users, fewer passwords
3. Magic link — send a login link via email, no password needed

The trade-offs are..."
```

**Key phrase:** *"Show me options and explain the trade-offs."*

---

### Scenario 8: You Want to Learn (The "Educate Me" Pattern)

This is one of the most powerful things you can do. **You can ask Antigravity to teach you.** Don't just ask it to build — ask it to explain, compare, and recommend.

```
You: "I need users to type a login and password to access this app. 
How should this be done? What are my options and what do you 
recommend? Educate me because I don't know how to do it."

Antigravity: "Great question! Here are the main approaches:

1. Email + Password (most common)
   - Users create an account with email and password
   - You store passwords securely (hashed, never plain text)
   - Pro: Everyone understands it. Con: Users forget passwords.

2. Social Login (Google, GitHub, etc.)
   - Users click 'Sign in with Google' — no password needed
   - Pro: Easier for users. Con: Depends on third-party services.

3. Magic Link (passwordless)
   - Users enter email, get a login link in their inbox
   - Pro: No passwords to forget. Con: Requires email access.

For your project, I'd recommend starting with #1 (email/password) 
because it's the simplest to set up and doesn't depend on external 
services. We can always add Google sign-in later.

Shall I set up email/password authentication?"
```

**Key phrase:** *"Educate me — what are my options and what do you recommend?"*

**More examples of this pattern:**

| What You're Trying to Do | What to Say |
|---|---|
| Store data | *"I need to save user profiles. What are my database options? Explain the trade-offs and recommend one for my use case."* |
| Make it look good | *"I want a professional design. What are the modern design approaches? Show me examples and recommend one."* |
| Handle payments | *"I need to accept payments. What services exist? Which is easiest to start with? Teach me how this works."* |
| Send emails | *"I need to send confirmation emails to users. What are my options? Walk me through how email works in web apps."* |

> **Why this works:** You're not pretending to know things you don't. You're being direct about wanting to learn. Antigravity is an excellent teacher — use it as one.

> 🤔 **What just happened?** You asked the AI to be a teacher, not just a builder. This is incredibly powerful. Instead of blindly accepting what the AI builds, you're learning *why* it chose that approach. Over time, this makes you better at directing it.

---

### Scenario 9: You Want to Learn While Building

```
You: "Before you make the next change, explain to me in simple 
terms what you're about to do and why. I want to understand, 
not just have it done for me."

Antigravity: "Sure! Here's what I'm about to do:

I'm going to create a 'middleware' — think of it as a security 
guard at the door. Every time someone tries to visit a protected 
page, this guard checks: 'Are you logged in?' If yes, they get 
in. If no, they're redirected to the login page.

The file I'm creating is called middleware.ts and it goes in 
the root of your project. This is a Next.js convention — the 
framework automatically runs this file on every page request.

Want me to proceed?"
```

**Key phrase:** *"Explain what you're about to do and why — I want to understand."*

---

## The Stop-Redirect-Resume Pattern

![Stop, Redirect, Resume pattern](/images/lessons/p5-stop-redirect-resume.png)

When the AI is going in a wrong direction, use this 3-step pattern:

```
1. STOP:     "Stop. That's not what I want."
2. REDIRECT: "What I actually need is [specific description]."
3. RESUME:   "Show me a plan for that approach instead."
```

**Example:**
```
You: "Stop. You're building a complex dashboard, but I just need 
a simple landing page. What I actually need is a single page with 
a hero section, three feature highlights, and a signup form. 
Show me a plan for that instead."
```

---

## Communication Cheat Sheet

Keep this handy during your first few sessions:

| When you want to... | Say... |
|---|---|
| Start something new | *"I want to build..."* or *"Create a..."* |
| Approve a plan | *"Proceed"* or *"Looks good, go ahead"* |
| Reject a plan | *"Don't do that. Instead..."* |
| Ask for changes | *"Change the X to Y"* or *"Move the X to..."* |
| Stop everything | *"Stop. Don't make any changes."* |
| Undo changes | *"Undo the last change"* or *"Go back to how it was"* |
| Get explanation | *"Explain that in simple terms"* or *"Why did you do that?"* |
| See options | *"Show me 2-3 options"* |
| Simplify | *"That's too complex. Do the minimum."* |
| Show what's wrong | *[Paste a screenshot]* + *"Fix this"* |
| Report console errors | *[Screenshot the browser console]* + *"These errors are showing"* |
| Check quality | *"Run /preflight"* |
| Fix everything | *"Fix all issues"* |
| Get overview | *"Summarize where we are and what's been done"* |

---

## Visual Communication — Let the AI See What You See

![Visual communication with AI](/images/lessons/p5-visual-communication.png)

### Why Screenshots Are So Powerful

Antigravity understands images as well as it understands text. A screenshot does three things that words alone can't:

1. **Eliminates ambiguity** — instead of "the layout is off," the AI sees exactly which pixels are wrong
2. **Shows context** — it sees the full page, not just the one thing you're describing
3. **Speeds up fixes** — one screenshot + one sentence = faster than a detailed paragraph

### Best Practices for Screenshots

| Technique | Example |
|---|---|
| **Crop to the relevant area** | Don't screenshot your whole desktop — just the part that matters |
| **Include the browser URL** | Helps the AI know which page you're on |
| **Screenshot the console for errors** | Press `F12` → Console tab → screenshot the red errors |
| **Compare with a reference** | *"[screenshot of my app] Make it look more like [screenshot of Stripe.com]"* |
| **Annotate if needed** | Circle or arrow the problem area in your screenshot tool |

### Screenshot + Description Combos

```
[screenshot of dashboard with misaligned cards]
"These three cards should be the same height and evenly spaced. 
Also, the middle one is missing its icon."
```

```
[screenshot of browser console showing red errors]
"I see these errors when I click the Submit button. Can you fix them?"
```

```
[screenshot of a website you admire]
"I want my header to look like this — sticky, transparent background, 
with the logo on the left and nav links on the right."
```

> **The rule:** When in doubt, screenshot it. It's always faster than trying to describe a visual issue in words.

![Screenshot being pasted into chat with feedback](../images/screenshot-feedback-example.png)

---

## Common Mistakes (and What to Do Instead)

| Common Mistake | What Happens | Better Approach |
|---|---|---|
| Being too vague | AI guesses and builds the wrong thing | Be specific about the result you want |
| Being too technical | You use terms you don't understand, AI follows literally | Describe the outcome, not the tech |
| Not reviewing plans | AI builds something you didn't want | Always read the plan before saying "proceed" |
| Not saying "stop" soon enough | AI keeps building in the wrong direction | As soon as it feels wrong, say "stop" |
| Trying to be polite | Saying "maybe we could try..." when you mean "change this" | Be direct — the AI appreciates clarity |
| Giving up after one attempt | First try isn't perfect and you assume it can't be done | Iterate — the second and third tries are always better |

---

## Checkpoint ✅

At this point, you should:

- [x] Know how to describe what you want (the WHAT, not the HOW)
- [x] Know how to stop and redirect the AI when it goes wrong
- [x] Have the communication cheat sheet handy
- [x] Feel confident giving direct feedback

**Next:** [Phase 4 — Plan Your Project →](phase-4-plan-your-project.md)
