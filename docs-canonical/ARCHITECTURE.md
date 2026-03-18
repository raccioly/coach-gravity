# Architecture

<!-- docguard:version 0.1.0 -->
<!-- docguard:status approved -->
<!-- docguard:last-reviewed 2026-03-17 -->
<!-- docguard:owner @raccioly -->

> **Canonical document** — Design intent. This file describes WHAT the system is designed to be.  
> ⚠️ Changes to this file require team review. Update `DRIFT-LOG.md` if code deviates.

| Metadata | Value |
|----------|-------|
| **Status** | ![Status](https://img.shields.io/badge/status-approved-green) |
| **Version** | `0.1.0` |
| **Last Updated** | 2026-03-17 |
| **Owner** | @raccioly |

---

## System Overview

Coach Gravity teaches non-programmers how to build real software using AI coding agents. The toolkit provides a structured 9-phase learning curriculum (Phases 0–8), reference materials, starter-kit templates, and delivery guides. Authors write all content in Markdown and distribute the toolkit as a ZIP archive. The toolkit runs entirely through an AI coding agent (Antigravity) that reads the curriculum and workflows to guide learners interactively — the project uses Markdown files exclusively, with the AI agent as the runtime.

## Component Map

| Component | Responsibility | Location |
|-----------|---------------|----------|
| Getting Started Curriculum | 9-phase learning journey (trust, first app, AI prompting, planning, building, iterating, version control, deployment) | `getting-started/` |
| Reference Materials | Cheat sheets, quick references, slash commands, troubleshooting, safety guardrails | `reference/` |
| Starter Kit Templates | Per-project and global AI agent configuration templates (AGENTS.md, AGENT-REFERENCE.md) | `starter-kit/` |
| Project Planning | Questionnaire templates and documentation structure guides | `project-planning/` |
| Delivery Assets | Email templates and video guide scripts for distributing the toolkit | `delivery/` |
| Images | Visual assets and diagrams used throughout the curriculum | `images/` |
| Archive | Historical or versioned snapshots of the toolkit | `archive/` |
| Agent Workflows | Antigravity slash commands and AI skill definitions for the coaching agent | `.agent/workflows/`, `.agent/skills/` |
| Spec Kit Config | Spec-driven development framework with constitution, templates, and extensions | `.specify/` |

## Layer Boundaries

| Layer | Can Import From | Cannot Import From |
|-------|----------------|-------------------|
| Getting Started Phases | Reference, Project Planning, Starter Kit | Delivery, Archive |
| Reference Materials | (Standalone — no imports) | All other layers |
| Starter Kit Templates | (Standalone — copied to learner projects) | All other layers |
| Agent Workflows | Reference, Getting Started | Delivery, Archive |

## Tech Stack

| Category | Technology | Version | License |
|----------|-----------|---------|---------|
| Content Format | Markdown | N/A | N/A |
| AI Agent | Antigravity (Google DeepMind) | Latest | Proprietary |
| Documentation QA | DocGuard CLI | 0.9.8 | MIT |
| Spec Framework | Spec Kit (GitHub) | 0.3.0 | MIT |
| Distribution | ZIP archive | N/A | N/A |

## External Dependencies

| Service | Purpose | SLA | Fallback |
|---------|---------|-----|----------|
| Antigravity AI Agent | Interactive coaching engine that reads curriculum and guides learners | Best-effort (cloud AI) | Curriculum Markdown files can be read manually |
| GitHub | Source control and collaboration for the toolkit content | 99.95% | Local git repository |

## Diagrams

```mermaid
graph TD
    A[Learner] --> B[Antigravity Agent]
    B --> C[/.agent/workflows/start.md]
    C --> D[Getting Started: Phases 0-8]
    D --> E[Reference Materials]
    D --> F[Project Planning Templates]
    D --> G[Starter Kit Templates]
    B --> H[DocGuard Quality Checks]
    B --> I[Spec Kit Development Workflow]
```

---

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 0.1.0 | 2026-03-17 | @raccioly | Initial architecture for Coach Gravity coaching toolkit |
