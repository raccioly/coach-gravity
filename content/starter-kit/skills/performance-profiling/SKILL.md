---
name: performance-profiling
description: Performance profiling principles. Measurement, analysis, and optimization techniques.
tools: Read, Glob, Grep, Bash
---

# Performance Profiling

> Measure, analyze, optimize - in that order.

## 🔧 Runtime Scripts

**Execute these for automated profiling:**

| Script | Purpose | Usage |
|--------|---------|-------|
| `scripts/lighthouse_audit.py` | Lighthouse performance audit | `python scripts/lighthouse_audit.py https://example.com` |

---

## 1. Core Web Vitals

### Targets

| Metric | Good | Poor | Measures |
|--------|------|------|----------|
| **LCP** | < 2.5s | > 4.0s | Loading |
| **INP** | < 200ms | > 500ms | Interactivity |
| **CLS** | < 0.1 | > 0.25 | Stability |

### When to Measure

| Stage | Tool |
|-------|------|
| Development | Local Lighthouse |
| CI/CD | Lighthouse CI |
| Production | RUM (Real User Monitoring) |

---

## 2. Profiling Workflow

### The 4-Step Process

```
1. BASELINE → Measure current state
2. IDENTIFY → Find the bottleneck
3. FIX → Make targeted change
4. VALIDATE → Confirm improvement
```

### Profiling Tool Selection

| Problem | Tool |
|---------|------|
| Page load | Lighthouse |
| Bundle size | Bundle analyzer |
| Runtime | DevTools Performance |
| Memory | DevTools Memory |
| Network | DevTools Network |

---

## 3. Bundle Analysis

### What to Look For

| Issue | Indicator |
|-------|-----------|
| Large dependencies | Top of bundle |
| Duplicate code | Multiple chunks |
| Unused code | Low coverage |
| Missing splits | Single large chunk |

### Optimization Actions

| Finding | Action |
|---------|--------|
| Big library | Import specific modules |
| Duplicate deps | Dedupe, update versions |
| Route in main | Code split |
| Unused exports | Tree shake |

---

## 4. Runtime Profiling

### Performance Tab Analysis

| Pattern | Meaning |
|---------|---------|
| Long tasks (>50ms) | UI blocking |
| Many small tasks | Possible batching opportunity |
| Layout/paint | Rendering bottleneck |
| Script | JavaScript execution |

### Memory Tab Analysis

| Pattern | Meaning |
|---------|---------|
| Growing heap | Possible leak |
| Large retained | Check references |
| Detached DOM | Not cleaned up |

---

## 5. Common Bottlenecks

### By Symptom

| Symptom | Likely Cause |
|---------|--------------|
| Slow initial load | Large JS, render blocking |
| Slow interactions | Heavy event handlers |
| Jank during scroll | Layout thrashing |
| Growing memory | Leaks, retained refs |

---

## 6. Quick Win Priorities

| Priority | Action | Impact |
|----------|--------|--------|
| 1 | Enable compression | High |
| 2 | Lazy load images | High |
| 3 | Code split routes | High |
| 4 | Cache static assets | Medium |
| 5 | Optimize images | Medium |

---

## 7. Anti-Patterns

| ❌ Don't | ✅ Do |
|----------|-------|
| Guess at problems | Profile first |
| Micro-optimize | Fix biggest issue |
| Optimize early | Optimize when needed |
| Ignore real users | Use RUM data |

---

> **Remember:** The fastest code is code that doesn't run. Remove before optimizing.

---

## Optimization Protocol

Hands-on optimization workflow with variety enforcement and prioritization.

### Project-Specific Patterns

Read the project's README and existing patterns before optimizing:
- **DynamoDB keys**: Use `dynamoKeys.ts` helpers, never hardcode key prefixes
- **Repository pattern**: Data access through repository modules
- **Service layer**: Business logic in service modules, thin controllers
- **Accessibility**: Maintain existing ARIA patterns and focus management

### Variety Enforcement

**Rotate categories** - If last fix was React memoization, pick a different category next time. Track your last optimization category to ensure variety.

Choose an opportunity that:
1. Has measurable impact
2. Solves a real bottleneck (actual hot paths)
3. Fits in < 50 lines
4. Maintains readability
5. Low regression risk

