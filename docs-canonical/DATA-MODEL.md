# Data Model

<!-- docguard:version 0.1.0 -->
<!-- docguard:status approved -->
<!-- docguard:last-reviewed 2026-03-17 -->
<!-- docguard:owner @raccioly -->

> **Canonical document** — Design intent. This file describes the data structures and their relationships.  
> ⚠️ Schema changes require this doc to be updated FIRST.

| Metadata | Value |
|----------|-------|
| **Status** | ![Status](https://img.shields.io/badge/status-approved-green) |
| **Version** | `0.1.0` |
| **Last Updated** | 2026-03-17 |
| **Owner** | @raccioly |

---

## Entities

Coach Gravity stores all data as Markdown files organized in a directory hierarchy. The file system serves as the persistence layer. Each "entity" below represents a logical content group.

| Entity | Storage | Primary Key | Description |
|--------|---------|-------------|-------------|
| Phase | `getting-started/phase-*.md` | Filename (phase number) | A single learning phase in the 9-step curriculum |
| Reference | `reference/*.md` | Filename | Quick-reference material (cheat sheets, troubleshooting) |
| Template | `starter-kit/**/*.md` | Directory + filename | Reusable configuration template for learner projects |
| Planning Guide | `project-planning/*.md` | Filename | Questionnaires and structure guides for project planning |
| Delivery Asset | `delivery/*.md` | Filename | Distribution materials (email templates, video scripts) |
| Agent Workflow | `.agent/workflows/*.md` | Filename | AI agent slash command definitions |
| Agent Skill | `.agent/skills/*/SKILL.md` | Directory name | AI agent behavior protocol with YAML frontmatter |

## Schema Definitions

### Phase (Curriculum Step)

| Field | Type | Required | Default | Constraints | Description |
|-------|------|----------|---------|-------------|-------------|
| Title | Markdown H1 | Yes | — | One per file | Human-readable phase name |
| Phase Number | Integer (0-8) | Yes | — | Unique, sequential | Order in the learning curriculum |
| Content Sections | Markdown H2+ | Yes | — | Minimum 3 sections | Teaching material organized by topic |
| Callouts | Markdown blockquotes | No | — | — | Tips, warnings, and encouragement for learners |

### Agent Workflow

| Field | Type | Required | Default | Constraints | Description |
|-------|------|----------|---------|-------------|-------------|
| Description | YAML frontmatter `description` | Yes | — | Single line | Short description of the workflow's purpose |
| Steps | Markdown ordered list | Yes | — | Minimum 1 step | Sequential instructions for the AI agent |

## Relationships

| From | To | Type | FK/Reference | Cascade |
|------|-----|------|-------------|---------|
| Phase | Reference | 1:many | Markdown links | N/A (content only) |
| Phase | Starter Kit Templates | 1:many | Markdown links | N/A (content only) |
| Agent Workflow | Phase | 1:many | File path references | N/A (content only) |

## Indexes

This project uses a file-system-based content structure. The directory hierarchy serves as the primary index for locating content.

| Table | Index Name | Fields | Type | Purpose |
|-------|-----------|--------|------|---------|
| N/A | Filesystem hierarchy | Directory path | Directory tree | Content is located by directory + filename convention |

## Migration Strategy

| Strategy | Tool | Notes |
|----------|------|-------|
| File versioning | Git | All content changes are tracked via Git commits |
| Archive snapshots | ZIP (`coach_gravity.zip`) | Point-in-time snapshots stored in `archive/` |

---

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 0.1.0 | 2026-03-17 | @raccioly | Initial data model for Coach Gravity content structure |
