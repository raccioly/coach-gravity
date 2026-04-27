---
name: nextjs-react-expert
description: Next.js App Router patterns and React performance optimization from Vercel Engineering. Use when building or modifying any Next.js application, choosing server vs client components, designing API routes, integrating Auth.js, optimizing performance, eliminating waterfalls, reducing bundle size, or reviewing code for performance issues.
tools: Read, Write, Edit, Glob, Grep, Bash
---

# Next.js & React Expert

> **From Vercel Engineering** - App Router patterns + 57 optimization rules prioritized by impact
> **Philosophy:** Default to Server Components, eliminate waterfalls first, optimize bundles second, then micro-optimize.

---

## App Router Patterns

Standard patterns for Next.js projects using the App Router (app directory).

### Instructions

1. **Before creating any component**, decide: Server or Client? Check the decision tree below
2. **For API routes**, follow the Zod validation pattern
3. **For authentication**, use Auth.js patterns

### Server vs Client Decision Tree

```
Does the component need:
  ├── useState, useEffect, onClick → "use client"
  ├── useSession (next-auth) → "use client"
  ├── Browser APIs (window, localStorage) → "use client"
  ├── Only data fetching → Server Component (default)
  ├── Only rendering props → Server Component (default)
  └── Both? → Split into Server wrapper + Client child
```

### Hard Rules

1. **Default to Server Components** — only add `"use client"` when needed
2. **Never import server-only code in client components** (database, fs, secrets)
3. **Always use `loading.tsx`** for page-level loading states
4. **Always use `error.tsx`** for page-level error boundaries
5. **API routes validate all inputs with Zod** before processing
6. **Use `redirect()` for server-side redirects**, `useRouter().push()` for client-side
7. **Dynamic params use `Promise<>` wrapper** in Next.js 15+: `params: Promise<{ slug: string }>`

### File Structure Convention

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

### Auto-Clone to Project

When you first detect this project uses Next.js:
1. Create `.agent/skills/nextjs-react-expert/` in the project root
2. Copy the App Router patterns as the base
3. Read the project's `next.config.js`, `app/layout.tsx`, and routing structure
4. Append a `## Project-Specific` section with the discovered routes, middleware, and auth configuration
5. Inform the user: "I've set up the local nextjs-react-expert skill with your project's routing and auth patterns."

---

## 🎯 Selective Reading Rule (MANDATORY)

**Read ONLY sections relevant to your task!** Check the content map below and load what you need.

> 🔴 **For performance reviews: Start with CRITICAL sections (1-2), then move to HIGH/MEDIUM.**

---

## 📑 Content Map

| File                                    | Impact             | Rules    | When to Read                                                    |
| --------------------------------------- | ------------------ | -------- | --------------------------------------------------------------- |
| `1-async-eliminating-waterfalls.md`     | 🔴 **CRITICAL**    | 5 rules  | Slow page loads, sequential API calls, data fetching waterfalls |
| `2-bundle-bundle-size-optimization.md`  | 🔴 **CRITICAL**    | 5 rules  | Large bundle size, slow Time to Interactive, First Load issues  |
| `3-server-server-side-performance.md`   | 🟠 **HIGH**        | 7 rules  | Slow SSR, API route optimization, server-side waterfalls        |
| `4-client-client-side-data-fetching.md` | 🟡 **MEDIUM-HIGH** | 4 rules  | Client data management, SWR patterns, deduplication             |
| `5-rerender-re-render-optimization.md`  | 🟡 **MEDIUM**      | 12 rules | Excessive re-renders, React performance, memoization            |
| `6-rendering-rendering-performance.md`  | 🟡 **MEDIUM**      | 9 rules  | Rendering bottlenecks, virtualization, image optimization       |
| `7-js-javascript-performance.md`        | ⚪ **LOW-MEDIUM**  | 12 rules | Micro-optimizations, caching, loop performance                  |
| `8-advanced-advanced-patterns.md`       | 🔵 **VARIABLE**    | 3 rules  | Advanced React patterns, useLatest, init-once                   |
| `9-cache-components.md`                | 🔴 **CRITICAL**    | 4 sections | **Next.js 16+ Only**: `use cache`, `cacheLife`, PPR, `cacheTag` |

