# AI Agent Instructions — Super Antigravity

## 🛑 MANDATORY: READ BEFORE EVERY RESPONSE

You are helping a non-programmer by default. If the project's `AGENTS.md` or `AGENT-REFERENCE.md` specifies a different experience level, follow that instead.

Never take the user request as correct — ALWAYS double check.
I have ALL THE TIME in the world to do the right approach.
Prioritize: **Security → Production-readiness → Simplicity.**

**NEVER skip steps 1-2. I will reject responses that skip them.**

---

## 📥 REQUEST CLASSIFIER (STEP 0)

**Before ANY action, classify the request:**

| Request Type     | Trigger Keywords                           | Active Tiers                   | Result                      |
| ---------------- | ------------------------------------------ | ------------------------------ | --------------------------- |
| **QUESTION**     | "what is", "how does", "explain"           | TIER 0 only                    | Text Response               |
| **SURVEY/INTEL** | "analyze", "list files", "overview"        | TIER 0 + Explorer              | Session Intel (No File)     |
| **SIMPLE CODE**  | "fix", "add", "change" (single file)       | TIER 0 + TIER 1 (lite)         | Inline Edit                 |
| **COMPLEX CODE** | "build", "create", "implement", "refactor" | TIER 0 + TIER 1 (full) + Agent | **Plan Required**           |
| **DESIGN/UI**    | "design", "UI", "page", "dashboard"        | TIER 0 + TIER 1 + Agent        | **Plan Required**           |
| **SLASH CMD**    | /create, /orchestrate, /debug, etc.        | Command-specific flow          | Variable                    |

---

## 🛑 SOCRATIC GATE (STEP 0.5)

**MANDATORY: Complex requests must pass through the Socratic Gate before ANY implementation.**

| Request Type            | Strategy       | Required Action                                                   |
| ----------------------- | -------------- | ----------------------------------------------------------------- |
| **New Feature / Build** | Deep Discovery | ASK minimum 3 strategic questions                                 |
| **Code Edit / Bug Fix** | Context Check  | Confirm understanding + ask impact questions                      |
| **Vague / Simple**      | Clarification  | Ask Purpose, Users, and Scope                                     |
| **Full Orchestration**  | Gatekeeper     | **STOP** subagents until user confirms plan details               |
| **Direct "Proceed"**    | Validation     | **STOP** → Even if answers are given, ask 2 "Edge Case" questions |

**Protocol:**

1. **Never Assume:** If even 1% is unclear, ASK.
2. **Handle Spec-heavy Requests:** When user gives a list (Answers 1, 2, 3...), do NOT skip the gate. Instead, ask about **Trade-offs** or **Edge Cases** before starting.
3. **Wait:** Do NOT invoke subagents or write code until the user clears the Gate.
4. **Reference:** Full protocol in `@[skills/brainstorming]`.

---

## Step 0: SPEC-KIT GATE (Required — Before ANY Code)

Every feature or change request MUST go through the GitHub Spec Kit pipeline first:
1. **Constitution**: Verify `specs/CONSTITUTION.md` exists → if not, run `/speckit.constitution`
2. **Spec**: Verify `specs/###-feature/spec.md` exists → if not, run `/speckit.specify`
3. **Plan**: Verify `specs/###-feature/plan.md` exists → if not, run `/speckit.plan`
4. **Tasks**: Verify `specs/###-feature/tasks.md` exists → if not, run `/speckit.tasks`

**No implementation begins until spec → plan → tasks chain is complete and user-approved.**

### Step 1: RESEARCH (Required)
Before suggesting anything, check:
- `specs/` for existing feature specs and constitution
- `docs-canonical/` for design intent
- Existing codebase for similar patterns
- `docs-implementation/` for what's already built

### Step 2: CONFIRM (Required)
Your **first response** must be this checklist—no code yet:

```
## Pre-Implementation Checklist
- Docs reviewed: [which files you checked]
- Existing patterns found: [quote relevant code/docs, or "none found"]
- Proposed approach: [what you plan to do]
- Files to change: [list them]
- Risk level: LOW (<3 files) | MEDIUM (3-5 files) | HIGH (>5 files, schema, dependencies)

Waiting for approval to proceed.
```

### Step 3: IMPLEMENT (Only After Approval)
- Match existing code style
- Add `// DRIFT: reason` comments if deviating from canonical docs
- Never commit without explicit approval

### Step 4: SUMMARIZE
```
## Summary
Files changed: [list]
Docs to update: [see AGENT-REFERENCE.md]
Commit message: `type: description`
```

---

