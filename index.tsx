import useSWR from 'swr';
import { useState, useMemo } from 'react';
import PlayerCard from '@/components/PlayerCard';
import SearchBar from '@/components/SearchBar';
import SortSelect from '@/components/SortSelect';

type Player = {
  id: number;
  name: string;
  rating: number;
  position: string;
  club: string;
  nation: string;
  faceUrl: string;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR<Player[]>('/api/top100', fetcher);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('rating-desc');

  const players = useMemo(() => {
    if (!data) return [];
    let filtered = data.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );

    switch (sort) {
      case 'rating-asc':
        filtered = filtered.sort((a, b) => a.rating - b.rating);
        break;
      case 'rating-desc':
        filtered = filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name-asc':
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filtered = filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }
    return filtered;
  }, [data, query, sort]);

  if (error) return <p className="text-center mt-24">Failed to load.</p>;
  if (!data) return <p className="text-center mt-24">Loading...</p>;

  return (
    <main className="min-h-screen bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <header className="py-10 text-center">
        <h1 className="text-3xl font-bold">FC&nbsp;25 Top 100 Players</h1>
        <p className="text-zinc-500">Data via Futbin · automatically updated</p>
      </header>

      <section className="flex flex-col md:flex-row gap-4 justify-center mb-8 px-4">
        <SearchBar value={query} onChange={setQuery} />
        <SortSelect value={sort} onChange={setSort} />
      </section>

      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 pb-16">
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </section>
    </main>
  );
}
