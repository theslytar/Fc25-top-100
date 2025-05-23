
import Head from 'next/head';

const players = [
  // Replace these placeholders with real Futbin data or import from a JSON file / API
  { rank: 1, name: 'Kylian Mbappé', rating: 92, club: 'Paris SG', nation: 'France', position: 'ST' },
  { rank: 2, name: 'Erling Haaland', rating: 92, club: 'Manchester City', nation: 'Norway', position: 'ST' },
  { rank: 3, name: 'Kevin De Bruyne', rating: 91, club: 'Manchester City', nation: 'Belgium', position: 'CM' },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>EA FC 25 – Top 100 Players</title>
        <meta name="description" content="Ratings, positions and stats of the top 100 players in EA FC 25." />
      </Head>
      <main className="min-h-screen bg-slate-900 text-white py-10 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">EA FC 25 – Top 100 Players</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-slate-700">
            <thead className="bg-slate-800">
              <tr>
                <th className="px-4 py-2 border-b">#</th>
                <th className="px-4 py-2 border-b text-left">Player</th>
                <th className="px-4 py-2 border-b">Rating</th>
                <th className="px-4 py-2 border-b text-left">Club</th>
                <th className="px-4 py-2 border-b text-left">Nation</th>
                <th className="px-4 py-2 border-b">Pos</th>
              </tr>
            </thead>
            <tbody>
              {players.map(p => (
                <tr key={p.rank} className="odd:bg-slate-800 even:bg-slate-900">
                  <td className="px-4 py-2 text-center">{p.rank}</td>
                  <td className="px-4 py-2">{p.name}</td>
                  <td className="px-4 py-2 text-center">{p.rating}</td>
                  <td className="px-4 py-2">{p.club}</td>
                  <td className="px-4 py-2">{p.nation}</td>
                  <td className="px-4 py-2 text-center">{p.position}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center text-sm mt-6 opacity-70">Data source: Futbin – used with permission.</p>
      </main>
    </>
  );
}
