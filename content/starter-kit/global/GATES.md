# Complex Request Gates

Load this file when Step 0 classifies a request as COMPLEX CODE or DESIGN/UI.

## Spec-Kit Gate (Required for all features)

Every feature or change request must go through the GitHub Spec Kit pipeline before any code:

1. **Constitution**: Verify `specs/CONSTITUTION.md` exists. If not, run `/speckit.constitution`.
2. **Spec**: Verify `specs/###-feature/spec.md` exists. If not, run `/speckit.specify`.
3. **Plan**: Verify `specs/###-feature/plan.md` exists. If not, run `/speckit.plan`.
4. **Tasks**: Verify `specs/###-feature/tasks.md` exists. If not, run `/speckit.tasks`.

No implementation begins until spec → plan → tasks is complete and user-approved.

## Socratic Gate (Deep Discovery)

For new features or significant builds, ask a minimum of 3 strategic questions before the Pre-Implementation Checklist. Cover:

- **Purpose**: What problem does this solve, and for whom?
- **Scope boundaries**: What is explicitly out of scope?
- **Constraints**: What existing systems, contracts, or decisions must this respect?
- **Success criteria**: How do we know it's done and correct?
- **Edge cases**: What happens when inputs are empty, oversized, malformed, or concurrent?

Do not invoke subagents or write code until the user clears the gate.

## Spec-Heavy Request Handler

If the user provides answers as a numbered list ("1. yes, 2. Postgres, 3. by Friday"):

- Do not skip the gate.
- Acknowledge the answers.
- Ask 2 questions about trade-offs or edge cases they likely didn't consider.
- Proceed only after those are answered.

## Direct "Proceed" Handler

If the user says "proceed" or "go ahead" without adequate context:

- STOP.
- Ask 2 edge-case questions.
- Proceed only after they're answered.

## Reference

Full brainstorming protocol: `~/.gemini/antigravity/skills/brainstorming/SKILL.md`
