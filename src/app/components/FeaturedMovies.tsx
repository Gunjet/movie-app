'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { TiStarFullOutline } from 'react-icons/ti';
import { LuPlay } from 'react-icons/lu';

const API_KEY = 'f39690f9830ce804b7894ac1def4f7e9';

const NowPlaying = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [trailerUrl, setTrailerUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = await response.json();
      setMovies(data.results.slice(0, 3));
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
      }, 3000); 

      return () => clearInterval(intervalId); 
    }
  }, [movies]);

  const fetchTrailer = async (movieId: number) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
    );
    const data = await response.json();

    const trailer = data.results?.find((video: any) => video.type === 'Trailer');
    if (trailer) {
      setTrailerUrl(`https://www.youtube.com/watch?v=${trailer.key}`);
    } else {
      setTrailerUrl(null); 
    }
  };

  const displayedMovies = movies.slice(currentIndex, currentIndex + 3);
  if (displayedMovies.length < 3 && movies.length >= 3) {
    displayedMovies.push(...movies.slice(0, 3 - displayedMovies.length));
  }

  useEffect(() => {
    if (movies[currentIndex]?.id && !trailerUrl) {
      fetchTrailer(movies[currentIndex].id);
    }
  }, [currentIndex, movies, trailerUrl]); 

  return (
    <div className="relative">
      <div className="relative z-10 max-w-full overflow-hidden mx-auto">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {displayedMovies.map((movie) => (
            <div key={movie.id} className="w-full flex-shrink-0">
              <div className="relative">
                <Image
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt={movie.title}
                  width={1000}
                  height={500}
                  className="w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {movies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-[1.5vw] h-[1.5vw] rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
            />
          ))}
        </div>
      </div>

      <div className="px-5 flex justify-between items-center">
        <div className='mt-4'>
          <p className="text-[14px]">Now playing:</p>
          <p className="font-bold text-[24px]">{movies[currentIndex]?.title}</p>
        </div>
        {movies[currentIndex]?.vote_average && (
          <div className="flex items-center space-x-1">
            <TiStarFullOutline size={16} className="text-yellow-300" />
            <p className="font-semibold text-[18px]">{movies[currentIndex]?.vote_average.toFixed(1)}</p>
            <p className="text-[#71717A] text-[18px]">/10</p>
          </div>
        )}
      </div>
      <div className='px-5'>
        {movies[currentIndex]?.overview && (
          <div className="mb-6 mt-2 text-sm text-gray-700">
            <p>{movies[currentIndex]?.overview}</p>
          </div>
        )}
      </div>

      <div className="px-5">
        <button
          onClick={() => fetchTrailer(movies[currentIndex]?.id)}
          className="bg-black rounded-md border px-4 w-[145px] py-2 text-white text-[14px] flex items-center gap-3 mb-10"
        >
          <LuPlay />
          {trailerUrl ? (
            <a
              href={trailerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              Watch Trailer
            </a>
          ) : (
            "No Trailer Available"
          )}
        </button>
      </div>
    </div>
  );
};

export default NowPlaying;
