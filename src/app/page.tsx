
import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";
import { Movie } from "./components/type";
import { MovieCard } from "./components/moviecard";
import {Header} from "./components/header";

export const API_KEY = 'f39690f9830ce804b7894ac1def4f7e9';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE',
  },
}

export default async function Home() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options
  );
  const data = await res.json();
  const movies: Movie[] = data.results.slice(0,10)

  return (
    <div className="flex flex-col items-center">
      <Header/>
      <div className="flex text-[24px] justify-between w-[335px] h-[36px] my-3">
        <p className="font-semibold">Top rated</p>
        <div className='flex items-center gap-2 p-3'>
         <button className='text-[14px]'>See more</button>
         <IoMdArrowForward className='w-[16px] h-[16px] ' />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-5 p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:px-10">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}

