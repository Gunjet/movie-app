// import { Movie } from "./components/type";
// import { MovieCard } from "./components/moviecard";
import { Movie } from "./type";
import { MovieCard } from "./moviecard";
import { IoMdArrowForward } from "react-icons/io";

interface MovieCategoryProps {
  category: string;
  title: string;
  movies: Movie[]; 
}

export const MovieCategory = ({ category, title, movies }: MovieCategoryProps) => {
  return (
    <div className="my-5 w-full">
      <div className="flex text-[24px] justify-between w-full h-[36px] my-3">
        <p className="font-semibold">{title}</p>
        <div className="flex items-center gap-2 p-3">
          <p className="text-[14px]">See more</p>
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
