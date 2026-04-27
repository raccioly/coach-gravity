---
name: ui-design-system
description: Dark-first aesthetic, oklch colors, glass morphism, micro-animations, and design IMPLEMENTATION. Use when building UI components, page layouts, or styling with the premium design system. For design PRINCIPLES (UX psychology, color theory, audience analysis), see frontend-design.
---

# UI Design System

All UI code MUST follow this premium, dark-first design system. The aesthetic is "Premium Fintech" — sleek, professional, and visually stunning. Users should be WOWed at first glance.

## Core Principles

1. **Dark-First**: Deep navy/midnight backgrounds, never plain black or white
2. **oklch Colors**: ALWAYS use oklch for colors — never hex, rgb, or named colors
3. **Glass Morphism**: Frosted glass cards with subtle borders and blur
4. **Micro-Animations**: Fade-in, float, scale — every interaction should feel alive
5. **No Emojis**: NEVER use emoji characters in UI. Use styled icon containers or the `Icon` component

## Instructions

1. **Before styling anything**, review `examples/color-palette.css` for the approved color tokens
2. **For any new component**, check `examples/glass-card.css` for the standard card/badge/progress patterns
3. **For icons**, check `examples/icon-component.tsx` for the styled icon container pattern
4. **For layouts**, use the standard page structure: sticky nav → content with max-width → footer

## Color Rules

### ❌ Never Do This
```css
color: red;
color: #ff0000;
color: rgb(255, 0, 0);
background: white;
```

### ✅ Always Do This
```css
color: oklch(0.63 0.22 25);        /* danger red */
color: oklch(0.72 0.19 152);       /* success green */
background: oklch(0.13 0.02 264);  /* deep background */
```

## Typography

- Headings: `font-weight: 700-800`, use `gradient-text` class for emphasis
- Body: `color: var(--color-text-secondary)` — never pure white
- Muted: `color: var(--color-text-muted)` — for timestamps, labels
- Font: System defaults or Google Fonts (Inter, Outfit)

## Animation Classes

Always include these CSS animations in any new project:

```css
@keyframes fade-in    { from { opacity: 0 } to { opacity: 1 } }
@keyframes fade-in-up { from { opacity: 0; transform: translateY(10px) } to { opacity: 1; transform: translateY(0) } }
@keyframes float      { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-6px) } }
```

## Auto-Clone to Project

When you first detect this project has no local design system:
1. Create `.agent/skills/ui-design-system/` in the project root
2. Copy this SKILL.md as the base
3. Read the project's CSS files and component library
4. Append a `## Project-Specific` section with the discovered color tokens and component patterns
5. Inform the user: "I've set up the local ui-design-system skill with your project's design tokens."

> **See also: `frontend-design`** — for design PRINCIPLES: UX psychology, color theory, audience analysis, layout strategy, and design thinking.
