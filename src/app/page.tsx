import Image from "next/image";

export const API_KEY = 'f39690f9830ce804b7894ac1def4f7e9';
 

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE',
  },
};
 export type Movie ={
  title: string;
 }

export default async function Home() {
  const res=await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options
  );
  const data=await res.json();
  console.log(data.results)
  const movies:Movie[]=data.results;

  return (
    <div>
      <ul>
        {movies.map((movie)=>(
          <li>{movie.title}</li>
        ))}

      </ul>
    </div>
  );
}
