# Defend your base from 67 Site

Static-exportable Next.js site for `Defend your base from 67`.

## Local run

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The static export is written to `out/`.

## Deploy

Any static host will work because the site exports to plain HTML.

### Cloudflare Pages

Recommended path: use Git integration so Cloudflare rebuilds automatically after each push.

1. Push this project to GitHub.
2. In Cloudflare, open `Workers & Pages`.
3. Select `Create application` -> `Pages` -> `Connect to Git`.
4. Choose your repository.
5. Use these build settings:
   - Production branch: `main`
   - Root directory: `defend-your-base-from-67`
   - Framework preset: `Next.js (Static HTML Export)`
   - Build command: `npm run build`
   - Build output directory: `out`
6. Deploy once from the dashboard.
7. After Cloudflare assigns the `*.pages.dev` domain, update `src/data/game.config.json` so `seo.baseUrl` matches the real production URL.
8. Push again and let Cloudflare rebuild automatically.

### Cloudflare Direct Upload

If you prefer Wrangler instead of Git integration:

1. Create a Cloudflare API token that can manage Pages projects.
2. Set `CLOUDFLARE_API_TOKEN` in your shell.
3. Create the project once:

```bash
npx wrangler pages project create defend-your-base-from-67
```

4. Deploy the exported site:

```bash
npm run build
npx wrangler pages deploy out --project-name defend-your-base-from-67
```
