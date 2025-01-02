import { options, Section } from "@/app/components/section";

type Props = {
    params: { id: number};
  };
  
  export default async function MovieDetail({ params}: Props) { 
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${options}&language=en-US`,options
      );
      const data = await response.json();
      const imgPath = data.poster_path ?? data.backdrop_path ?? '';

        return (    
          <div>
            <h1>{data.title}</h1>     
            <p>{data.overview}</p>
            <p>Release Date: {data.release_date}</p>
            <p>Rating: {data.vote_average}</p>
            <img src={`https://image.tmdb.org/t/p/w500/${imgPath}`}></img>
            <Section
             number={2}
             title="More like this"
             endpoint={`${params.id}/recommendations`}
             moreLink={`movie/${params.id}/recommendations`}
            />
          </div>
         
        );
      }



  