**Total: 57 rules across 8 categories**

---

## 🚀 Quick Decision Tree

**What's your performance issue?**

```
🐌 Slow page loads / Long Time to Interactive
  → Read Section 1: Eliminating Waterfalls
  → Read Section 2: Bundle Size Optimization

📦 Large bundle size (> 200KB)
  → Read Section 2: Bundle Size Optimization
  → Check: Dynamic imports, barrel imports, tree-shaking

🖥️ Slow Server-Side Rendering
  → Read Section 3: Server-Side Performance
  → Check: Parallel data fetching, streaming

🔄 Too many re-renders / UI lag
  → Read Section 5: Re-render Optimization
  → Check: React.memo, useMemo, useCallback

🎨 Rendering performance issues
  → Read Section 6: Rendering Performance
  → Check: Virtualization, layout thrashing

🌐 Client-side data fetching problems
  → Read Section 4: Client-Side Data Fetching
  → Check: SWR deduplication, localStorage

✨ Need advanced patterns
  → Read Section 8: Advanced Patterns

🚀 **Next.js 16+ Performance (Caching & PPR)**
  → Read Section 9: Cache Components
```

---

## 📊 Impact Priority Guide

**Use this order when doing comprehensive optimization:**

```
1️⃣ CRITICAL (Biggest Gains - Do First):
   ├─ Section 1: Eliminating Waterfalls
   │  └─ Each waterfall adds full network latency (100-500ms+)
   └─ Section 2: Bundle Size Optimization
      └─ Affects Time to Interactive and Largest Contentful Paint

2️⃣ HIGH (Significant Impact - Do Second):
   └─ Section 3: Server-Side Performance
      └─ Eliminates server-side waterfalls, faster response times

3️⃣ MEDIUM (Moderate Gains - Do Third):
   ├─ Section 4: Client-Side Data Fetching
   ├─ Section 5: Re-render Optimization
   └─ Section 6: Rendering Performance

4️⃣ LOW (Polish - Do Last):
   ├─ Section 7: JavaScript Performance
   └─ Section 8: Advanced Patterns

🔥 **MODERN (Next.js 16+):**
   └─ Section 9: Cache Components (Replaces most traditional revalidation)
```

---

## 🔗 Related Skills

| Need                    | Skill                             |
| ----------------------- | --------------------------------- |
| API design patterns     | `@[skills/api-design]`            |
| Database optimization   | `@[skills/database-design]`       |
| Testing strategies      | `@[skills/testing-patterns]`      |
| UI/UX design principles | `@[skills/frontend-design]`       |
| TypeScript patterns     | `@[skills/typescript-expert]`     |
| Deployment & DevOps     | `@[skills/deployment-procedures]` |

---

## ✅ Performance Review Checklist

Before shipping to production:

**Critical (Must Fix):**

- [ ] No sequential data fetching (waterfalls eliminated)
- [ ] Bundle size < 200KB for main bundle
- [ ] No barrel imports in app code
- [ ] Dynamic imports used for large components
- [ ] Parallel data fetching where possible

**High Priority:**

- [ ] Server components used where appropriate
- [ ] API routes optimized (no N+1 queries)
- [ ] Suspense boundaries for data fetching
- [ ] Static generation used where possible

**Medium Priority:**

- [ ] Expensive computations memoized
- [ ] List rendering virtualized (if > 100 items)
- [ ] Images optimized with next/image
- [ ] No unnecessary re-renders

**Low Priority (Polish):**

- [ ] Hot path loops optimized
- [ ] RegExp patterns hoisted
- [ ] Property access cached in loops

---

## ❌ Anti-Patterns (Common Mistakes)

**DON'T:**

- ❌ Use sequential `await` for independent operations
- ❌ Import entire libraries when you need one function
- ❌ Use barrel exports (`index.ts` re-exports) in app code
- ❌ Skip dynamic imports for large components/libraries
- ❌ Fetch data in useEffect without deduplication
- ❌ Forget to memoize expensive computations
- ❌ Use client components when server components work

