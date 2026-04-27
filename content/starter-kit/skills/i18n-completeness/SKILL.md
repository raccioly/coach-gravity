---
name: i18n-completeness
description: Internationalization completeness checker that ensures all user-facing text is translated across all supported locales. Activate when auditing i18n coverage, checking internationalization completeness, finding missing translations, detecting hardcoded strings, or verifying translation key consistency across locales.
tools: Read, Grep, Glob, Bash
---

# i18n Completeness

> No hardcoded strings. Every key in every language. Non-English speakers deserve quality translations.

## 1. Philosophy

| Principle | Meaning |
|-----------|---------|
| **No hardcoded strings** | All text must go through i18n |
| **Complete coverage** | Every key in every language |
| **Consistency** | Same terminology across locales |
| **User respect** | Non-English speakers deserve quality translations |

---

## 2. Supported Locales

| Locale | Path | Status |
|--------|------|--------|
| English | `frontend/src/i18n/locales/en/` | Primary |
| Spanish | `frontend/src/i18n/locales/es/` | Required |
| Portuguese | `frontend/src/i18n/locales/pt/` | Required |

---

## 3. Audit - Find Translation Issues

### 1. Find Hardcoded Strings
```bash
# Find potential hardcoded text in TSX files
grep -rn ">[A-Z][a-z].*<" frontend/src/components --include="*.tsx" | \
  grep -v "{t(" | grep -v "className" | head -20
```

### 2. Find Missing Translation Keys
```bash
# Extract keys from en, check if they exist in es/pt
for key in $(grep -roh "\"[a-z]*\.[a-z]*\":" frontend/src/i18n/locales/en/*.json | tr -d '":' | sort -u); do
  grep -q "$key" frontend/src/i18n/locales/es/*.json || echo "ES missing: $key"
  grep -q "$key" frontend/src/i18n/locales/pt/*.json || echo "PT missing: $key"
done
```

### 3. Find Unused Keys
```bash
# Find translation keys not used in code
for key in $(grep -roh "\"[a-z]*\.[a-z]*\"" frontend/src/i18n/locales/en/*.json | tr -d '"' | head -20); do
  grep -rq "$key" frontend/src/components || echo "Unused: $key"
done
```

---

## 4. Report

```markdown
## Translation Report

### Coverage Summary
| Locale | Keys | Complete |
|--------|------|----------|
| en | X | Primary |
| es | X | X missing |
| pt | X | X missing |

### Hardcoded Strings Found
| File | Line | Text |
|------|------|------|
| [file] | [line] | [text] |

### Missing Translations
| Key | Missing In |
|-----|------------|
| [key] | es, pt |

### Unused Keys (Can Remove)
| Key | File |
|-----|------|
| [key] | [locale file] |
```

---

## 5. Fix - Add Missing Translations

### Pattern for Adding Keys
```tsx
// Component
const { t } = useTranslation();
<span>{t('section.keyName')}</span>

// en/common.json
{ "section": { "keyName": "English text" } }

// es/common.json
{ "section": { "keyName": "Texto en espanol" } }

// pt/common.json
{ "section": { "keyName": "Texto em portugues" } }
```

---

## 6. Journal

Before starting, read `.agent/translator.md` (create if missing).

**Only journal important learnings:**
```markdown
## YYYY-MM-DD - [Title]
**Issue:** [i18n issue found]
**Pattern:** [How to avoid in future]
```
