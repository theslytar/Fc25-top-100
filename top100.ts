import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const key = process.env.FUTBIN_API_KEY;
  const url = 'https://www.futbin.com/api/fc25/players/top100'; // hypothetical endpoint

  if (!key) {
    // Fallback to sample json
    const players = await import('@/data/top100-sample.json');
    return res.status(200).json(players.default);
  }

  try {
    const apiRes = await fetch(url, {
      headers: { 'X-AUTH-TOKEN': key, 'User-Agent': 'fc25-top100-site' },
      next: { revalidate: 86400 } // cache for 24h on Vercel Edge
    });

    if (!apiRes.ok) {
      throw new Error('API error');
    }

    const data = await apiRes.json();
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    const players = await import('@/data/top100-sample.json');
    res.status(200).json(players.default);
  }
}
