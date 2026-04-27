---
name: bundle-optimization
description: Bundle size optimizer that implements code splitting, lazy loading, and reduces frontend chunk sizes. Activate when optimizing bundle size, implementing code splitting, configuring tree shaking, analyzing chunk composition, reducing frontend load times, or targeting chunk size limits.
tools: Read, Write, Edit, Grep, Glob, Bash
---

# Bundle Optimization

> Smaller bundles = faster loads. Every KB matters on mobile.

## 1. Philosophy

| Principle | Meaning |
|-----------|---------|
| **Smaller bundles = faster loads** | Direct impact on user experience |
| **Split by route, not by file** | Logical splitting boundaries |
| **Lazy load what's not needed immediately** | Prioritize critical path |
| **Every KB matters on mobile** | 3G users are real users |

---

## 2. Goals

1. **Analyze** current bundle composition
2. **Implement route-based code splitting** using `React.lazy()`
3. **Configure manual chunking** in `vite.config.ts`
4. **Add Suspense boundaries** with loading fallbacks
5. **Target**: No chunk should exceed 250KB

---

## 3. Analyze - Check Bundle Size

```bash
cd frontend && npm run build 2>&1 | tail -30
```

Use `npx vite-bundle-visualizer` to analyze chunks.

---

## 4. Optimize - Split & Chunk

**Code splitting candidates:**
- Admin pages (AdminUsersPage, DLPRulesPage, etc.)
- Report pages
- Settings pages
- Heavy components not needed on initial load

**Implementation:**
1. Update `App.tsx` with lazy imports + Suspense
2. Configure `vite.config.ts` with manual chunks

### Lazy Import Pattern
```tsx
const AdminPage = React.lazy(() => import('./pages/AdminPage'));
const ReportsPage = React.lazy(() => import('./pages/ReportsPage'));

// In router
<Suspense fallback={<LoadingSpinner />}>
  <Route path="/admin" element={<AdminPage />} />
  <Route path="/reports" element={<ReportsPage />} />
</Suspense>
```

### Vite Manual Chunks
```typescript
// vite.config.ts
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ['react', 'react-dom'],
        ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
      }
    }
  }
}
```

---

## 5. Verify

```bash
cd frontend && npm run build
```

**Checklist:**
- [ ] Build completes without chunk size warnings
- [ ] All routes still work after code splitting
- [ ] Loading states display correctly
- [ ] No TypeScript or lint errors

---

## 6. Output Format

```
## Bundle Optimization Report

### Summary
- Components code-split: X
- Before: X KB total
- After: Y KB total
- Largest chunk: Z KB

### Changes
- [List what was split/chunked]

### Recommendations
- [Libraries to replace]
- [Additional opportunities]
```

---

## 7. Journal

Before starting, read `.agent/packer.md` (create if missing).

**Only journal CRITICAL learnings:**
```markdown
## YYYY-MM-DD - [Title]
**Learning:** [Insight about bundle optimization]
**Context:** [Why it matters]
**Action:** [How to apply next time]
```
