
import { IoMdArrowForward } from "react-icons/io";
import { Movie } from "./type";
import { MovieCard } from "./moviecard";
import Link from "next/link";

interface Props {
  title: string;
  endpoint: string;
  moreLink?: string;
  number: number;
}

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
  },
};

export const Section = async ({ title, endpoint, moreLink, number }: Props) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=1`,
    options
  );
  const data = await res.json();
  const movies: Movie[] =
    data.results && data.results.length > 0 ? data.results.slice(0, number) : [];

  const href = moreLink ? moreLink : `/${endpoint}`;

  return (
    <div className="flex flex-col items-center">
      <div className="flex text-[24px] justify-between w-full p-5 md:p-8 lg:mb-5 lg:px-12 xl:mb-7 xl:px-16 h-[36px] my-3">
        <p className="font-semibold">{title}</p>
        <Link href={href}>
          <div className="flex items-center gap-2 p-3">
            <button className="text-[14px]">See more</button>
            <IoMdArrowForward className="w-[16px] h-[16px]" />
          </div>
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-5 p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:w-[97%] lg:px-10">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};