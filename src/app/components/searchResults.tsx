"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { options } from "@/app/components/section";
import { PaginationControls } from "@/app/components/pagination";
import { MovieCard } from "@/app/components/moviecard";
import { Movie } from "@/app/components/type";
import { PageInfo } from "@/app/components/pagination";

export default function SearchResultsPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") || 1);

  const [movies, setMovies] = useState<Movie[]>();
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    totalPages: 0,
    currentPage: page,
  });

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}/recommendations?language=en-US&page=${page}`,
        options
      );
      const data = await response.json();
      setMovies(data.results || []);
      setPageInfo({ currentPage: page, totalPages: data.total_pages || 1 });
    };

    fetchMovies();
  }, [page, params.id]);

  return (
    <>
      <h1 className="font-semibold text-[24px] p-5">Search results</h1>
      <h1 className="font-semibold text-[18px] p-5 my-5">1 results for "searched movie"</h1>
      <div className="p-5 grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:px-10">
        {movies?.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
      <PaginationControls pageInfo={pageInfo} />
    </>
  );
}
