# Technical Plan: Multi-Platform AI Agent Distribution

**Feature**: `002-multi-platform-distribution`  
**Spec**: [spec.md](./spec.md)  
**Created**: 2026-03-18  

## Research: AI Agent Directory Conventions

| Agent | Global Config | Global Rules | Per-Project Rules | Workflows/Commands | Detection Signature |
|-------|--------------|-------------|-------------------|--------------------|--------------------|
| **Antigravity** | `~/.gemini/GEMINI.md` | `~/.gemini/GEMINI.md` | `.agent/workflows/*.md` | `~/.gemini/antigravity/global_workflows/` | `~/.gemini/antigravity/` exists |
| **Claude Code** | `~/.claude/CLAUDE.md` | `~/.claude/CLAUDE.md` | `CLAUDE.md` in project root | `~/.claude/commands/*.md` | `~/.claude/` exists |
| **Cursor** | Settings UI → "Rules for AI" | No file-based global rules | `.cursorrules` or `.cursor/rules/*.mdc` | No slash command system | `.cursor/` in any project |
| **Windsurf** | `global_rules.md` (location varies) | `global_rules.md` | `.windsurfrules` | No slash command system | `.windsurf/` or `.windsurfrules` in any project |

### Key Insight

**Workflows (slash commands) are only natively supported by Antigravity and Claude Code.** Cursor and Windsurf have rules files but no workflow/command execution system. For those agents, we can still install rules and curriculum content, but workflows would need to be referenced differently (as instructions in rules files instead of slash commands).

## Constitution Check

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Learner-First Design | ✅ Pass | Auto-detection eliminates complexity — learner doesn't need to know directory paths |
| II. Plain Language Always | ✅ Pass | Share message uses non-technical language |
| III. Documentation as Source of Truth | ✅ Pass | Agent profiles defined in code, changes tracked via git |
| IV. Quality Gates | ✅ Pass | docguard guard runs before distribution |
| V. Progressive Disclosure | ✅ Pass | Installer works with one command; details only shown if needed |

## Proposed Changes

### Phase 1: Agent Detection + Shareable Message (P1 + P2)

#### [MODIFY] [bin/cli.js](file:///Users/ricardoaccioly/.gemini/coach_gravity/bin/cli.js)

Add agent detection logic:

```javascript
const AGENTS = {
  antigravity: {
    name: 'Antigravity',
    detect: () => fs.existsSync(path.join(HOME, '.gemini', 'antigravity')),
    globalRules: path.join(HOME, '.gemini', 'GEMINI.md'),
    workflows: path.join(HOME, '.gemini', 'antigravity', 'global_workflows'),
    skills: path.join(HOME, '.gemini', 'antigravity', 'skills'),
  },
  claude: {
    name: 'Claude Code',
    detect: () => fs.existsSync(path.join(HOME, '.claude')),
    globalRules: path.join(HOME, '.claude', 'CLAUDE.md'),
    commands: path.join(HOME, '.claude', 'commands'),
  },
  cursor: {
    name: 'Cursor',
    detect: () => /* check common project dirs for .cursor/ */,
    globalRules: null, // Settings UI only
  },
  windsurf: {
    name: 'Windsurf',
    detect: () => /* check for .windsurfrules */,
    globalRules: null, // global_rules.md location varies
  },
};
```

- Detect all installed agents on `install`
- Install config files to correct locations per agent
- Convert workflows to Claude Code commands format for `~/.claude/commands/` 
- For Cursor/Windsurf: install curriculum content + generate `.cursorrules`/`.windsurfrules` with Coach Gravity context

#### [NEW] [share.md](file:///Users/ricardoaccioly/.gemini/coach_gravity/.agent/workflows/share.md)

New `/share` workflow that generates copy-paste-ready text:

```
🚀 Coach Gravity — Learn to build software with AI

Install in one command:
  npx coach-gravity install

Or download the starter ZIP:
  https://github.com/raccioly/coach-gravity/releases/latest

After installing, open any folder in your AI coding agent and type:
  Antigravity: /start
  Claude Code: /start
  Cursor/Windsurf: Open CLAUDE.md and follow the guide

Works with: Antigravity, Claude Code, Cursor, Windsurf
No coding experience needed. Takes ~30 minutes.
```

#### [NEW] [starter-kit/global/CURSORRULES](file:///Users/ricardoaccioly/.gemini/coach_gravity/starter-kit/global/CURSORRULES)

Template `.cursorrules` file adapted from `GEMINI.md` for Cursor users.

#### [NEW] [starter-kit/global/WINDSURFRULES](file:///Users/ricardoaccioly/.gemini/coach_gravity/starter-kit/global/WINDSURFRULES)

Template `.windsurfrules` file adapted from `GEMINI.md` for Windsurf users.

---

### Phase 2: Cross-Platform Workflow Conversion (P3)

#### [NEW] [bin/convert-workflows.js](file:///Users/ricardoaccioly/.gemini/coach_gravity/bin/convert-workflows.js)

Script that converts Antigravity workflow format to Claude Code command format:
- Antigravity: `.agent/workflows/start.md` (YAML frontmatter + instructions)
- Claude Code: `~/.claude/commands/start.md` (same markdown, different location)

For Cursor/Windsurf: Workflows can't be executed as commands, so instead generate a comprehensive rules file that references the curriculum.

---

### Phase 3: Improvement Roadmap (P4)

#### [NEW] [ROADMAP.md](file:///Users/ricardoaccioly/.gemini/coach_gravity/ROADMAP.md)

Prioritized improvement list:

| Priority | Improvement | Impact |
|----------|------------|--------|
| **High** | `/share` workflow + shareable setup text | Removes friction for every new learner |
| **High** | Agent auto-detection in CLI | Supports all major AI agents |
| **High** | Claude Code command support | Doubles addressable audience |
| **Medium** | `.cursorrules` template | Adds Cursor support |
| **Medium** | `.windsurfrules` template | Adds Windsurf support |
| **Medium** | Windows path support in CLI | Cross-platform |
| **Low** | Curriculum versioning (semantic) | Better update management |
| **Low** | Usage analytics (opt-in) | Understand learner progress |
| **Low** | Community workflow marketplace | User-contributed workflows |

## Verification Plan

### Automated Tests
- Run `npx coach-gravity install` on machines with each agent → verify correct file placement
- Test `/share` workflow produces valid, copy-paste-ready output
- Verify Claude Code commands work as slash commands

### Manual Verification
- Share the generated message with a real person and observe if they complete setup successfully
- Test on macOS and Linux
