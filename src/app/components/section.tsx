// import { IoMdArrowForward } from "react-icons/io";
// import { Movie } from "./type";
// import { MovieCard } from "./moviecard";


// interface Props {
//     title: string;
//     endpoint: string;
//   } 

// export const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization:
//         'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE',
//     },
//   }

// export const Section = async ({ title, endpoint }: Props) => {

//     const res = await fetch(
//       `https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=1`, options
//     );
    
//     const data = await res.json();
//     const movies: Movie[] = data.results ? data.results.slice(0, 10) : [];
  
//     return (
//       <div className="flex flex-col items-center">
//         <div className="flex text-[24px] justify-between w-[335px] h-[36px] my-3">
//           <p className="font-semibold">{title}</p>
//           <div className="flex items-center gap-2 p-3">
//             <button className="text-[14px]">See more</button>
//             <IoMdArrowForward className="w-[16px] h-[16px]" />
//           </div>
//         </div>
  
//         <div className="flex flex-wrap justify-center gap-5 p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:px-10">
//           {movies.map((movie, index) => (
//             <MovieCard key={index} movie={movie} />
//           ))}
//         </div>
//       </div>
//     );
//   };

// 'use client';

// import { useState, useEffect } from "react";
// import { MovieCard } from "./moviecard";
// import { useSearchParams } from "next/navigation";
// import { PaginationControls } from "./paginationControls";  // Import pagination controls
// import { Movie } from "./type";
// import { IoMdArrowForward } from "react-icons/io"; // Import arrow icon for pagination

// interface Props {
//   title: string;
//   endpoint: string;
// }

// export const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE', // Your API key remains unchanged
//   },
// };

// export const Section = ({ title, endpoint }: Props) => {
//   const searchParams = useSearchParams();
//   const currentPage = Number(searchParams.get('page') || 1);  // Get current page from URL
//   const [showPagination, setShowPagination] = useState(false);  // Track if "See more" was clicked

//   const [movies, setMovies] = useState<Movie[]>();
//   const [pageInfo, setPageInfo] = useState({
//     currentPage: currentPage,
//     totalPages: 500,  // Hardcoded to 500 for now, as per your request.
//   });
  
//   useEffect(() => {
//     const fetchMovies = async () => {
//       const response = await fetch(
//         `https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=${currentPage}`,
//         options
//       );
//       const data = await response.json();
      
//       if (data.results) {
//         setMovies(data.results);  // Set the movie list for the current category
//         setPageInfo({
//           currentPage,
//           totalPages: Math.min(data.total_pages, 500),  // Limit to 500 pages max
//         });
//       }
//     };

//     fetchMovies();
//   }, [currentPage, endpoint]);  // Re-run when page or endpoint changes

//   // Handle the "See More" button click
//   const handleSeeMoreClick = () => {
//     setShowPagination(true);  // Show pagination when the button is clicked
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <div className="flex text-[24px] justify-between w-[335px] h-[36px] my-3">
//         <p className="font-semibold">{title}</p>
//         <div className="flex items-center gap-2 p-3">
//           <button className="text-[14px]" onClick={handleSeeMoreClick}>
//             See more
//           </button>
//           <IoMdArrowForward className="w-[16px] h-[16px]" />
//         </div>
//       </div>

//       <div className="flex flex-wrap justify-center gap-5 p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:px-10">
//         {movies?.map((movie) => (
//           <MovieCard key={movie.id} movie={movie} />
//         ))}
//       </div>

//       {/* Only show pagination if "See more" has been clicked */}
//       {showPagination && <PaginationControls pageInfo={pageInfo} />}
//     </div>
//   );
// };

'use client';

import { useState, useEffect } from "react";
import { MovieCard } from "./moviecard";
import { useSearchParams, useRouter } from "next/navigation";
import { PaginationControls } from "./paginationControls"; 
import { Movie } from "./type";
import { IoMdArrowForward } from "react-icons/io";

interface Props {
  title: string;
  endpoint: string;
}

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE', // Your API key remains unchanged
  },
};

export const Section = ({ title, endpoint }: Props) => {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page') || 1); 
  const [showPagination, setShowPagination] = useState(false);  

  const [movies, setMovies] = useState<Movie[]>();
  const [pageInfo, setPageInfo] = useState({
    currentPage: currentPage,
    totalPages: 500, 
  });

  const router = useRouter(); 

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${endpoint}?page=${currentPage}`,
        options
      );
      const data = await response.json();
      const movies: Movie[] = data.results ? data.results.slice(0, 10) : [];
      
      if (movies) {
        setMovies(movies); 
        setPageInfo({
          currentPage,
          totalPages: Math.min(data.total_pages, 500), 
        });
      }
    };

    fetchMovies();
  }, [currentPage, endpoint]);  
  const handleSeeMoreClick = () => {
    setShowPagination(true); 
  };
  const handlePageChange = (page: number) => {
    router.push(`?page=${page}`);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex text-[24px] justify-between w-[335px] h-[36px] my-3">
        <p className="font-semibold">{title}</p>
        <div className="flex items-center gap-2 p-3">
          <button className="text-[14px]" onClick={handleSeeMoreClick}>
            See more
          </button>
          <IoMdArrowForward className="w-[16px] h-[16px]" />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-5 p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:px-10">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {showPagination && (
        <PaginationControls pageInfo={pageInfo} />
      )}
    </div>
  );
};
