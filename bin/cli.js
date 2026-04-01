#!/usr/bin/env node

/**
 * Coach Gravity CLI Installer
 *
 * Usage:
 *   npx coach-gravity install     — Full setup (workflows, skill, DocGuard, configs)
 *   npx coach-gravity update      — Update existing installation (preserves configs)
 *   npx coach-gravity init        — Set up per-project files in current directory
 *   npx coach-gravity uninstall   — Remove Coach Gravity from global config
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const os = require("os");

// ── Cross-platform home directory detection ──────────────────────────────
const HOME = os.homedir();
if (!HOME) {
  console.error("❌ Could not determine home directory.");
  process.exit(1);
}

const IS_WINDOWS = process.platform === "win32";

const GEMINI_DIR = path.join(HOME, ".gemini");
const ANTIGRAVITY_DIR = path.join(GEMINI_DIR, "antigravity");
const GLOBAL_WORKFLOWS_DIR = path.join(ANTIGRAVITY_DIR, "global_workflows");
const GLOBAL_SKILLS_DIR = path.join(ANTIGRAVITY_DIR, "skills");
const SKILL_DIR = path.join(GLOBAL_SKILLS_DIR, "coach-gravity");

const CONTENT_DIR = path.join(__dirname, "..", "content");

const command = process.argv[2] || "install";

function log(msg) {
  console.log(`  ${msg}`);
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.name === ".DS_Store") continue;
    if (entry.name === "Thumbs.db") continue;
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function copyFile(src, dest) {
  const destDir = path.dirname(dest);
  fs.mkdirSync(destDir, { recursive: true });
  fs.copyFileSync(src, dest);
}

function countFiles(dir, ext) {
  if (!fs.existsSync(dir)) return 0;
  let count = 0;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isFile() && entry.name.endsWith(ext)) count++;
    if (entry.isDirectory()) {
      count += countFiles(path.join(dir, entry.name), ext);
    }
  }
  return count;
}

// ── Cross-platform command detection ─────────────────────────────────────
function commandExists(cmd) {
  try {
    if (IS_WINDOWS) {
      execSync(`where ${cmd}`, { stdio: "ignore" });
    } else {
      execSync(`command -v ${cmd}`, { stdio: "ignore" });
    }
    return true;
  } catch {
    return false;
  }
}

// ── Safe config install — never overwrite existing files ─────────────────
function installGlobalConfigs() {
  log("📋 Installing global config files...");
  const globalDir = path.join(CONTENT_DIR, "starter-kit", "global");
  const files = ["GEMINI.md", "CLAUDE.md", "agreement.md"];
  let installed = 0;
  let skipped = 0;
  for (const file of files) {
    const src = path.join(globalDir, file);
    const dest = path.join(GEMINI_DIR, file);
    if (!fs.existsSync(src)) continue;

    if (fs.existsSync(dest)) {
      skipped++;
      log(`  ⏭️  ${file} already exists — keeping your version`);
    } else {
      copyFile(src, dest);
      installed++;
    }
  }
  if (installed > 0) {
    log(`  ✅ ${installed} config files installed to ${GEMINI_DIR}`);
  }
  if (skipped > 0) {
    log(
      `  ℹ️  ${skipped} config files preserved (use 'npx coach-gravity install --force' to overwrite)`
    );
  }
  if (installed === 0 && skipped === 0) {
    log("  ⚠️ No config sources found — skipping");
  }
}

// ── Force config install — overwrites existing files (opt-in) ────────────
function installGlobalConfigsForce() {
  log("📋 Installing global config files (force)...");
  const globalDir = path.join(CONTENT_DIR, "starter-kit", "global");
  const files = ["GEMINI.md", "CLAUDE.md", "agreement.md"];
  let installed = 0;
  for (const file of files) {
    const src = path.join(globalDir, file);
    const dest = path.join(GEMINI_DIR, file);
    if (fs.existsSync(src)) {
      // Back up existing file before overwriting
      if (fs.existsSync(dest)) {
        const backupPath = dest + ".backup";
        fs.copyFileSync(dest, backupPath);
        log(`  📦 Backed up existing ${file} → ${file}.backup`);
      }
      copyFile(src, dest);
      installed++;
    }
  }
  log(`  ✅ ${installed} config files installed to ${GEMINI_DIR}`);
}

function installGlobalWorkflows() {
  log("🔧 Installing global workflows...");
  const workflowSrc = path.join(
    CONTENT_DIR,
    "starter-kit",
    "per-project",
    ".agent",
    "workflows"
  );
  fs.mkdirSync(GLOBAL_WORKFLOWS_DIR, { recursive: true });
  if (!fs.existsSync(workflowSrc)) {
    log("  ⚠️ Workflow source not found — skipping");
    return;
  }
  const files = fs
    .readdirSync(workflowSrc)
    .filter((f) => f.endsWith(".md"));
  for (const file of files) {
    fs.copyFileSync(
      path.join(workflowSrc, file),
      path.join(GLOBAL_WORKFLOWS_DIR, file)
    );
  }
  log(`  ✅ ${files.length} workflows installed to ${GLOBAL_WORKFLOWS_DIR}`);
}

function installSkill() {
  log("🧠 Installing Coach Gravity skill...");
  fs.mkdirSync(SKILL_DIR, { recursive: true });

  // Copy curriculum and reference content into the skill
  const contentDirs = [
    "getting-started",
    "reference",
    "project-planning",
    "starter-kit",
  ];
  for (const dir of contentDirs) {
    const src = path.join(CONTENT_DIR, dir);
    if (fs.existsSync(src)) {
      copyDir(src, path.join(SKILL_DIR, dir));
    }
  }

  // Create the SKILL.md entry point
  const skillMd = `---
name: coach-gravity
description: AI-assisted coaching toolkit that teaches non-programmers how to
  build real software. Type /coach-gravity to start the guided onboarding.
---

# Coach Gravity Skill

## User Input

\`\`\`text
$ARGUMENTS
\`\`\`

## Outline

You are Coach Gravity — a patient, encouraging AI coaching agent that teaches
non-programmers how to build real software using Antigravity.

Follow the guided onboarding workflow:

1. Read and present content from \`getting-started/phase-0-trust-and-setup.md\`
2. Check prerequisites (Node.js, Git)
3. Guide the learner through building their first app (Phase 1)
4. Progressively teach Phases 2–8 at the learner's pace

**Key principles:**
- Assume ZERO prior technical knowledge
- Use plain language (Flesch-Kincaid grade 8–10)
- Encourage and celebrate every accomplishment
- Never gatekeep — guide, explain, and support
- If the learner is confused, use analogies and real-world comparisons

**Available resources:**
- \`getting-started/\` — 9-phase curriculum (Phase 0–8)
- \`reference/glossary.md\` — Technical term definitions
- \`reference/cheat-sheet.md\` — Quick command reference
- \`reference/troubleshooting.md\` — Common issues and fixes
- \`reference/slash-commands.md\` — All 25+ slash commands explained
- \`project-planning/project-questionnaire.md\` — Project planning template
`;

  fs.writeFileSync(path.join(SKILL_DIR, "SKILL.md"), skillMd);
  const totalFiles = countFiles(SKILL_DIR, ".md");
  log(`  ✅ Coach Gravity skill installed (${totalFiles} files) to ${SKILL_DIR}`);
}

// ── Cross-platform DocGuard detection ────────────────────────────────────
function installDocGuard() {
  log("🛡️ Checking DocGuard...");
  if (commandExists("docguard")) {
    log("  ✅ DocGuard already installed");
  } else {
    log("  📦 Installing DocGuard CLI...");
    try {
      execSync("npm i -g docguard-cli", { stdio: "inherit" });
      log("  ✅ DocGuard installed");
    } catch (e) {
      log("  ⚠️ Could not install DocGuard. Run manually: npm i -g docguard-cli");
    }
  }
}

// ── Per-project init command ─────────────────────────────────────────────
function init() {
  console.log("");
  console.log("  ╔═══════════════════════════════════════════╗");
  console.log("  ║     Coach Gravity — Project Setup         ║");
  console.log("  ║   Set up AI agent config for this project ║");
  console.log("  ╚═══════════════════════════════════════════╝");
  console.log("");

  const cwd = process.cwd();
  let installed = 0;
  let skipped = 0;

  // 1. Install AGENT-REFERENCE.md
  const agentRefSrc = path.join(
    CONTENT_DIR,
    "starter-kit",
    "per-project",
    "AGENT-REFERENCE.md"
  );
  const agentRefDest = path.join(cwd, "AGENT-REFERENCE.md");
  if (fs.existsSync(agentRefSrc)) {
    if (fs.existsSync(agentRefDest)) {
      skipped++;
      log("⏭️  AGENT-REFERENCE.md already exists — keeping yours");
    } else {
      copyFile(agentRefSrc, agentRefDest);
      installed++;
      log("✅ AGENT-REFERENCE.md created — fill in your project details");
    }
  }

  // 2. Create .agent/workflows/ directory with start.md
  const agentWorkflowDir = path.join(cwd, ".agent", "workflows");
  const startSrc = path.join(__dirname, "..", ".agent", "workflows", "start.md");
  const startDest = path.join(agentWorkflowDir, "start.md");
  if (fs.existsSync(startSrc)) {
    if (fs.existsSync(startDest)) {
      skipped++;
      log("⏭️  .agent/workflows/start.md already exists — keeping yours");
    } else {
      fs.mkdirSync(agentWorkflowDir, { recursive: true });
      copyFile(startSrc, startDest);
      installed++;
      log("✅ .agent/workflows/start.md installed — type /start to begin");
    }
  }

  // 3. Create docs-canonical directory structure (if missing)
  const docsDir = path.join(cwd, "docs-canonical");
  if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir, { recursive: true });
    fs.writeFileSync(
      path.join(docsDir, "README.md"),
      "# Canonical Documentation\n\n> Source of truth for design intent. Read-only for AI agents.\n\nAdd your architecture, data model, and product docs here.\n"
    );
    installed++;
    log("✅ docs-canonical/ directory created");
  } else {
    skipped++;
    log("⏭️  docs-canonical/ already exists — keeping yours");
  }

  console.log("");
  if (installed > 0) {
    log(`🎉 ${installed} project files set up!`);
  }
  if (skipped > 0) {
    log(`ℹ️  ${skipped} files already existed and were preserved`);
  }
  console.log("");
  log("Next steps:");
  log("  1. Edit AGENT-REFERENCE.md with your project details");
  log("  2. Type /start in the chat to begin building");
  console.log("");
}

// ── Main commands ────────────────────────────────────────────────────────

function install() {
  const forceConfigs = process.argv.includes("--force");

  console.log("");
  console.log("  ╔═══════════════════════════════════════════╗");
  console.log("  ║       Coach Gravity Installer             ║");
  console.log("  ║   Learn to build software with AI         ║");
  console.log("  ╚═══════════════════════════════════════════╝");
  console.log("");

  if (forceConfigs) {
    installGlobalConfigsForce();
  } else {
    installGlobalConfigs();
  }
  installGlobalWorkflows();
  installSkill();
  installDocGuard();

  console.log("");
  log("🎉 Coach Gravity installed!");
  console.log("");
  log("To get started:");
  log("  1. Open any project folder in your AI coding agent");
  log("  2. Run: npx coach-gravity init");
  log("  3. Type /start in the chat");
  console.log("");
  log("Or type /coach-gravity in any project to begin.");
  console.log("");
}

function update() {
  console.log("");
  log("🔄 Updating Coach Gravity...");
  installGlobalWorkflows();
  installSkill();
  console.log("");
  log("✅ Updated! Global configs were NOT overwritten.");
  log("   To reset configs: npx coach-gravity install --force");
  console.log("");
}

function uninstall() {
  console.log("");
  log("🗑️ Removing Coach Gravity...");

  if (fs.existsSync(SKILL_DIR)) {
    fs.rmSync(SKILL_DIR, { recursive: true, force: true });
    log("  ✅ Removed skill from " + SKILL_DIR);
  }

  // Don't remove global workflows — other tools may use them
  log("  ℹ️ Global workflows were NOT removed (shared with other tools)");
  log("  ℹ️ Global configs were NOT removed (shared with other tools)");
  console.log("");
  log("✅ Coach Gravity uninstalled.");
  console.log("");
}

switch (command) {
  case "install":
    install();
    break;
  case "update":
    update();
    break;
  case "init":
    init();
    break;
  case "uninstall":
    uninstall();
    break;
  default:
    console.log("");
    console.log("  Coach Gravity — AI Coaching Toolkit");
    console.log("");
    console.log("  Usage:");
    console.log("    npx coach-gravity install         Full global setup");
    console.log("    npx coach-gravity install --force  Reset global configs to defaults");
    console.log("    npx coach-gravity init             Set up current project");
    console.log("    npx coach-gravity update           Update workflows & skill");
    console.log("    npx coach-gravity uninstall        Remove Coach Gravity");
    console.log("");
    break;
}
