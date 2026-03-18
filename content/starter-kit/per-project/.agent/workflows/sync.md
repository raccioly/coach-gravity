---
description: Sync documentation changes to WU Documentation folder since last workflow run
---

# Documentation Sync Workflow

Systematically review changes in project documentation and update WU Documentation with relevant changes. This workflow tracks its own execution history to only process changes since the last run.

---

## Prerequisites

- Git repository with clean working directory
- Access to all documentation folders: `/docs`, `/docs-canonical`, `/docs-implementation`
- Write access to `/WU Documentation`

---

## Phase 1: Initialize & Identify Changes

### Step 1.1: Check Last Run Timestamp

Check for the last run marker file. If it doesn't exist, this is the first run.

```bash
# View last run timestamp (if exists)
cat .agent/doc-sync-last-run.txt 2>/dev/null || echo "FIRST_RUN: No previous run found"
```

### Step 1.2: Get Current HEAD Commit

Capture the current commit for the marker file update at the end.

```bash
git rev-parse HEAD
```

### Step 1.3: Identify Changed Documentation Files

Get list of all documentation files changed since last run. Use the commit from `.agent/doc-sync-last-run.txt` if it exists, otherwise use `--all` to get full history.

**If marker file exists:**
```bash
LAST_COMMIT=$(cat .agent/doc-sync-last-run.txt)
git diff --name-only $LAST_COMMIT HEAD -- docs/ docs-canonical/ docs-implementation/
```

**If first run (no marker file):**
```bash
# List all current documentation files for initial audit
find docs docs-canonical docs-implementation -name "*.md" -o -name "*.yaml" -o -name "*.yml" | sort
```

### Step 1.4: Get Detailed Change Summary

For each changed file, get a summary of what changed:

```bash
LAST_COMMIT=$(cat .agent/doc-sync-last-run.txt 2>/dev/null || echo "HEAD~50")
git log --oneline $LAST_COMMIT..HEAD -- docs/ docs-canonical/ docs-implementation/
```

---

## Phase 2: Analyze Changes by Documentation Category

### Step 2.1: Categorize Changes

Review each changed file and categorize by impact type:

| Category | Source Files | Impact on WU Documentation |
|----------|--------------|---------------------------|
| **Architecture** | `ARCHITECTURE.md`, `ADR.md` | Update `01-Architecture-Diagram.md`, `02-Data-Flow-Diagrams.md` |
| **Security** | `SECURITY.md` | Update `05-Security-Scan-Results.md`, `00-Intake-Readiness-Guide.md` |
| **Data Model** | `DATA-MODEL.md` | Update `08-Data-Schema.md` |
| **Features** | `FEATURES.md`, `OPERATIONS.md` | Update `04-Executive-Summary.md` |
| **Integrations** | `INTEGRATIONS.md`, `MESSAGE-FLOWS.md` | Update `02-Data-Flow-Diagrams.md`, `03-Network-Diagram.md` |
| **API** | `openapi.yaml`, `API-REFERENCE.md` | Update `00-Intake-Readiness-Guide.md` |
| **Deployment** | `DEPLOYMENT.md`, `RUNBOOKS.md` | Update `07-AWS-Resource-Intake-Forms.md` |
| **Drift/State** | `DRIFT-LOG.md`, `CURRENT-STATE.md` | Update `00-Intake-Readiness-Guide.md` |
| **SSO/SCIM** | `SSO-SCIM-OKTA-GUIDE.md` | Update `05-Security-Scan-Results.md` |

### Step 2.2: Review Each Changed File

For each changed file, perform a detailed diff review:

```bash
LAST_COMMIT=$(cat .agent/doc-sync-last-run.txt 2>/dev/null || echo "HEAD~50")
git diff $LAST_COMMIT HEAD -- <file_path>
```

Document findings in a structured format:

```markdown
### Change Analysis: [filename]

**Commit Range:** [last_run_commit]..[current_commit]
**Lines Changed:** +X / -Y

#### Key Changes:
1. [Change 1 - what was added/modified/removed]
2. [Change 2 - ...]

#### Impact on WU Documentation:
- [ ] [WU Doc file] - [specific section to update] - [what to change]
```

---

## Phase 3: Cross-Reference with CHANGELOG and DRIFT-LOG

### Step 3.1: Review CHANGELOG for Context

Check CHANGELOG.md for user-facing changes that should be reflected in WU Documentation:

```bash
git diff $LAST_COMMIT HEAD -- CHANGELOG.md
```

Pay special attention to:

- **Added** - New features that need documentation in Executive Summary
- **Changed** - Architectural changes that affect diagrams
- **Security** - Any security-related changes for Security Scan Results
- **Removed** - Deprecated features to remove from WU docs

### Step 3.2: Review DRIFT-LOG for Deviations

Check DRIFT-LOG.md for any deviations from canonical docs that affect WU Documentation:

```bash
git diff $LAST_COMMIT HEAD -- docs-implementation/DRIFT-LOG.md
```

Flag any drift entries with status:

- `MODIFIED` - Existing feature works differently than originally designed
- `EXTENDED` - Feature has additional capabilities
- `DEPRECATED` - Feature is being phased out

---

## Phase 4: Update WU Documentation

### Step 4.1: Create Change Manifest

Before making changes, create a manifest of all planned updates:

