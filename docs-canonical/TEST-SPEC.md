# Test Specification

> **Canonical document** — Design intent. This file declares what tests MUST exist.  
> Last updated: 2026-03-17

<!-- docguard:version 0.1.0 -->
<!-- docguard:status approved -->
<!-- docguard:last-reviewed 2026-03-17 -->
<!-- docguard:owner @raccioly -->

---

## Test Categories

Coach Gravity validates quality through documentation linting, content review, and AI agent workflow verification. The project uses DocGuard CLI as its primary quality gate.

| Category | Required | Applies To | Tools |
|----------|----------|-----------|--------------------|
| Doc Quality | ✅ Yes | All Markdown files in `docs-canonical/` | DocGuard CLI (`docguard guard`) |
| Content Lint | ✅ Yes | Curriculum files in `getting-started/` | DocGuard validators |
| Workflow Verification | ✅ Yes | Agent workflows in `.agent/workflows/` | Manual AI agent testing |
| Spec Kit Validation | ✅ Yes | `.specify/` artifacts (spec, plan, tasks) | DocGuard spec-kit validator |
| Link Checking | ⚠️ Optional | All Markdown files | Markdown link validator |

## Coverage Rules

| Source Pattern | Required Test Pattern | Category |
|---------------|----------------------|----------|
| `docs-canonical/*.md` | `docguard guard` passes all validators | Doc Quality |
| `getting-started/phase-*.md` | Each phase has minimum 3 content sections | Content Lint |
| `.agent/workflows/*.md` | YAML frontmatter includes `description` field | Workflow Verification |

## Validation Map

All canonical documentation quality is validated through DocGuard CLI commands:

| Source File | Validation Command | Status |
|------------|-------------------|--------|
| `docs-canonical/ARCHITECTURE.md` | `docguard guard` | ✅ |
| `docs-canonical/SECURITY.md` | `docguard guard` | ✅ |
| `docs-canonical/TEST-SPEC.md` | `docguard guard` | ✅ |
| `docs-canonical/DATA-MODEL.md` | `docguard guard` | ✅ |
| `docs-canonical/ENVIRONMENT.md` | `docguard guard` | ✅ |
| `docs-canonical/REQUIREMENTS.md` | `docguard guard` | ✅ |

## Critical User Journeys (Workflow Verification Required)

| # | Journey Description | Verification Method | Status |
|---|-------------------|-----------|--------|
| 1 | Learner types `/start` and is guided through Phase 0 | Manual AI agent session test | ✅ |
| 2 | Learner completes Phase 1 (first app) with AI assistance | Manual walkthrough verification | ✅ |
| 3 | DocGuard `guard` returns 0 errors on all canonical docs | `docguard guard` CLI command | ✅ |

## Canary Tests (Pre-Distribution Gates)

| Canary | What It Checks | Command |
|--------|---------------|---------|
| DocGuard Guard | All 6 canonical docs pass validation | `docguard guard` |
| DocGuard Score | Documentation maturity score meets target | `docguard score` |
| File Completeness | All 9 phases (0-8) exist in `getting-started/` | `ls getting-started/phase-*.md` |

## Recommended Test Patterns

| Pattern | Description | Priority |
|---------|-------------|----------|
| DocGuard CI gate | Run `docguard guard` before distributing updates | ⚠️ High |
| Content review | Manual review of curriculum accuracy after significant edits | ⚠️ High |
| Workflow dry-run | Test each AI agent workflow with a fresh learner session | ✅ Medium |
| Link validation | Check all internal Markdown links resolve to existing files | ✅ Medium |
