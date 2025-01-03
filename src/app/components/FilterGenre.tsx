
'use client'

import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import { Badge, Link } from "lucide-react"
import { useState, useEffect } from "react"
import { options } from "./section"
import { CiSearch } from "react-icons/ci"

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

  console.log(genres)
  return ( 
    <Popover>
      <PopoverTrigger className="p-2 rounded-md border-[1px] border-[#E4E4E7]">
       <CiSearch className="w-[16px] h-[16px] text-black" />
      </PopoverTrigger>
      <PopoverContent>
        <div className="p-2">
          {genres?.map((genre: GenreType) => (
            <Link
              key={`genre-${genre.id}`}  
              href={`search/${genre.id}`}
            >
              <div>{genre.name}</div>
            </Link>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
