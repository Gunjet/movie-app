import { Section } from "@/app/components/section";

type Props = {
    params: { id: string };
  };
  
  export default async function MovieDetail({ params }: Props) { 

      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}`
      );
      const data = await response.json();
      return (
        <div>
          <h1>{data.title}</h1>
          <p>{data.overview}</p>
          <p>Release Date: {data.release_date}</p>
          <p>Rating: {data.vote_average}</p>

          <Section
           title="More like this"
           endpoint={`${params.id}/recommendations`}
           moreLink={`movie/${params.id}/recommendations`}
          />
        </div>
      );
    }
  
  
  