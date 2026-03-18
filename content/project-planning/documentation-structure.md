# 📁 Documentation Structure — How to Organize Your Project Docs

> When you start a new project, Antigravity creates documentation before writing code. Here's what each document does and why it matters.

---

## The "Docs-First" Approach

```
your-project/
├── AGENT-REFERENCE.md          ← The AI's "brain" for your project
├── docs-canonical/             ← Your project's source of truth
│   ├── REQUIREMENTS.md         ← What the app does (features)
│   ├── DATA-MODEL.md           ← What data the app stores
│   ├── FEATURES.md             ← Detailed feature specs
│   └── ADR.md                  ← Architecture Decision Records
├── docs-implementation/        ← Technical details
│   ├── TECH-STACK.md           ← Technologies used and why
│   └── DEPLOYMENT.md           ← How to deploy
└── .agent/
    └── workflows/              ← Your slash commands
```

---

## What Each Document Does

| Document | Purpose | Updated By |
|---|---|---|
| **`AGENT-REFERENCE.md`** | Tells the AI about your project — name, tech stack, folder structure, conventions | You and Antigravity together |
| **`REQUIREMENTS.md`** | Lists all features and requirements — the "contract" for what gets built | You describe, Antigravity writes |
| **`DATA-MODEL.md`** | Describes what data the app stores — tables, fields, relationships | Antigravity writes from your descriptions |
| **`FEATURES.md`** | Detailed feature specs with acceptance criteria | Antigravity writes, you review |
| **`ADR.md`** | Records why specific technical decisions were made | Antigravity logs automatically |

---

## Why Docs Matter for Non-Programmers

1. **You can review them** — even without understanding code, you can read docs and catch misunderstandings
2. **The AI reads them before every action** — this keeps it consistent and prevents drift
3. **They're shareable** — you can send REQUIREMENTS.md to anyone and they'll understand your project
4. **They prevent rework** — by catching misalignments early, before code is written

---

## When to Update Docs

Antigravity will often update docs automatically when you make changes. But if you notice something is out of date, just say:

```
The REQUIREMENTS.md doesn't mention the new search feature we added. 
Please update it.
```

Or run `/scribe` to do a comprehensive documentation improvement pass.
