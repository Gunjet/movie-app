import { IoMdArrowForward } from "react-icons/io";
import { Movie } from "./type";
import { MovieCard } from "./moviecard";


interface Props {
    title: string;
    endpoint: string;
  } 

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE',
    },
  }

export const Section = async ({ title, endpoint }: Props) => {

    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=1`, options
    );
    
    const data = await res.json();
    const movies: Movie[] = data.results ? data.results.slice(0, 10) : [];
  
    return (
      <div className="flex flex-col items-center">
        <div className="flex text-[24px] justify-between w-[335px] h-[36px] my-3">
          <p className="font-semibold">{title}</p>
          <div className="flex items-center gap-2 p-3">
            <button className="text-[14px]">See more</button>
            <IoMdArrowForward className="w-[16px] h-[16px]" />
          </div>
        </div>
  
        <div className="flex flex-wrap justify-center gap-5 p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:px-10">
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      </div>
    );
  };