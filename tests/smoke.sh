#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
test -f README.md
test -f AGENTS.md
test -d docs-canonical
test -f docs-canonical/ARCHITECTURE.md || test -f docs-canonical/REQUIREMENTS.md
echo "smoke: coach-gravity packaging OK"
