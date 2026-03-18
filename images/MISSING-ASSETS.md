# 📸 Missing Assets Checklist

> Everything marked `PLACEHOLDER` in the phase files needs to be created. Here's exactly what's needed, where it goes, and how to create it.

---

## Screenshots Needed

| # | What to Screenshot | Filename | Used In | How to Create |
|---|---|---|---|---|
| 1 | Terminal showing `node --version` output | `terminal-node-version.png` | Phase 0 | Open terminal, type `node --version`, screenshot the result |
| 2 | `/start` workflow running successfully | `start-workflow-running.png` | Phase 0 | Run `/start` in Antigravity, screenshot the welcome message + tool check |
| 3 | Antigravity plan approval for expense tracker | `plan-approval-expense-tracker.png` | Phase 1 | Paste the expense tracker prompt, screenshot the plan that appears |
| 4 | Running expense tracker at localhost | `expense-tracker-dashboard.png` | Phase 1 | Build the expense tracker, screenshot the dashboard in the browser |

### How to Take Screenshots

**Windows:**
- `Win + Shift + S` → drag to select area → saves to clipboard
- Paste into Paint or any editor → Save As PNG

**Mac:**
- `Cmd + Shift + 4` → drag to select area → saves to Desktop
- Rename and move to `images/` folder

### Screenshot Best Practices
- **Crop** to just the relevant area (no desktop background)
- **Use a clean browser** (no extra tabs, bookmarks bar hidden)
- **Dark mode preferred** (matches the course aesthetic)
- **1200px wide minimum** for readability
- **Save as PNG** (not JPEG — clearer text)

---

## Videos Needed

| # | Topic | Covers | How to Create |
|---|---|---|---|
| 1 | Setup & First App | Phases 0-1 | Google NotebookLM (see `delivery/video-guide.md`) |
| 2 | What Just Happened | Phase 2 | Google NotebookLM |
| 3 | Talking to AI | Phase 3 | Google NotebookLM |
| 4 | Planning Your Project | Phase 4 | Google NotebookLM |
| 5 | Building Your Project | Phase 5 | Google NotebookLM |

---

## Where Placeholders Exist

Search for `<!-- PLACEHOLDER:` in the markdown files to find all locations:

```bash
grep -rn "PLACEHOLDER" getting-started/
```

Current placeholder locations:
1. `phase-0-trust-and-setup.md` — terminal node version screenshot
2. `phase-0-trust-and-setup.md` — /start workflow running
3. `phase-1-your-first-app.md` — plan approval prompt
4. `phase-1-your-first-app.md` — running expense tracker dashboard

---

## After Creating Assets

1. **Save screenshots** to `images/` folder with the filenames above
2. **Replace placeholders** in the phase files:
   - Change `<!-- PLACEHOLDER: description -->` to `![description](../images/filename.png)`
3. **Update SCREENSHOT-CHECKLIST.md** with the new screenshots
4. **Save videos** to `videos/` folder (or upload to cloud — see video-guide.md)
