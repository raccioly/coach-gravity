# Supply-Chain Audit Report - 2026-05-18

## Phase 1: Known-Bad Packages
**Result:** INFO
No lockfiles (`package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`, `requirements*.txt`, `poetry.lock`, `pyproject.toml`) were found in the repository.

## Phase 2: IOCs on Disk
**Result:** INFO
- No worm loaders (`router_init.js`, `router_runtime.js`, `setup.mjs`) found in `node_modules/`.
- No C2 domains found in the codebase.
- No persistence mechanisms (`~/Library/LaunchAgents/com.user.gh-token-monitor.plist` or `~/.config/systemd/user/gh-token-monitor.service`) detected.
- No Git artifacts related to `shai-hulud` or commits by `claude <claude@users.noreply.github.com>`.

## Phase 3: Slopsquatting
**Result:** INFO
No direct dependencies defined in `package.json`. No phantom imports detected.

## Phase 4: Freshness Violations
**Result:** INFO
No dependencies to evaluate for freshness violations.

## Phase 5: Install-Script Exposure
**Result:** INFO
- No `preinstall`/`postinstall` hooks in `package.json`.
- `.npmrc` has `ignore-scripts=true`.
- No lockfile to check `hasInstallScript`.

## Phase 6: CI/CD Attack Surface
**Result:** HIGH
- **HIGH:** `.github/workflows/supply-chain.yml` uses a third-party action (`google/osv-scanner-action`) that is pinned to a tag (`@v2.3.8`) instead of a 40-char commit SHA.
- No `pull_request_target` combined with PR checkout.
- No `secrets.*` exposed in PR workflows.
- `permissions:` block is present in all workflows.

## Overall Findings
**Highest Severity:** HIGH

Action Required: Pin `google/osv-scanner-action` in `.github/workflows/supply-chain.yml` to a 40-character commit SHA as recommended by the audit guidelines.
