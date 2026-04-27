# Architecture

<!-- docguard:version 0.2.0 -->
<!-- docguard:status approved -->
<!-- docguard:last-reviewed 2026-04-27 -->
<!-- docguard:owner @raccioly -->

> **Canonical document** — Design intent. This file describes WHAT the system is designed to be.  
> ⚠️ Changes to this file require team review. Update `DRIFT-LOG.md` if code deviates.

| Metadata | Value |
|----------|-------|
| **Status** | ![Status](https://img.shields.io/badge/status-approved-green) |
| **Version** | `0.2.0` |
| **Last Updated** | 2026-04-27 |
| **Owner** | @raccioly |

---

## System Overview

Coach Gravity teaches non-programmers how to build real software using AI coding agents. The toolkit provides a structured 9-phase learning curriculum (Phases 0–8), reference materials, starter-kit templates, and delivery guides. It is distributed as an npm package (`npx coach-gravity install`) with a CLI that auto-scaffolds the framework for multiple AI platforms. As of v3.0, the CLI natively generates GitHub Copilot Agent Skills (`.github/skills/`, `.github/prompts/`, `.github/agents/`) and Cursor-compatible configurations, in addition to the original Gemini/Claude Code global install.

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
| Copilot Scaffolding | Native Agent Skills, prompt files, and agent personas for VS Code Copilot | `.github/skills/`, `.github/prompts/`, `.github/agents/` |
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
| AI Agent | GitHub Copilot (VS Code) | Latest | Proprietary |
| AI Agent | Claude Code (Anthropic) | Latest | Proprietary |
| Documentation QA | DocGuard CLI | 0.9.8 | MIT |
| Spec Framework | Spec Kit (GitHub) | 0.3.0 | MIT |
| Distribution | npm (`coach-gravity`) | 3.0.0 | MIT |
| CLI Runtime | Node.js | 18+ | MIT |

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
| 0.2.0 | 2026-04-27 | @raccioly | v3.0: Added multi-platform distribution (npm CLI), native Copilot Agent Skills scaffolding, removed MCP dependency |
| 0.1.0 | 2026-03-17 | @raccioly | Initial architecture for Coach Gravity coaching toolkit |