**DO:**

- ✅ Fetch data in parallel with `Promise.all()`
- ✅ Use dynamic imports: `const Comp = dynamic(() => import('./Heavy'))`
- ✅ Import directly: `import { specific } from 'library/specific'`
- ✅ Use Suspense boundaries for better UX
- ✅ Leverage React Server Components
- ✅ Measure performance before optimizing
- ✅ Use Next.js built-in optimizations (next/image, next/font)

---

## 🎯 How to Use This Skill

### For New Features:

1. Check **Section 1 & 2** while building (prevent waterfalls, keep bundle small)
2. Use server components by default (Section 3)
3. Apply memoization for expensive operations (Section 5)

### For Performance Reviews:

1. Start with **Section 1** (waterfalls = biggest impact)
2. Then **Section 2** (bundle size)
3. Then **Section 3** (server-side)
4. Finally other sections as needed

### For Debugging Slow Performance:

1. Identify the symptom (slow load, lag, etc.)
2. Use Quick Decision Tree above
3. Read relevant section
4. Apply fixes in priority order

---

## 📚 Learning Path

**Beginner (Focus on Critical):**
→ Section 1: Eliminating Waterfalls
→ Section 2: Bundle Size Optimization

**Intermediate (Add High Priority):**
→ Section 3: Server-Side Performance
→ Section 5: Re-render Optimization

**Advanced (Full Optimization):**
→ All sections + Section 8: Advanced Patterns

---

## 🔍 Validation Script

| Script                                 | Purpose                     | Command                                                      |
| -------------------------------------- | --------------------------- | ------------------------------------------------------------ |
| `scripts/react_performance_checker.py` | Automated performance audit | `python scripts/react_performance_checker.py <project_path>` |

---

## 📖 Section Details

### Section 1: Eliminating Waterfalls (CRITICAL)

**Impact:** Each waterfall adds 100-500ms+ latency
**Key Concepts:** Parallel fetching, Promise.all(), Suspense boundaries, preloading

### Section 2: Bundle Size Optimization (CRITICAL)

**Impact:** Directly affects Time to Interactive, Largest Contentful Paint
**Key Concepts:** Dynamic imports, tree-shaking, barrel import avoidance

### Section 3: Server-Side Performance (HIGH)

**Impact:** Faster server responses, better SEO
**Key Concepts:** Parallel server fetching, streaming, API route optimization

### Section 4: Client-Side Data Fetching (MEDIUM-HIGH)

**Impact:** Reduces redundant requests, better UX
**Key Concepts:** SWR deduplication, localStorage caching, event listeners

### Section 5: Re-render Optimization (MEDIUM)

**Impact:** Smoother UI, less wasted computation
**Key Concepts:** React.memo, useMemo, useCallback, component structure

### Section 6: Rendering Performance (MEDIUM)

**Impact:** Better rendering efficiency
**Key Concepts:** Virtualization, image optimization, layout thrashing

### Section 7: JavaScript Performance (LOW-MEDIUM)

**Impact:** Incremental improvements in hot paths
**Key Concepts:** Loop optimization, caching, RegExp hoisting

### Section 8: Advanced Patterns (VARIABLE)

**Impact:** Specific use cases
**Key Concepts:** useLatest hook, init-once patterns, event handler refs

---

## 🎓 Best Practices Summary

**Golden Rules:**

1. **Measure first** - Use React DevTools Profiler, Chrome DevTools
2. **Biggest impact first** - Waterfalls → Bundle → Server → Micro
3. **Don't over-optimize** - Focus on real bottlenecks
4. **Use platform features** - Next.js has optimizations built-in
5. **Think about users** - Real-world conditions matter

**Performance Mindset:**

- Every `await` in sequence = potential waterfall
- Every `import` = potential bundle bloat
- Every re-render = wasted computation (if unnecessary)
- Server components = less JavaScript to ship
- Measure, don't guess

---

**Source:** Vercel Engineering
**Date:** January 2026
**Version:** 1.0.0
**Total Rules:** 57 across 8 categories
