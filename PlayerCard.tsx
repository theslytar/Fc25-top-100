import Image from 'next/image';
import cn from 'classnames';

type Props = {
  player: {
    id: number;
    name: string;
    rating: number;
    position: string;
    club: string;
    nation: string;
    faceUrl: string;
  };
};

export default function PlayerCard({ player }: Props) {
  return (
    <div
      className={cn(
        'rounded-2xl shadow p-4 flex flex-col items-center bg-white dark:bg-zinc-900 transition'
      )}
    >
      <div className="relative w-24 h-24 mb-2">
        <Image
          src={player.faceUrl}
          alt={player.name}
          fill
          sizes="96px"
          className="object-cover rounded-full border-2 border-zinc-300"
        />
      </div>
      <h3 className="text-lg font-semibold text-center">{player.name}</h3>
      <p className="text-sm text-zinc-500">{player.club}</p>
      <p className="mt-1 font-bold">{player.rating}</p>
      <span className="text-xs uppercase tracking-wide">{player.position}</span>
    </div>
  );
}
