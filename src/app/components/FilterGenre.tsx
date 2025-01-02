// 'use client'

// import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
// import { Badge, Link } from "lucide-react"
// import { useState, useEffect } from "react"
// import { options } from "./section"

// type GenreType= {
//   id: number;
//   name: string;
// }

// export const FilterGenre= () => {
//   const [genres, setGenres] = useState([])

//   useEffect(() => {
//     const fetchGenres = async () => {
//       const response = await fetch (
//         `https://api.themoviedb.org/3/genre/movie/list?language=en`, 
//         options
//       );
//       const data= await response.json();
//       setGenres(data.genres);
//     };
//     fetchGenres();
//   }, [])

//   const onClickGenre = (genreId: number) => {
//   }

//   return ( 
//     <Popover>
//       <PopoverTrigger>
//       <div className='border rounded-lg p-2 w-[50px]'>Genre</div>
//       </PopoverTrigger>
//       <PopoverContent>
//         {genres?.map((genre: GenreType) => (
//           <Link href="/search?with_genres=16">
//             <Badge key={`genre-${genre.id}`}>{genre?.name}</Badge>
//           </Link>
//          )
//         )
//        }
//       </PopoverContent>
//     </Popover>
//   )
// }

'use client'

import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import { Badge, Link } from "lucide-react"
import { useState, useEffect } from "react"
import { options } from "./section"

type GenreType = {
  id: number;
  name: string;
}

export const FilterGenre = () => {
  const [genres, setGenres] = useState<GenreType[]>([])

  useEffect(() => {
    const fetchGenres = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?language=en`, 
        options
      );
      const data = await response.json();
      setGenres(data.genres);
    };
    fetchGenres();
  }, [])

  const onClickGenre = (genreId: number) => {
    console.log(`Selected Genre ID: ${genreId}`);
  }

  return ( 
    <Popover>
      <PopoverTrigger>
        <div className='border rounded-lg p-2 w-[50px] text-center cursor-pointer'>
          Genre
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="p-2">
          {genres?.map((genre: GenreType) => (
            <Link
              key={`genre-${genre.id}`}  
              href={`/search?with_genres=${genre.id}`}
              className="block mb-1"
              onClick={() => onClickGenre(genre.id)}
            >
              <Badge>{genre.name}</Badge>
            </Link>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
