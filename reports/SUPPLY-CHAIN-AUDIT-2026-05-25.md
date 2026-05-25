# Supply-Chain Security Audit Report - 2026-05-25

## Phase 1: Known-Bad Packages
- Scan all lockfiles for known-malicious packages.
- **Finding:** No lockfiles found (`package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`, etc.). No known-bad packages found.
- **Severity:** INFO

## Phase 2: IOCs on Disk
- Search for worm loaders, C2 domains, persistence, and Git artifacts.
- **Finding:** No IOCs found on disk.
- **Severity:** INFO

## Phase 3: Slopsquatting
- Flag packages with <1,000 weekly downloads named like a popular package, added in AI-authored commits, or phantom imports.
- **Finding:** No direct dependencies found in `package.json`.
- **Severity:** INFO

## Phase 4: Freshness Violations
- Flag packages published recently and floating version ranges.
- **Finding:** No dependencies found in `package.json`.
- **Severity:** INFO

## Phase 5: Install-Script Exposure
- Check for `preinstall`/`postinstall` hooks, verify `.npmrc` has `ignore-scripts=true`, and count `hasInstallScript` in lockfile.
- **Finding:** No `preinstall`/`postinstall` hooks in `package.json`. `.npmrc` correctly has `ignore-scripts=true`. No lockfiles found.
- **Severity:** INFO

## Phase 6: CI/CD Attack Surface
- Check `.github/workflows/*.yml` for `pull_request_target`, third-party actions not pinned to commit SHA, `secrets.*` exposed in PR workflows, missing `permissions:` block.
- **Finding:** Third-party actions not pinned to commit SHA:
  - `actions/checkout@v4` in `release.yml`
  - `actions/setup-node@v4` in `release.yml`
  - `google/osv-scanner-action/.github/workflows/osv-scanner-reusable-pr.yml@v2.3.8` in `supply-chain.yml`
  - `google/osv-scanner-action/.github/workflows/osv-scanner-reusable.yml@v2.3.8` in `supply-chain.yml`
- **Severity:** HIGH
