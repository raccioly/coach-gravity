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
const GLOBAL_AGENTS_DIR = path.join(ANTIGRAVITY_DIR, "agents");
const GLOBAL_SCRIPTS_DIR = path.join(ANTIGRAVITY_DIR, "scripts");
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
  fs.mkdirSync(path.join(CONTENT_DIR, "starter-kit", "per-project", ".agent", "workflows"), { recursive: true });
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
      path.join(path.join(CONTENT_DIR, "starter-kit", "per-project", ".agent", "workflows"), file)
    );
  }
  log(`  ✅ ${files.length} workflows installed to ${path.join(CONTENT_DIR, "starter-kit", "per-project", ".agent", "workflows")}`);
}

function installGlobalAgents() {
  log("🤖 Installing specialist agents...");
  const agentSrc = path.join(CONTENT_DIR, "starter-kit", "agents");
  fs.mkdirSync(path.join(CONTENT_DIR, "starter-kit", "agents"), { recursive: true });
  if (!fs.existsSync(agentSrc)) {
    log("  ⚠️ Agent source not found — skipping");
    return;
  }
  const files = fs.readdirSync(agentSrc).filter((f) => f.endsWith(".md"));
  for (const file of files) {
    fs.copyFileSync(
      path.join(agentSrc, file),
      path.join(path.join(CONTENT_DIR, "starter-kit", "agents"), file)
    );
  }
  log(`  ✅ ${files.length} agents installed to ${path.join(CONTENT_DIR, "starter-kit", "agents")}`);
}

function installGlobalSkills() {
  log("🧩 Installing domain skills...");
  const skillsSrc = path.join(CONTENT_DIR, "starter-kit", "skills");
  fs.mkdirSync(path.join(CONTENT_DIR, "starter-kit", "skills"), { recursive: true });
  if (!fs.existsSync(skillsSrc)) {
    log("  ⚠️ Skills source not found — skipping");
    return;
  }
  const dirs = fs
    .readdirSync(skillsSrc, { withFileTypes: true })
    .filter((d) => d.isDirectory());
  for (const dir of dirs) {
    copyDir(path.join(skillsSrc, dir.name), path.join(path.join(CONTENT_DIR, "starter-kit", "skills"), dir.name));
  }
  log(`  ✅ ${dirs.length} skills installed to ${path.join(CONTENT_DIR, "starter-kit", "skills")}`);
}

function installGlobalScripts() {
  log("📜 Installing validation scripts...");
  const scriptsSrc = path.join(CONTENT_DIR, "starter-kit", "scripts");
  fs.mkdirSync(GLOBAL_SCRIPTS_DIR, { recursive: true });
  if (!fs.existsSync(scriptsSrc)) {
    log("  ⚠️ Scripts source not found — skipping");
    return;
  }
  const files = fs.readdirSync(scriptsSrc).filter((f) => f.endsWith(".py"));
  for (const file of files) {
    fs.copyFileSync(
      path.join(scriptsSrc, file),
      path.join(GLOBAL_SCRIPTS_DIR, file)
    );
  }
  log(`  ✅ ${files.length} scripts installed to ${GLOBAL_SCRIPTS_DIR}`);
}

