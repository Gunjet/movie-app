import { Movie } from "./type";
import { IoStar } from "react-icons/io5"; 

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
         <div className="flex items-center">
           <IoStar size={16} className="text-yellow-300" />
           <p>{movie.vote_average.toFixed(1)}</p>
           <p className='text-[#71717A]'>/10</p>
         </div>
         <p>{movie.title}</p>
       </div>
     </div>
   );
 };