```markdown
## WU Documentation Update Manifest

**Sync Date:** [YYYY-MM-DD]
**Commit Range:** [last_commit]..[current_commit]

### Planned Updates:

| WU Document | Section | Change Type | Source Reference |
|-------------|---------|-------------|------------------|
| [doc name] | [section] | ADD/MODIFY/REMOVE | [source file:line] |
```

### Step 4.2: Update Each WU Document

For each document in the manifest, perform updates following this checklist:

#### Per-Document Checklist

- [ ] **Open source file(s)** - Review the exact wording and technical details
- [ ] **Open WU document** - Locate the section to update
- [ ] **Verify accuracy** - Ensure change matches current implementation
- [ ] **Maintain formatting** - Follow existing markdown conventions in WU docs
- [ ] **Update timestamps** - Change "Last Updated" date at bottom of file
- [ ] **Cross-reference** - Check if change affects other WU documents

#### WU Document-Specific Guidelines

**00-Intake-Readiness-Guide.md:**

- Update readiness checklist items
- Verify all ISRA questions still accurate
- Update resource lists if new AWS services added

**01-Architecture-Diagram.md:**

- Regenerate Mermaid diagrams if components changed
- Verify all boxes match current services

**02-Data-Flow-Diagrams.md:**

- Update message flow sequences
- Add new flows for new features
- Remove deprecated flows

**03-Network-Diagram.md:**

- Update VPC/subnet/security group info
- Add new endpoints or services

**04-Executive-Summary.md:**

- Update feature highlights
- Revise capability descriptions
- Keep non-technical and business-focused

**05-Security-Scan-Results.md:**

- Update role definitions (5 default roles)
- Update permission counts
- Note any new security controls

**06-Athena-Intake-Form.md:**

- Update exported data descriptions
- Note any new metrics or fields

**07-AWS-Resource-Intake-Forms.md:**

- Add new AWS services
- Update configuration details
- Verify all intake form sections current

**08-Data-Schema.md:**

- Add new entities
- Update field lists
- Verify PII classification current

**README.md:**

- Update document index if files added/removed
- Update status badges
- Update "Last Updated" date

---

## Phase 5: Verification & Completion

### Step 5.1: Verify All Updates Applied

Run a diff on WU Documentation folder to see all changes:

```bash
git diff --stat -- "WU Documentation/"
```

### Step 5.2: Markdown Lint Check

Run markdown linting on updated files (if linter available):

```bash
npx markdownlint "WU Documentation/*.md" --config "WU Documentation/.markdownlint.json"
```

### Step 5.3: Cross-Reference Final Check

Verify consistency across WU documents:

| Check | Status |
|-------|--------|
| Role counts match (Security ↔ Intake Guide) | [ ] |
| AWS service list matches (README ↔ Intake Forms) | [ ] |
| Feature descriptions consistent across docs | [ ] |
| All "Last Updated" dates updated | [ ] |
| No placeholder text (TBD, TODO) introduced | [ ] |

### Step 5.4: Generate Summary Report

Create a summary of all changes made:

```markdown
## Doc Sync Summary Report

**Run Date:** [YYYY-MM-DD HH:MM]
**Commit Range:** [commit1]..[commit2]

### Source Changes Processed

- docs/: X files
- docs-canonical/: X files
- docs-implementation/: X files

### WU Documentation Updates

| Document | Sections Updated | Change Type |
|----------|-----------------|-------------|
| [doc] | [sections] | [type] |

### Notes

- [Any special considerations or follow-up items]
```

### Step 5.5: Update Run Marker

After successful completion, update the marker file:

```bash
git rev-parse HEAD > .agent/doc-sync-last-run.txt
```

### Step 5.6: Commit Changes (After Approval)

Stage and commit all WU Documentation changes:

```bash
git add "WU Documentation/"
git add .agent/doc-sync-last-run.txt
git commit -m "docs(wu): sync WU documentation with source changes

Synced changes from docs/, docs-canonical/, docs-implementation/
Commit range: [last_commit]..[current_commit]"
```

---

## Troubleshooting

### No Changes Found

If git diff returns no changes, verify:

1. Marker file has correct commit hash
2. Documentation files haven't been moved
3. Check if changes were made directly to WU docs (would be outside this sync)

### Large Number of Changes

If >20 files changed:

1. Consider running in phases by folder
2. Prioritize by category (Security first, then Architecture, etc.)
3. Create sub-manifests per phase

### Merge Conflicts in WU Docs

If WU docs have been edited manually since last sync:

1. Review manual changes first
2. Merge manual and synced changes carefully
3. Document any manual overrides in manifest

---

## Quick Reference: Source → WU Document Mapping

| Source File | Primary WU Target(s) |
|-------------|---------------------|
| `ARCHITECTURE.md` | 01-Architecture, 02-Data-Flow |
| `DATA-MODEL.md` | 08-Data-Schema |
| `SECURITY.md` | 05-Security, 00-Intake |
| `FEATURES.md` | 04-Executive |
| `OPERATIONS.md` | 07-AWS-Resources |
| `INTEGRATIONS.md` | 02-Data-Flow, 06-Athena |
| `MESSAGE-FLOWS.md` | 02-Data-Flow |
| `openapi.yaml` | 00-Intake |
| `CURRENT-STATE.md` | 00-Intake, 04-Executive |
| `DRIFT-LOG.md` | 00-Intake |
| `DEPLOYMENT.md` | 07-AWS-Resources |
| `SSO-SCIM-OKTA-GUIDE.md` | 05-Security |

---

*This workflow should be run after significant documentation updates, typically weekly or after major feature releases.*
