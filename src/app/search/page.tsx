// 'use client'
 
//  import { useSearchParams } from "next/navigation";
//  import { useEffect, useState } from "react";
//  import { Movie } from "../components/type";
// import { PageInfo } from "../components/pagination";
// import { options } from "../components/section";
// import { MovieCard } from "../components/moviecard";

//  export default function SearchResultPage(){
//   const searchParams= useSearchParams();
//   const genres= searchParams.get('with_genres')
 
//   const [movies, setMovies] = useState<Movie[]>();
 
//   useEffect(() => {
//     const fetchMovies = async () => {
//         const response = await fetch (
//             `https://api.themoviedb.org/3/movie?with_genres=${genres}&language=en-US&page=1`,
//             options
//            );
//            const data = await response.json
//            setMovies(data.results?.slice(0, 5))
//     }
//   }, [])
//   return <div>Heyy{movies?.map((movie) => <MovieCard movie={movie}/>)}</div>
//  }

