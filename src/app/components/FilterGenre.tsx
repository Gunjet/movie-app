
'use client'

import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import { options } from "./section"
import { CiSearch } from "react-icons/ci"
import Link from "next/link"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

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

  }

  console.log(genres)
  return ( 
    <Popover>
      <PopoverTrigger className="p-2 rounded-md border-[1px] border-[#E4E4E7]">
       <CiSearch className="w-[16px] h-[16px] text-black" />
      </PopoverTrigger>
      <PopoverContent >
        <p className='text-[24px] font-semibold'>Genres</p> 
        <p>See lists of movies by genre</p>
        <p className="w-[290px] h-[1px] bg-[#E4E4E7] mt-4" ></p>
          {genres?.map((genre: GenreType) => (
          <Link href={`/movie/${genre.id}`} key={genre.id}>
              <Badge className='mr-2 mt-3 bg-white text-black rounded-xl border-[#E4E4E7]'>             
              {genre.name}</Badge> 
          </Link>
          ))}
      </PopoverContent>
    </Popover>
  )
}