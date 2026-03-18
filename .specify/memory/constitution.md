<!-- Sync Impact Report
  Version change: 0.0.0 → 1.0.0
  New principles:
    - I. Learner-First Design
    - II. Plain Language Always
    - III. Documentation as Source of Truth
    - IV. Quality Gates Before Distribution
    - V. Progressive Disclosure
  New sections:
    - Content Standards
    - Development Workflow
    - Governance
  Templates requiring updates: ✅ No updates needed (initial constitution)
  Follow-up TODOs: None
-->

# Coach Gravity Constitution

## Core Principles

### I. Learner-First Design

Every decision in Coach Gravity MUST prioritize the learner's experience
above author convenience or technical elegance. The toolkit exists to
empower people with zero programming experience to build real software.

- Content MUST assume zero prior technical knowledge
- Each learning phase MUST build directly on the previous phase
- Error recovery guidance MUST appear alongside every instruction that
  could fail
- The AI agent MUST guide, encourage, and explain — never gatekeep

### II. Plain Language Always

All curriculum content, reference materials, and documentation MUST use
clear, accessible language. Technical jargon MUST be defined on first use
and collected in the glossary.

- Writing MUST target Flesch-Kincaid grade level 8–10
- Terms MUST be defined in `reference/glossary.md` before use in
  curriculum phases
- Instructions MUST use imperative voice ("Type this command" rather than
  "One might consider executing the following")
- Analogies and real-world comparisons MUST accompany abstract concepts

### III. Documentation as Source of Truth

Canonical documentation in `docs-canonical/` defines what Coach Gravity
is designed to be. All content changes MUST align with these canonical
documents. Deviations MUST be logged in `DRIFT-LOG.md`.

- `docs-canonical/` files are READ-ONLY design intent — change them first,
  then update content
- `CHANGELOG.md` MUST record every meaningful content change
- `DRIFT-LOG.md` MUST capture any deviation between canonical intent and
  actual content
- DocGuard `guard` MUST pass with zero errors before distributing updates

### IV. Quality Gates Before Distribution

Every update to Coach Gravity MUST pass automated quality validation
before distribution to learners. Quality gates protect learners from
receiving broken or incomplete content.

- `docguard guard` MUST return 0 errors before any distribution
- `docguard score` MUST remain at 80/100 (A) or higher
- All 9 curriculum phases (Phase 0–8) MUST exist and contain substantive
  content
- All internal Markdown links MUST resolve to existing files

### V. Progressive Disclosure

The curriculum MUST reveal complexity gradually. Early phases focus on
trust and immediate results. Later phases introduce deeper concepts only
after learners have built confidence through success.

- Phase 0 MUST focus exclusively on trust-building and setup
- Phase 1 MUST deliver a working application within 60 minutes
- Phases 2–3 MUST explain what happened and how to communicate with AI
- Phases 4–8 MUST progressively introduce planning, building, iteration,
  version control, and deployment

## Content Standards

All content in Coach Gravity MUST follow these standards:

- **File naming**: Phase files use `phase-N-descriptive-name.md` format
- **Section structure**: Every phase file MUST have at least 3 H2 sections
- **Callouts**: Use Markdown blockquotes for tips, warnings, and
  encouragement
- **Code examples**: Use fenced code blocks with language identifiers
- **Cross-references**: Link to reference materials using relative paths
- **Images**: Store all visual assets in `images/` with descriptive
  filenames

## Development Workflow

Authors contributing to Coach Gravity MUST follow this workflow:

1. **Research**: Check `docs-canonical/` for design intent before making
   changes
2. **Plan**: Document proposed changes and wait for approval if modifying
   more than 3 files
3. **Implement**: Match existing content style and structure
4. **Validate**: Run `docguard guard` to verify quality
5. **Review**: Have another author or the AI agent review changes
6. **Distribute**: Package updates and distribute through secure channels

## Governance

This constitution governs all development of Coach Gravity. It supersedes
conflicting guidance found in other documents.

- Amendments require documentation of the change, rationale, and approval
  from the project owner
- Version numbering follows semantic versioning (MAJOR.MINOR.PATCH)
- All contributors MUST verify compliance with these principles before
  submitting changes
- Use `docs-canonical/` files as the runtime development guidance
  reference

**Version**: 1.0.0 | **Ratified**: 2026-03-17 | **Last Amended**: 2026-03-17
