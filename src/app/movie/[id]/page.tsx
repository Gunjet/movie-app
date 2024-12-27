// type Props= {
//     params: string
// }
// export default async function MovieDetail({ params }: Props){
//     const response = await fetch (
//         `https://api.themoviedb.org/3/movie/${params.id}`
//     )
//     return(
//         <div>
//             <p>{data.title}</p>
//         </div>
//     )
// }
// Corrected version of MovieDetail
// app/movies/[id]/page.tsx

type Props = {
    params: { id: string };
  };
  
  export default async function MovieDetail({ params }: Props) {
    // Ensure params is awaited by wrapping inside a try-catch
    const { id } = await params; // This will ensure the params are fully loaded
  
    try {
      // Fetch the movie data using the dynamic id
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=f39690f9830ce804b7894ac1def4f7e9`
      );
  
      // If the response is not ok, throw an error
      if (!response.ok) {
        throw new Error('Failed to fetch movie details');
      }
  
      // Parse the movie data
      const data = await response.json();
  
      // Return the movie details
      return (
        <div>
          <h1>{data.title}</h1>
          <p>{data.overview}</p>
          <p>Release Date: {data.release_date}</p>
          <p>Rating: {data.vote_average}</p>
        </div>
      );
    } catch (error) {
      console.error(error);
      return <div>Error loading movie details.</div>;
    }
  }
  
  
  