
import Link from "next/link";
import { Movie } from "./type";
import { TiStarFullOutline } from "react-icons/ti";

export const MovieCard = ({ movie }: { movie: Movie }) => {
  const imgPath = movie.poster_path ?? movie.backdrop_path ?? '';

  return (
 <Link href={`/movie/${movie.id}`}>
    <div className="rounded-lg bg-gray-100">
      <img
        src={`https://image.tmdb.org/t/p/w500/${imgPath}`}
        className="rounded-t-lg"
      />
      <div className="p-2">
        <div className="flex items-center">
          <TiStarFullOutline size={16} className="text-yellow-300" />
          <p>{movie.vote_average.toFixed(1)}</p>
          <p className='text-[#71717A]'>/10</p>
        </div>
        <p>{movie.title}</p>
      </div>
    </div>
    </Link>
  );
};
