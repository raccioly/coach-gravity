---
name: nextjs-patterns
description: Next.js App Router patterns, server/client component split, Auth.js integration, and API route conventions. Use when building or modifying any Next.js application.
---

# Next.js App Router Patterns

Standard patterns for Next.js projects using the App Router (app directory). These patterns apply to ALL Next.js projects.

## Instructions

1. **Before creating any component**, decide: Server or Client? Check `examples/` for reference
2. **For API routes**, follow the Zod validation pattern in `examples/api-route.ts`
3. **For authentication**, use the Auth.js patterns in `examples/auth-pattern.ts`

## Server vs Client Decision Tree

```
Does the component need:
  ├── useState, useEffect, onClick → "use client"
  ├── useSession (next-auth) → "use client"
  ├── Browser APIs (window, localStorage) → "use client"
  ├── Only data fetching → Server Component (default)
  ├── Only rendering props → Server Component (default)
  └── Both? → Split into Server wrapper + Client child
```

## Hard Rules

1. **Default to Server Components** — only add `"use client"` when needed
2. **Never import server-only code in client components** (database, fs, secrets)
3. **Always use `loading.tsx`** for page-level loading states
4. **Always use `error.tsx`** for page-level error boundaries
5. **API routes validate all inputs with Zod** before processing
6. **Use `redirect()` for server-side redirects**, `useRouter().push()` for client-side
7. **Dynamic params use `Promise<>` wrapper** in Next.js 15+: `params: Promise<{ slug: string }>`

## File Structure Convention

```
app/
├── layout.tsx          # Root layout (server)
├── page.tsx            # Home page (server)
├── loading.tsx         # Root loading UI
├── error.tsx           # Root error boundary ("use client")
├── globals.css         # Global styles
├── api/
│   └── [resource]/
│       └── route.ts    # API handlers (GET, POST, PUT, DELETE)
├── [feature]/
│   ├── page.tsx        # Feature page (server if possible)
│   ├── layout.tsx      # Feature layout (if needed)
│   └── components/     # Feature-specific client components
```

## Auto-Clone to Project

When you first detect this project uses Next.js:
1. Create `.agent/skills/nextjs-patterns/` in the project root
2. Copy this SKILL.md as the base
3. Read the project's `next.config.js`, `app/layout.tsx`, and routing structure
4. Append a `## Project-Specific` section with the discovered routes, middleware, and auth configuration
5. Inform the user: "I've set up the local nextjs-patterns skill with your project's routing and auth patterns."
