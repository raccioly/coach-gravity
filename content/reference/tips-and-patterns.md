# 💡 Tips & Patterns — Lessons from Real Projects

> These tips come from building production applications with Antigravity. They'll save you time and frustration.

---

## Planning Tips

| Tip | Why It Matters |
|---|---|
| **Fill out the questionnaire before building** | 10 minutes of planning saves hours of rework |
| **Describe the outcome, not the technology** | Let the AI choose the best tech — you focus on what it should do |
| **Share screenshots of designs you like** | Visual references are worth 1,000 words |
| **List must-haves vs. nice-to-haves** | Prevents scope creep and keeps focus on what matters |
| **Start small, then iterate** | Build the core first, then add features one by one |

---

## Communication Tips

| Tip | Example |
|---|---|
| **Be direct** | *"Change the button color to blue"* not *"Maybe the button could possibly be a different color?"* |
| **Be specific about what's wrong** | *"The sidebar is too wide"* not *"The layout feels off"* |
| **Reference what you see** | *"On the dashboard page, the chart in the top-right"* |
| **Give exact values when you have them** | *"Use #1a1a2e for the background"* |
| **Ask "why" to learn** | *"Why did you choose PostgreSQL over DynamoDB?"* |

---

## Building Tips

| Pattern | When to Use |
|---|---|
| **"Build the happy path first"** | Get the basic flow working before handling edge cases |
| **"One change at a time"** | Make a single change, verify it works, then move on |
| **"Screenshot everything"** | Paste screenshots into chat — it's 10x faster than describing visual issues |
| **"Screenshot a site you like"** | Share a screenshot of any website and say *"Make mine look like this"* |
| **"Open the browser console (F12)"** | Red errors in the console tell you (and the AI) exactly what broke |
| **"Explain what you just did"** | After any change, ask the AI to explain — builds your understanding |
| **"Run /preflight after big changes"** | Catches problems before they compound |
| **"Use /stage for automated testing"** | Antigravity opens a real browser and tests your app for you |

---

## Quality Tips

| Pattern | What It Means |
|---|---|
| **"Run the triple check before deploying"** | `/preflight` → `/sentinel` → `/architect` |
| **"Ask 'what could go wrong?'"** | The AI will identify edge cases you haven't considered |
| **"Test with bad data"** | Try submitting empty forms, extreme values, special characters |
| **"Use /stage for user flow testing"** | It opens a real browser and clicks through your app |
| **"Run /medic monthly"** | Checks for outdated or vulnerable dependencies |

---

## Troubleshooting Patterns

| Situation | What to Do |
|---|---|
| Something broke after a change | *"Undo the last change"* or *"Go back to the previous version"* |
| You're going in circles | *"Let's stop and start fresh. Here's what I actually want: [clear description]"* |
| The AI seems "stuck" | Start a new conversation in the same project folder |
| Error messages you don't understand | Copy-paste the error and say *"Explain this error in simple terms and fix it"* |
| The app won't start | *"The app won't start. Check the terminal for errors and fix them."* |

---

## Patterns That Save Time

### The "Start with a Reference" Pattern

Instead of describing from scratch, share an existing website:

```
I want to build something similar to notion.so but simpler — 
just pages and notes, no databases. Use a dark theme.
```

### The "Build a Demo, Then Customize" Pattern

For complex projects, ask for a demo first:

```
Build me a quick demo/prototype of this dashboard concept. 
Don't worry about real data — use sample data. 
I want to see the layout and flow before we build the real thing.
```

### The "Incremental Feature" Pattern

Add features one at a time instead of describing everything upfront:

```
Session 1: "Build the basic landing page with navigation"
Session 2: "Now add user registration and login"
Session 3: "Add the dashboard with charts"
Session 4: "Add the admin panel"
```
