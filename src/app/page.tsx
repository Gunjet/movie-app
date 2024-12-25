// import Image from "next/image";
// import { CiSearch } from "react-icons/ci";
// import { PiMoonThin } from "react-icons/pi";
// import { IoStar } from "react-icons/io5";

// export const API_KEY = 'f39690f9830ce804b7894ac1def4f7e9';
 

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE',
//   },
// };
//  export type Movie ={
//   title: string;
//  }
//  export const MovieCard = ({movie}: {movie: Movie})=>{
//   // const imgPath=
//   // movie?.poster_path ??
//   // movie?.backdrop_path ??
//   // ''
//  }
// export default async function Home() {
//   const res=await fetch(
//     "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options
//   );
//   const data=await res.json();
//   console.log(data.results)
//   const movies:Movie[]=data.results;

//   return (
//     <div className='flex justify-center'>
//       {/* <ul>
//         {movies.map((movie)=>(
//           <li>{movie.title}</li>
//         ))}
//       </ul> */}
//       <div className="flex items-center gap-2 w-[375px] h-[59px] p-2 justify-between">
//         <div className=" p-2 flex gap-2"> 
//         <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M4.83268 1.16675V17.8334M13.166 1.16675V17.8334M0.666016 9.50008H17.3327M0.666016 5.33341H4.83268M0.666016 13.6667H4.83268M13.166 13.6667H17.3327M13.166 5.33341H17.3327M2.48268 1.16675H15.516C16.5193 1.16675 17.3327 1.9801 17.3327 2.98341V16.0167C17.3327 17.0201 16.5193 17.8334 15.516 17.8334H2.48268C1.47936 17.8334 0.666016 17.0201 0.666016 16.0167V2.98341C0.666016 1.9801 1.47936 1.16675 2.48268 1.16675Z" stroke="#4338CA" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//         <p className='text-[16px] font-bold italic text-[#4338CA]'>Movie Z</p>
//         </div>   
//         <div className="flex gap-3">
//           <button className='p-2 rounded-md border-[1px] border-[#E4E4E7]'>
//            <CiSearch className='w-[16px] h-[16px] text-black'/>
//           </button>   
//           <button className='p-2 rounded-md border-[1px] border-[#E4E4E7]'>
//            <PiMoonThin className='w-[16px] h-[16px] text-black'/>
//           </button> 
//         </div> 
//       </div>

//       <div className='rounded-lg bg-gray-100'>
//         <img
//          src={`https://image.tmdb.org/t/p/w500/${imgPath}`}
//          className='rounded-t-lg'
//         />
//         <div className='p-2'>
//           <div className='flex items-center gap-3'>
//            <IoStar size={16} className="text-yellow-300"/>
//            <p>{movies.vote_average.toFixed(1)}</p>
//           </div>
//           <p>{movies.title}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { PiMoonThin } from "react-icons/pi";
import { IoStar } from "react-icons/io5";

export const API_KEY = 'f39690f9830ce804b7894ac1def4f7e9';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE',
  },
};

export type Movie = {
  title: string;
  poster_path?: string;
  backdrop_path?: string;
  vote_average: number;
};

export const MovieCard = ({ movie }: { movie: Movie }) => {

  const imgPath = movie.poster_path ?? movie.backdrop_path ?? '';

  return (
    <div className="rounded-lg bg-gray-100">
      <img
        src={`https://image.tmdb.org/t/p/w500/${imgPath}`}
        alt={movie.title}
        className="rounded-t-lg"
        style={{ width: '100%', height: 'auto' }} 
      />
      <div className="p-2">
        <div className="flex items-center gap-3">
          <IoStar size={16} className="text-yellow-300" />
          <p>{movie.vote_average.toFixed(1)}</p>
        </div>
        <p className="font-bold">{movie.title}</p>
      </div>
    </div>
  );
};

export default async function Home() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options
  );
  const data = await res.json();
  const movies: Movie[] = data.results;

  return (
    <div className="flex flex-col items-center">

      <div className="flex items-center gap-2 w-[375px] h-[59px] p-2 justify-between">
        <div className="flex gap-2">
          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.83268 1.16675V17.8334M13.166 1.16675V17.8334M0.666016 9.50008H17.3327M0.666016 5.33341H4.83268M0.666016 13.6667H4.83268M13.166 13.6667H17.3327M13.166 5.33341H17.3327M2.48268 1.16675H15.516C16.5193 1.16675 17.3327 1.9801 17.3327 2.98341V16.0167C17.3327 17.0201 16.5193 17.8334 15.516 17.8334H2.48268C1.47936 17.8334 0.666016 17.0201 0.666016 16.0167V2.98341C0.666016 1.9801 1.47936 1.16675 2.48268 1.16675Z" stroke="#4338CA" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p className='text-[16px] font-bold italic text-[#4338CA]'>Movie Z</p>
        </div>   
        <div className="flex gap-3">
          <button className="p-2 rounded-md border-[1px] border-[#E4E4E7]">
            <CiSearch className="w-[16px] h-[16px] text-black" />
          </button>   
          <button className="p-2 rounded-md border-[1px] border-[#E4E4E7]">
            <PiMoonThin className="w-[16px] h-[16px] text-black" />
          </button> 
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
