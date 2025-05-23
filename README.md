
# EA FC 25 – Top 100 Players

This is a minimal **Next.js 14** project ready to be deployed to **Vercel**.

## Development

```bash
npm install   # (or pnpm install / yarn)
npm run dev
```

Open http://localhost:3000 to see the website.

## Deployment

Push the repository to GitHub, then import it in Vercel. Vercel detects Next.js automatically and will run:

```bash
npm install
npm run build
```

Make sure the `pages` (or `app`) directory exists at project root — otherwise Vercel will fail with  
“_Couldn't find any `pages` or `app` directory_”.

## Customizing

* Replace the placeholder player data in **pages/index.js** with real data from Futbin.
* Add Tailwind, UI libraries, or your own styling as you wish.
