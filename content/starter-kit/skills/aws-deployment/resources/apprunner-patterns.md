# App Runner Patterns

## When to Use App Runner vs Amplify

| Use Case | Service |
|----------|---------|
| Next.js frontend + SSR | Amplify |
| Standalone API (Fastify, Express) | App Runner |
| Background workers | ECS/Fargate or Lambda |
| Quick prototypes with containers | App Runner |

## Configuration

```yaml
# apprunner.yaml
version: 1.0
runtime: nodejs18
build:
  commands:
    build:
      - npm ci
      - npm run build
run:
  command: npm start
  network:
    port: 3000
  env:
    - name: NODE_ENV
      value: production
```

## Health Check

Always configure a health check endpoint:

```typescript
app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});
```

## Auto-Scaling

- **Min instances**: 1 (keep warm)
- **Max instances**: 10 (default, adjust per project)
- **Scale on**: concurrent requests (default 100 per instance)