### Prioritization Matrix

| Impact | Confidence | Priority |
|--------|------------|----------|
| User-facing latency | High certainty | DO FIRST |
| Resource efficiency | Measurable | GREAT CHOICE |
| Theoretical improvement | Likely helps | VERIFY CAREFULLY |
| Micro-optimization | Marginal gains | PROBABLY SKIP |

### Optimization Categories (rotate through these)

**DATA & QUERIES (High Impact)**
- Full table scans (DynamoDB queries without proper key conditions)
- N+1 query problems (fetching in loops instead of batches)
- Missing pagination (unbounded result sets)
- Redundant API calls, missing caching
- Sequential requests that could be parallelized

**RENDER & REACT (High Impact)**
- Unnecessary re-renders (missing React.memo)
- Missing memoization (useMemo/useCallback)
- Lists without virtualization (100+ items)
- State too high causing sibling re-renders
- Inline object/function props creating new refs

**BUNDLE & LOADING (Medium Impact)**
- Missing code splitting, lazy loading
- Unused imports, heavy dependencies
- Missing preloading for critical resources

**ALGORITHMS (Medium Impact)**
- O(n^2) loops that could use hash maps
- Repeated calculations, inefficient lookups
- Missing early returns

**NETWORK (Medium Impact)**
- Missing debounce/throttle
- No request deduplication
- Missing timeouts

**MEMORY (Lower Impact)**
- Memory leaks (uncleared listeners/subscriptions)
- Unbounded caches, missing useEffect cleanup

### Code Standards Examples

**React memoization:**
```tsx
const MessageList = React.memo(function MessageList({ messages, onSelect }) {
  const sorted = useMemo(() => messages.slice().sort((a, b) => b.timestamp - a.timestamp), [messages]);
  const handleSelect = useCallback((id) => onSelect(id), [onSelect]);
  return <VirtualList items={sorted} renderItem={(msg) => <MessageItem key={msg.id} message={msg} onSelect={handleSelect} />} />;
});
```

**DynamoDB query:**
```typescript
// GOOD: Query with key conditions, pagination
const result = await dynamodb.query({
  TableName: TABLE_NAME,
  KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
  ExpressionAttributeValues: { ':pk': DYNAMO_KEYS.conversation(id).PK, ':sk': 'MSG#' },
  Limit: 50, ScanIndexForward: false
});
// BAD: Full scan with FilterExpression
```

**Algorithm:**
```typescript
// GOOD: O(n) with Map
const seen = new Map<string, Message>();
for (const msg of messages) {
  const key = `${msg.content}-${msg.senderId}`;
  if (seen.has(key)) duplicates.push(msg);
  else seen.set(key, msg);
}
// BAD: O(n^2) nested loop
```

**Debounced search:**
```typescript
useEffect(() => {
  abortRef.current?.abort();
  abortRef.current = new AbortController();
  const timeout = setTimeout(() => searchAPI(query, abortRef.current.signal).then(setResults), 300);
  return () => clearTimeout(timeout);
}, [query]);
```

### Quick Win Inspiration

- **Quick Wins:** React.memo on list items, scan->query, pagination, debounce search, Promise.all, lazy images
- **Solid:** useMemo for sort/filter, virtualization, Set/Map for O(n^2)->O(n), batch DynamoDB, early returns, caching
- **Thoughtful:** Code splitting, request deduplication, useEffect cleanup, lighter dependencies

### What to Avoid

- Memoizing everything (memo has overhead)
- Optimizing cold paths
- Premature optimization without measurement
- Clever tricks sacrificing readability
- Large architectural rewrites
- Same category repeatedly (vary optimizations)

### Verification

```bash
cd backend && npm run build && npm test
cd frontend && npm run build
```

### Output Format

```
## Performance Optimization

### What
[One sentence: the optimization]

### Why
[The performance problem it solves]

### Expected Impact
- Before: [e.g., "O(n^2) loop", "50 re-renders"]
- After: [e.g., "O(n) with Map", "1 re-render"]

### How to Verify
[Steps to measure]

### Changes
- [File]: [What was optimized]
```
