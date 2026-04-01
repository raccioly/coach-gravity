# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/),
and this project adheres to [Semantic Versioning](https://semver.org/).

## [2.0.0] - 2026-04-01

### Added
- **20 specialist agent personas** — frontend, backend, security, debugger, database, mobile, game, DevOps, SEO, performance, documentation, project-planner, orchestrator, product-manager, product-owner, QA, code-archaeologist, explorer, penetration-tester, test-engineer
- **37 domain knowledge skills** — react, api-patterns, database-design, frontend-design, tailwind-patterns, clean-code, testing-patterns, vulnerability-scanner, and 29 more
- **9 new workflows** — `/brainstorm`, `/create`, `/debug`, `/deploy`, `/enhance`, `/orchestrate`, `/plan`, `/status`, `/ui-ux-pro-max`
- **4 Python validation scripts** — checklist.py, verify_all.py, session_manager.py, auto_preview.py
- **SYSTEM-MAP.md** — Architecture self-reference document for AI orientation
- **Context7 MCP config** — Live documentation lookup via mcp_config.json
- **Merged GEMINI.md** — Combined request classifier, Socratic gate, agent routing, and research-first workflow
- CLI now installs agents, skills, scripts, MCP config, and SYSTEM-MAP alongside workflows

### Changed
- Package description updated to "Super Antigravity"
- Install banner updated from "Coach Gravity Installer" to "Super Antigravity Installer"
- All documentation references updated from 25 to 37 workflows

## [1.1.0] - 2026-04-01

### Added
- Cross-platform CLI support (macOS + Windows)
- `npx coach-gravity init` command for per-project setup
- Safe config protection — never overwrites existing user files
- `--force` flag for config reset with backup
- `.agent/workflows/start.md` for guided onboarding

### Fixed
- Windows path handling with `path.join()` instead of `/`
- Home directory detection using `os.homedir()` for cross-platform

## [1.0.3] - 2026-03-19

### Fixed
- Added full ZIP to GitHub releases for distribution

## [1.0.2] - 2026-03-18

### Fixed
- Workflow installation path corrected

## [1.0.1] - 2026-03-17

### Changed
- Initial public release on npm

## [1.0.0] - 2026-03-17

### Added
- Initial release
- 9-phase learning curriculum (Phase 0–8)
- 25 slash command workflows
- Coach Gravity skill with curriculum content
- DocGuard integration for documentation quality
- Reference materials (glossary, cheat sheet, troubleshooting, FAQ)
- Project planning questionnaire
- Delivery templates (email scripts, video guides)
- GitHub Actions release pipeline