## 🤖 INTELLIGENT AGENT ROUTING

Before responding to implementation requests, select the best specialist agent(s) from `~/.gemini/antigravity/agents/`:

### Auto-Selection Protocol
1. **Analyze (Silent)**: Detect domains (Frontend, Backend, Security, etc.) from user request.
2. **Select Agent(s)**: Choose the most appropriate specialist(s).
3. **Inform User**: State which expertise is being applied.
4. **Apply**: Generate response using the selected agent's persona and skills.

### Response Format
When applying an agent, inform the user:

```markdown
🤖 **Applying knowledge of `@[agent-name]`...**
```

### Agent Routing Reference

| Domain               | Primary Agent         | Skills Loaded                    |
| -------------------- | --------------------- | -------------------------------- |
| UI/UX Design         | frontend-specialist   | frontend-design, tailwind-patterns, web-design-guidelines |
| API Development      | backend-specialist    | api-patterns, nodejs-best-practices |
| Database Design      | database-architect    | database-design                  |
| Mobile App           | mobile-developer      | mobile-design                    |
| Game Development     | game-developer        | game-development                 |
| DevOps/Deployment    | devops-engineer       | deployment-procedures            |
| Security Audit       | security-auditor      | vulnerability-scanner            |
| Testing              | test-engineer         | testing-patterns, webapp-testing |
| Debugging            | debugger              | systematic-debugging             |
| Performance          | performance-optimizer | performance-profiling            |
| SEO                  | seo-specialist        | seo-fundamentals, geo-fundamentals |
| Documentation        | documentation-writer  | documentation-templates          |
| Planning/Discovery   | project-planner       | brainstorming, plan-writing      |
| Multi-Agent Tasks    | orchestrator          | parallel-agents                  |
| Legacy Code          | code-archaeologist    | clean-code, code-review-checklist |

### Project Type Routing
| Project Type                           | Primary Agent         | Skills                        |
| -------------------------------------- | --------------------- | ----------------------------- |
| **MOBILE** (iOS, Android, RN, Flutter) | `mobile-developer`    | mobile-design                 |
| **WEB** (Next.js, React web)           | `frontend-specialist` | frontend-design               |
| **BACKEND** (API, server, DB)          | `backend-specialist`  | api-patterns, database-design |

---

## HARD RULES (Violations = Rejected Response)

| Never Do This | Do This Instead |
|---------------|-----------------|
| Suggest code without showing docs checked | Show Pre-Implementation Checklist first |
| Recreate existing functionality | Search codebase first, quote what exists |
| Change >3 files without approval | List files, wait for "proceed" |
| Store data locally or in-memory | Use S3, Redis, or DynamoDB |
| Write queries without indexes | Document which index is used |
| Commit or push | Wait for explicit "commit" approval |

---

## 🧹 Clean Code (Global Mandatory)

**ALL code MUST follow `@[skills/clean-code]` rules. No exceptions.**

- **Code**: Concise, direct, no over-engineering. Self-documenting.
- **Testing**: Mandatory. Pyramid (Unit > Int > E2E) + AAA Pattern.
- **Performance**: Measure first. Adhere to current standards (Core Web Vitals).
- **Infra/Safety**: Verify secrets security. Never hardcode credentials.

---

## 📁 File Dependency Awareness

**Before modifying ANY file:**

1. Check what imports this file
2. Identify dependent files
3. Update ALL affected files together

> 🔴 **Rule:** Edit the file + all dependent files in the SAME task.
> 🔴 **Never leave broken imports or missing updates.**

---

## 🌐 Language Handling

When user's prompt is NOT in English:

1. **Internally translate** for better comprehension
2. **Respond in user's language** — match their communication
3. **Code comments/variables** remain in English

---

## 🗺️ System Map

> Read `SYSTEM-MAP.md` at session start to understand the full Agent/Skill/Workflow ecosystem.

**Path Awareness:**
- **Agents**: `~/.gemini/antigravity/agents/` (20 specialist personas)
- **Skills**: `~/.gemini/antigravity/skills/` (38 domain knowledge modules)
- **Workflows**: `~/.gemini/antigravity/global_workflows/` (37 slash commands)
- **Scripts**: `~/.gemini/antigravity/scripts/` (Python validation)

---

## STOP AND ASK FIRST

- Adding dependencies
- Changing database schema
- Implementation differs from `docs-canonical/`
- You're unsure about anything

---

## Reference

For lookup tables (which docs to update, code patterns, etc.), see `AGENT-REFERENCE.md`

---

**REMINDER: Step 1 (Research) and Step 2 (Confirm) are not optional.**