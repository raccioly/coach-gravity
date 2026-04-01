# Contributing to Coach Gravity

Thank you for your interest in improving Coach Gravity!

## Quick Start

1. Fork and clone the repo
2. Make your changes
3. Test locally: `node bin/cli.js install`
4. Submit a PR

## Development

```bash
# Test install locally
node bin/cli.js install

# Test per-project setup
node bin/cli.js init

# Test update path
node bin/cli.js update
```

## Guidelines

- **JavaScript only** — CommonJS, no TypeScript, no build step
- **Cross-platform** — Must work on macOS and Windows
- **Safe installs** — Never overwrite existing user files without `--force`
- **Learner-friendly** — Remember the target audience is non-programmers

## What to Contribute

| Type | Where to Put It |
|------|----------------|
| New workflows | `content/starter-kit/per-project/.agent/workflows/` |
| New skills | `content/starter-kit/skills/` |
| New agents | `content/starter-kit/agents/` |
| Curriculum | `content/getting-started/` |
| Reference docs | `content/reference/` |

## Commit Format

```
type: description

feat: add new /myworkflow slash command
fix: correct Windows path handling in CLI
docs: update README for v2.0
```

## Release Process

Releases are automated via GitHub Actions. Just bump the version in `package.json` and push to `main`.
