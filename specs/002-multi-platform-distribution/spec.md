# Feature Specification: Multi-Platform AI Agent Distribution

**Feature Branch**: `002-multi-platform-distribution`  
**Created**: 2026-03-18  
**Status**: Draft  
**Input**: User description: "Shareable setup instructions, auto-detect LLM type, cross-platform workflow install, project improvements"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Quick Share Setup Text (Priority: P1)

A Coach Gravity user wants to share the toolkit with a friend or colleague. They need a ready-to-share message that tells the recipient exactly how to install and start using Coach Gravity, regardless of which AI coding agent they use.

**Why this priority**: This is the most immediately useful feature — reduces friction for every new learner who receives the toolkit.

**Independent Test**: Can be tested by copying the generated message, sending it to someone with no prior context, and confirming they can follow the instructions to completion.

**Acceptance Scenarios**:

1. **Given** a Coach Gravity user types `/share`, **When** the workflow runs, **Then** the system displays a ready-to-copy message with platform-specific install instructions for all supported AI agents
2. **Given** a recipient receives the share message, **When** they follow the instructions for their AI agent, **Then** they have a working Coach Gravity installation within 5 minutes
3. **Given** the recipient does not know which AI agent they have, **When** they read the share message, **Then** the message includes a brief explanation of each option to help them identify their setup

---

### User Story 2 - Auto-Detect AI Agent Type (Priority: P2)

When someone runs the Coach Gravity installer (via `npx coach-gravity install` or the `/start` workflow), the system detects which AI coding agent is installed on their computer and installs files in the correct locations for that agent.

**Why this priority**: Eliminates confusion about where files go — the user does not need to know the technical differences between Antigravity, Claude Code, Cursor, Windsurf, or other AI agents.

**Independent Test**: Can be tested by running the installer on machines with different AI agents installed and confirming files land in the correct directories.

**Acceptance Scenarios**:

1. **Given** a user with Antigravity installed, **When** they run `npx coach-gravity install`, **Then** workflows install to `~/.gemini/antigravity/global_workflows/` and skills install to `~/.gemini/antigravity/skills/coach-gravity/`
2. **Given** a user with Claude Code installed, **When** they run `npx coach-gravity install`, **Then** config files install to the Claude-compatible location with correct naming conventions
3. **Given** a user with Cursor installed, **When** they run `npx coach-gravity install`, **Then** config files install to the Cursor-compatible location
4. **Given** a user with multiple AI agents installed, **When** they run the installer, **Then** the installer configures all detected agents
5. **Given** a user with an unrecognized AI agent, **When** they run the installer, **Then** the installer provides a generic setup guide and lists supported agents

---

### User Story 3 - Cross-Platform Workflow Compatibility (Priority: P3)

Coach Gravity workflows (slash commands) adapt to work with AI agents that use different workflow formats. The 25 workflows currently written for Antigravity can be used in Claude Code projects, Cursor, or other tools.

**Why this priority**: Expands the addressable audience beyond Antigravity-only users, but requires the most research and implementation effort.

**Independent Test**: Can be tested by attempting to use Coach Gravity workflows in each supported AI agent and confirming they execute correctly.

**Acceptance Scenarios**:

1. **Given** a Claude Code user with Coach Gravity installed, **When** they reference a Coach Gravity workflow, **Then** the agent follows the workflow instructions correctly
2. **Given** an AI agent that uses a different workflow directory convention, **When** the installer runs, **Then** workflows are placed in the correct directory for that agent
3. **Given** a workflow references Antigravity-specific features, **When** converted for another agent, **Then** the workflow uses equivalent features or clearly notes unsupported capabilities

---

### User Story 4 - Improvement Roadmap Discovery (Priority: P4)

The project owner wants to identify and prioritize improvements to the Coach Gravity project — from content quality to distribution reach to feature gaps.

**Why this priority**: Strategic improvement ensures the project remains valuable long-term, but is less urgent than user-facing distribution features.

**Independent Test**: Can be tested by reviewing the generated improvement list and confirming each item is actionable and prioritized.

**Acceptance Scenarios**:

1. **Given** the project owner runs a review workflow, **When** the analysis completes, **Then** a prioritized list of improvements is generated covering content, distribution, tooling, and reach

---

### Edge Cases

- What happens when no AI coding agent is detected on the user's machine?
- How does the system handle AI agents it has never seen before?
- What happens when an AI agent updates its directory conventions in a new version?
- How does the system handle Windows vs macOS vs Linux path differences?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST generate a shareable setup message that includes platform-specific instructions for all supported AI agents
- **FR-002**: System MUST detect which AI coding agents are installed on the user's computer by checking for known directory signatures
- **FR-003**: System MUST support at minimum: Antigravity, Claude Code, and Cursor
- **FR-004**: System MUST install configuration files to the correct locations for each detected AI agent
- **FR-005**: System MUST handle multiple AI agents on the same machine by configuring all of them
- **FR-006**: System MUST work on macOS, Linux, and Windows
- **FR-007**: System MUST provide a fallback manual setup guide when no agent is detected
- **FR-008**: System MUST include a `/share` workflow that generates copy-paste-ready distribution text
- **FR-009**: System MUST preserve existing user configurations when installing alongside existing agent setups

### Key Entities

- **AI Agent Profile**: Represents a supported AI coding agent — includes name, detection method (directory signatures), config file locations, workflow directory, skill directory, and naming conventions
- **Installation Manifest**: Records which agents were detected, what files were installed where, and the installation timestamp — used for updates and uninstallation
- **Share Message Template**: A per-agent block of setup instructions that assembles into a complete shareable message

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A new user can complete installation on any supported AI agent within 5 minutes using only the shared message
- **SC-002**: The installer correctly detects and configures at least 3 different AI agents (Antigravity, Claude Code, Cursor)
- **SC-003**: 100% of the 25 existing workflows function correctly in each supported agent
- **SC-004**: The `/share` workflow produces a message that requires zero editing before sharing
- **SC-005**: Installation works on macOS, Linux, and Windows without platform-specific user actions

### Assumptions

- AI agents follow stable, documented directory conventions that can be detected via filesystem checks
- Workflow markdown files are broadly compatible across agents (all agents can interpret structured markdown instructions)
- Users have Node.js installed (this is a prerequisite established in Phase 0 of the curriculum)
- The npm registry remains the primary distribution channel
