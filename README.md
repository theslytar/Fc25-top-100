# FC25 Top 100 Players

A **Next.js 14** + **Tailwind CSS** web‑app that lists the **Top 100 rated players in EA Sports FC 25**.

- **Data source:** Futbin (you said you have permission). The site fetches `/players/top100` daily via the API route.
- **Hosting:** Optimised for Vercel – zero config.
- **Features:** search, sort, responsive grid, light/dark toggle.

## Quick start

```bash
git clone <your‑repo‑url>
cd fc25-top100
npm install

# add your Futbin key
cp .env.example .env.local
# open .env.local and put your key

npm run dev          # local dev at http://localhost:3000
npm run build        # production build
```

## Deploy to Vercel

1. Push the project to a GitHub repo.
2. In Vercel, “New Project” → import the repo.
3. In **Environment Variables** add `FUTBIN_API_KEY` (same value as locally).
4. Click **Deploy** – done 🚀

The API route will revalidate every 24 h (`s-maxage=86400`). If the key is missing or the request fails, it falls back to the bundled sample JSON so the build never breaks.
