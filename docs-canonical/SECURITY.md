# Security

> **Canonical document** — Design intent. This file defines the security model.  
> Last updated: 2026-03-17

<!-- docguard:version 0.1.0 -->
<!-- docguard:status approved -->
<!-- docguard:last-reviewed 2026-03-17 -->
<!-- docguard:owner @raccioly -->

---

## Authentication

Coach Gravity operates as a local documentation coaching toolkit delivered as a ZIP archive. Learners interact through their local AI coding agent (Antigravity) which runs on their machine. The toolkit requires only local file access.

| Method | Implementation | Details |
|--------|---------------|---------|
| Local AI agent | Antigravity runs locally | No network authentication required |
| Git access | SSH keys or HTTPS tokens | For learners who use version control (Phase 7) |

## Authorization

The toolkit distributes access at the file-system level. The coach distributes the toolkit ZIP directly to learners.

| Role | Permissions | Scope |
|------|------------|-------|
| Learner | Read all curriculum, execute workflows | Full toolkit (read-only intent) |
| Coach (author) | Create, edit, and distribute content | All files, Git commits |
| AI Agent | Read workflows, skills, and curriculum | `.agent/`, `getting-started/`, `reference/` |

## Secrets Management

This project stores all content as plain Markdown files. Learners may create secrets in their own projects during later phases (Phase 8 — AWS deployment), but those secrets live in the learner's project, separate from Coach Gravity.

| Secret | Storage | Access Pattern |
|--------|---------|---------------|
| Plain Markdown content only | Local file system | Direct file access |

**Learner-created secrets** (generated during Phase 8):

| Secret | Storage | Access Pattern |
|--------|---------|---------------|
| AWS credentials | Learner's local environment | Set via `aws configure` during Phase 8 |
| Git tokens | Learner's credential manager | Configured during Phase 7 |

## Security Rules

- All secrets MUST remain outside of code, logs, curriculum content, and error messages
- The `.agent/` directory MAY contain agent configuration — add it to `.gitignore` to prevent credential leakage
- Review the `.specify/` directory before sharing to ensure it contains only intended content
- The AI agent processes all user input locally on the learner's machine
- The toolkit content MUST remain free of PII (learner names, emails)
- Distribution of the toolkit ZIP MUST use secure channels (encrypted email, private links)
