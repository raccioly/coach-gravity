# Feature Specification: Fix Global Workflow File Placement on macOS

**Feature Branch**: `001-fix-workflow-placement`  
**Created**: 2026-03-17  
**Status**: Draft  
**Input**: User description: "Coach Gravity should save workflow files in the right place. Today when someone on macOS is pushing the creations of the workflows it's not placing the global workflows in the right folder. It should find the user's correct Gemini folder and then put them in the global workflow folder. If the folder doesn't exist it will need to create it."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - First-Time Learner Installs Global Workflows (Priority: P1)

A non-programmer runs the `/start` onboarding workflow for the first time. When they reach Phase 3 (Global Configuration), the system installs 25 global workflow files. These workflows must land in the correct Gemini agent folder so they are available in every project the learner opens.

**Why this priority**: Core onboarding step — if workflows install to the wrong folder, none of the 25 slash commands work globally, breaking the entire post-onboarding experience.

**Independent Test**: Run the `/start` workflow through Phase 3 step 12, then open a different project folder and verify that all 25 slash commands are recognized by the Antigravity agent.

**Acceptance Scenarios**:

1. A learner completes Phase 3 step 12, and all 25 workflow files exist in the correct global Gemini agent workflow directory
2. A learner opens a new, empty project folder after onboarding and all 25 slash commands (e.g., `/launch`, `/preflight`, `/sentinel`) are available
3. The installation process creates the workflow directory automatically when it does not already exist

---

### User Story 2 - Returning Learner Re-Runs Start Workflow (Priority: P2)

A learner who already has global workflows installed runs `/start` again (e.g., from a different Coach Gravity copy or after an update). The system detects the existing directory and safely overwrites workflow files with the updated versions.

**Why this priority**: Supports re-onboarding and toolkit updates without manual cleanup.

**Independent Test**: Run `/start` twice in sequence. After the second run, verify workflow files are current versions and the directory contains exactly the expected 25 files.

**Acceptance Scenarios**:

1. A learner with existing global workflows runs `/start` again, and all 25 workflows are updated to the latest versions
2. Existing workflow files are overwritten cleanly without creating duplicates or orphan files

---

### User Story 3 - Cross-Platform Path Resolution (Priority: P2)

A learner uses Coach Gravity on macOS (the primary target platform). The system correctly resolves the user's home directory and Gemini agent configuration path regardless of the specific macOS version or username.

**Why this priority**: macOS path resolution is the root cause of the current bug.

**Independent Test**: Verify that the resolved path matches `$HOME/.gemini/antigravity/global_workflows/` on macOS.

**Acceptance Scenarios**:

1. The system resolves the home directory using the `$HOME` environment variable (works for all macOS usernames)
2. The generated path follows the Antigravity agent convention: `$HOME/.gemini/antigravity/global_workflows/`
3. The path resolution works for usernames containing spaces or special characters

---

### Edge Cases

- What happens when the `$HOME` variable is unset or empty? The system MUST fail with a clear error message rather than writing files to a wrong location.
- What happens when the user's home directory has restricted permissions? The system MUST report the permission error clearly.
- What happens when only some of the 25 workflow files exist from a previous partial installation? The system MUST install all 25, overwriting any existing ones.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST install all 25 global workflow files to `$HOME/.gemini/antigravity/global_workflows/` on macOS
- **FR-002**: System MUST create the full directory path (`$HOME/.gemini/antigravity/global_workflows/`) if any part of it does not already exist (equivalent to `mkdir -p`)
- **FR-003**: System MUST resolve the user's home directory using the `$HOME` environment variable
- **FR-004**: System MUST copy workflow files from `starter-kit/per-project/.agent/workflows/` as the source location
- **FR-005**: System MUST overwrite existing workflow files when re-running the installation (idempotent behavior)
- **FR-006**: System MUST report a clear success message listing the number of workflows installed and the destination path
- **FR-007**: System MUST report a clear error message if the destination directory cannot be created or written to

### Key Entities

- **Workflow File**: A Markdown file (`.md`) containing a YAML frontmatter `description` field and step-by-step instructions for an AI agent slash command. Each file corresponds to one slash command (e.g., `sentinel.md` → `/sentinel`).
- **Global Workflows Directory**: The directory where Antigravity reads global slash commands from. On macOS, this is `$HOME/.gemini/antigravity/global_workflows/`. Files placed here are available in every project the user opens. Verified by inspecting the existing directory which contains 28 workflow files.
- **Source Workflows**: The 25 workflow template files bundled with Coach Gravity at `starter-kit/per-project/.agent/workflows/`.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: After running the onboarding workflow, 25 workflow files exist in the correct global directory and all are recognized by the Antigravity agent in a new project
- **SC-002**: The installation completes in under 5 seconds on a standard macOS system
- **SC-003**: 100% of new learners on macOS have working global slash commands after completing onboarding (zero manual path fixes needed)
- **SC-004**: Re-running the installation produces identical results to the first run (idempotent)

## Assumptions

- The Antigravity agent reads global workflows from `$HOME/.gemini/antigravity/global_workflows/` on macOS (verified by Antigravity documentation and inspecting the existing directory which contains 28 workflow files)
- The current bug is in `start.md` step 12, which uses the incorrect destination path `~/.gemini/workflows/` instead of `~/.gemini/antigravity/global_workflows/`
- All 25 source workflow files are present and valid in `starter-kit/per-project/.agent/workflows/`
- The learner's user account has write permissions to their home directory
