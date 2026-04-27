---
description: Set up enterprise quality infrastructure for any new project — CI gates, security lint, Jules scheduled tasks, Playwright, Lighthouse
---

# Quality Setup Workflow

Run this once per new project to install the full enterprise quality stack.

## Prerequisites
- Node.js project with `package.json`
- GitLab CI or GitHub Actions configured
- Jules CLI installed and authenticated (`sudo npm install -g @google/jules && jules login`)
- Jules GitHub App installed on the repo

---

## Step 1: Install Security Lint Plugin

// turbo
```bash
npm install --save-dev eslint-plugin-security
```

Update ESLint config to include `security.configs.recommended`. Example for flat config:
```javascript
import security from 'eslint-plugin-security';
// Add security.configs.recommended to defineConfig array
```

## Step 2: Add CI Quality Gates

Add these stages to `.gitlab-ci.yml` (or equivalent GitHub Actions):

```yaml
stages:
  - quality
  - deploy

lint:
  stage: quality
  image: node:22-alpine
  only: [dev, merge_requests]
  script:
    - npm ci
    - npm run lint
    - npx tsc --noEmit

test:
  stage: quality
  image: node:22-alpine
  only: [dev, merge_requests]
  script:
    - npm ci
    - npm run test

security-audit:
  stage: quality
  image: node:22-alpine
  only: [dev, merge_requests]
  allow_failure: true
  script:
    - npm audit --audit-level=high
```

Ensure `deploy` stage uses `needs: [lint, test]` to gate on quality.

## Step 3: Create Preflight Workflow

Create `.agent/workflows/preflight.md` for the project with these checks:
1. TypeScript build (`npx tsc --noEmit`)
2. Test suite (`npm run test`)
3. ESLint with security rules (`npm run lint`)
4. Dependency audit (`npm audit --audit-level=high`)
5. Protected file monitoring (env files, auth config, CI config)

## Step 4: Install Playwright (Optional)

// turbo
```bash
npm install --save-dev @playwright/test
npx playwright install chromium
```

Create `e2e/` directory with spec files for critical user flows.

## Step 5: Install Lighthouse CI (Optional)

// turbo
```bash
npm install --save-dev @lhci/cli
```

## Step 6: Fire Jules Quality Tasks

Verify the repo is connected:
// turbo
```bash
jules remote list --repo
```

Then run the `/jules` workflow to fire all quality tasks via CLI:
```
/jules
```

This will run all 15 quality prompts (security, testing, deps, performance, UX, observability) via `jules new` and open PRs for each.