function installSystemExtras() {
  log("🗺️ Installing system files...");
  const globalDir = path.join(CONTENT_DIR, "starter-kit", "global");

  // SYSTEM-MAP.md
  const mapSrc = path.join(globalDir, "SYSTEM-MAP.md");
  const mapDest = path.join(ANTIGRAVITY_DIR, "SYSTEM-MAP.md");
  if (fs.existsSync(mapSrc)) {
    fs.copyFileSync(mapSrc, mapDest);
    log("  ✅ SYSTEM-MAP.md installed");
  }

  // GEMINI.md
  const geminiSrc = path.join(globalDir, "GEMINI.md");
  const geminiDest = path.join(ANTIGRAVITY_DIR, "GEMINI.md");
  if (fs.existsSync(geminiSrc)) {
    fs.copyFileSync(geminiSrc, geminiDest);
    log("  ✅ GEMINI.md installed");
  }

  // GATES.md
  const gatesSrc = path.join(globalDir, "GATES.md");
  const gatesDest = path.join(ANTIGRAVITY_DIR, "GATES.md");
  if (fs.existsSync(gatesSrc)) {
    fs.copyFileSync(gatesSrc, gatesDest);
    log("  ✅ GATES.md installed");
  }

  // CLAUDE.md (global)
  const claudeSrc = path.join(globalDir, "CLAUDE.md");
  const claudeHomeDir = path.join(HOME, ".claude");
  const claudeDest = path.join(claudeHomeDir, "CLAUDE.md");
  if (fs.existsSync(claudeSrc)) {
    if (!fs.existsSync(claudeHomeDir)) fs.mkdirSync(claudeHomeDir, { recursive: true });
    fs.copyFileSync(claudeSrc, claudeDest);
    log("  ✅ CLAUDE.md installed to ~/.claude/CLAUDE.md");
  }
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


  // 4. Copilot Support: .vscode/settings.json
  const vscodeDir = path.join(cwd, ".vscode");
  const settingsFile = path.join(vscodeDir, "settings.json");
  if (!fs.existsSync(vscodeDir)) fs.mkdirSync(vscodeDir, { recursive: true });
  let settings = {};
  if (fs.existsSync(settingsFile)) {
    try {
      settings = JSON.parse(fs.readFileSync(settingsFile, "utf8"));
    } catch (e) {}
  }
  settings["chat.agentSkillsLocations"] = settings["chat.agentSkillsLocations"] || {};
  settings["chat.agentSkillsLocations"][".github/skills/**"] = true;
  settings["chat.agentFilesLocations"] = settings["chat.agentFilesLocations"] || [];
  if (!settings["chat.agentFilesLocations"].includes(".github/agents")) {
    settings["chat.agentFilesLocations"].push(".github/agents");
  }
  fs.writeFileSync(settingsFile, JSON.stringify(settings, null, 2));
  installed++;
  log("✅ .vscode/settings.json configured for Copilot");

  // 5. Copilot Support: .github/copilot-instructions.md
  const githubDir = path.join(cwd, ".github");
  if (!fs.existsSync(githubDir)) fs.mkdirSync(githubDir, { recursive: true });
  const copilotSrc = path.join(CONTENT_DIR, "starter-kit", "global", "GEMINI.md");
  const copilotDest = path.join(githubDir, "copilot-instructions.md");
  if (fs.existsSync(copilotSrc)) {
    copyFile(copilotSrc, copilotDest);
    installed++;
    log("✅ .github/copilot-instructions.md created");
  }

  // 6. Copilot Support: Skills, Prompts, Agents
  const destSkillsDir = path.join(githubDir, "skills");
  if (!fs.existsSync(destSkillsDir)) fs.mkdirSync(destSkillsDir, { recursive: true });
  if (fs.existsSync(path.join(CONTENT_DIR, "starter-kit", "skills"))) {
    copyDir(path.join(CONTENT_DIR, "starter-kit", "skills"), destSkillsDir);
    installed++;
    log("✅ .github/skills/ populated with 58 skills");
  }

  const destPromptsDir = path.join(githubDir, "prompts");
  if (!fs.existsSync(destPromptsDir)) fs.mkdirSync(destPromptsDir, { recursive: true });
  if (fs.existsSync(path.join(CONTENT_DIR, "starter-kit", "per-project", ".agent", "workflows"))) {
    const workflows = fs.readdirSync(path.join(CONTENT_DIR, "starter-kit", "per-project", ".agent", "workflows")).filter(f => f.endsWith('.md') && f !== 'start.md');
    workflows.forEach(w => {
      const src = path.join(path.join(CONTENT_DIR, "starter-kit", "per-project", ".agent", "workflows"), w);
      const destName = w.replace('.md', '.prompt.md');
      const dest = path.join(destPromptsDir, destName);
      const c = fs.readFileSync(src, 'utf8');
      const yaml = `---\nmode: agent\ndescription: Anti-Gravity workflow for ${w.replace('.md', '')}\n---\n\n`;
      fs.writeFileSync(dest, yaml + c);
    });
    installed++;
    log("✅ .github/prompts/ populated with slash commands");
  }

  const destAgentsDir = path.join(githubDir, "agents");
  if (!fs.existsSync(destAgentsDir)) fs.mkdirSync(destAgentsDir, { recursive: true });
  if (fs.existsSync(path.join(CONTENT_DIR, "starter-kit", "agents"))) {
    const agents = fs.readdirSync(path.join(CONTENT_DIR, "starter-kit", "agents")).filter(f => f.endsWith('.md'));
    agents.forEach(a => {
      const src = path.join(path.join(CONTENT_DIR, "starter-kit", "agents"), a);
      const destName = a.replace('.md', '.agent.md');
      const dest = path.join(destAgentsDir, destName);
      let c = fs.readFileSync(src, 'utf8');
      if (!c.startsWith('---')) {
        const yaml = `---\nname: ${a.replace('.md', '')}\ndescription: Anti-Gravity specialist persona\n---\n\n`;
        c = yaml + c;
      }
      fs.writeFileSync(dest, c);
    });
    installed++;
    log("✅ .github/agents/ populated with specialist personas");
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
  console.log("  ║     Super Antigravity Installer            ║");
  console.log("  ║   Coach Gravity + Full Agent Toolkit       ║");
  console.log("  ╚═══════════════════════════════════════════╝");
  console.log("");

  if (forceConfigs) {
    installGlobalConfigsForce();
  } else {
    installGlobalConfigs();
  }
  installGlobalWorkflows();
  installGlobalAgents();
  installGlobalSkills();
  installSkill();
  installGlobalScripts();
  installSystemExtras();
  installDocGuard();

  console.log("");
  log("🎉 Super Antigravity installed!");
  console.log("");
  log("What you got:");
  log("  • 20 specialist agent personas");
  log("  • 58 domain knowledge skills");
  log("  • 35 slash command workflows");
  log("  • 4 validation scripts");
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
  log("🔄 Updating Super Antigravity...");
  installGlobalWorkflows();
  installGlobalAgents();
  installGlobalSkills();
  installSkill();
  installGlobalScripts();
  installSystemExtras();
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
