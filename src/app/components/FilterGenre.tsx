'use client'

import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import { Badge, Link } from "lucide-react"
import { useState, useEffect } from "react"
import { options } from "./section"

type GenreType= {
  id: number;
  name: string;
}

export const FilterGenre= () => {
  const [genres, setGenres] = useState([])

  useEffect(() => {
    const fetchGenres = async () => {
      const response = await fetch (
        `https://api.themoviedb.org/3/genre/movie/list?language=en`, 
        options
      );
      const data= await response.json();
      setGenres(data.genres);
    };
    fetchGenres();
  }, [])

  const onClickGenre = (genreId: number) => {

  }

  return ( 
    <Popover>
      <PopoverTrigger>
      <div className='border rounded-lg p-2 w-[50px]'>Genre</div>
      </PopoverTrigger>
      <PopoverContent>
        {genres?.map((genre: GenreType) => (
          <Link href="/search?with_genres=16">
            <Badge key={`genre-${genre.id}`}>{genre?.name}</Badge>
          </Link>
         )
        )
       }
      </PopoverContent>
    </Popover>
  )
}
