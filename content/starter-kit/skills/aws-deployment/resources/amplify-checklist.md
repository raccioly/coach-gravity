# Amplify Deployment Checklist

## Before Deploying

1. **Build Locally First**
   ```bash
   npm run build
   ```
   Fix all errors before pushing.

2. **Check `amplify.yml`**
   - Verify Node.js version matches local
   - Verify build commands match `package.json` scripts
   - Verify `baseDirectory` points to correct output (`.next` for Next.js)

3. **Environment Variables**
   - All required env vars set in Amplify Console → Environment Variables
   - Secrets use SSM parameter store references, not plain text
   - `NEXTAUTH_URL` set to the Amplify domain
   - `NEXTAUTH_SECRET` set for production

## Common Amplify Gotchas

| Issue | Fix |
|-------|-----|
| Build fails on `sharp` | Add `NEXT_SHARP_PATH=/tmp/node_modules/sharp` env var |
| SSR not working | Ensure Amplify platform is set to "Web compute" not "Web" |
| API routes 404 | Check `rewrites` in `next.config.js` |
| Cache issues | Clear build cache in Amplify Console → App settings |
| Large bundle | Check `npm run build` output for oversized chunks |

## Post-Deploy Verification

```
[ ] Homepage loads without errors
[ ] Auth flow works (login, signup, logout)
[ ] API routes respond correctly
[ ] Images and assets load
[ ] Console shows no client-side errors
```
