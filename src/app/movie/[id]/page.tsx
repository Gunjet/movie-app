// import { options, Section } from "@/app/components/section";
// import { TiStarFullOutline } from "react-icons/ti";

// type Props = {
//     params: { id: number};
//   };
  
//   export default async function MovieDetail({ params}: Props) { 
//       const response = await fetch(
//         `https://api.themoviedb.org/3/movie/${params.id}?api_key=${options}&language=en-US`,options
//       );

//       const data = await response.json();
//       const imgBackdropPath = data.backdrop_path ?? data.poster_path ?? '';
//       const imgPosterPath = data.poster_path ?? data.backdrop_path

//       const runtime = data.runtime
//       const hour = runtime /60 
//       const minute = runtime % 60

//   return (
//   <div>

//   <div className="flex justify-between p-4">
//     <div className="flex flex-col">
//       <h1 className="text-[24px] font-semibold">{data.title}</h1>
//       <p>{data.release_date} · PG · {hour.toFixed(0)}h {minute}m</p>
//     </div>
//     <div className="flex items-center">
//       <TiStarFullOutline size={16} className="text-yellow-300" />
//       <p className="font-semibold">{data.vote_average.toFixed(1)}</p>
//       <p className="text-[#71717A]">/10</p>
//     </div>
//   </div>

//   <img
//     src={`https://image.tmdb.org/t/p/w500/${imgBackdropPath}`}
//     className="w-full h-auto"
//   />

//   <div className="flex p-5 gap-10 mt-3">
//     <img
//       className="w-[100px] h-[148px] object-cover"
//       src={`https://image.tmdb.org/t/p/w500/${imgPosterPath}`}
//     />
//     <div className="flex flex-col w-[201px]">
//       <div className="flex gap-3 mb-5 flex-wrap">
//         {data.genres?.map((genre: { id: number; name: string }) => (
//           <p
//             key={genre.id}
//             className="text-gray-700 p-[2px] px-2 text-[12px] rounded-xl font-semibold border-[#E4E4E7] border-[1px]"
//           >
//             {genre.name}
//           </p>
//         ))}
//       </div>
//       <p className="text-[14px] text-gray-800">{data.overview}</p>
//     </div>
//   </div>
//   <Section
//     number={2}
//     title="More like this"
//     endpoint={`${params.id}/recommendations`}
//     moreLink={`movie/${params.id}/recommendations`}
//    />
// </div>
// );}



import { options, Section } from "@/app/components/section";
import { TiStarFullOutline } from "react-icons/ti";

type Props = {
  params: { id: number };
};

export default async function MovieDetail({ params }: Props) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${options}&language=en-US`,
    options
  );

  const data = await response.json();
  const imgBackdropPath = data.backdrop_path ?? data.poster_path ?? '';
  const imgPosterPath = data.poster_path ?? data.backdrop_path;

  const runtime = data.runtime;
  const hour = runtime / 60;
  const minute = runtime % 60;

  return (
    <div>
      <div className="flex justify-between p-4">
        <div className="flex flex-col">
          <h1 className="text-[24px] font-semibold">{data.title}</h1>
          <p>{data.release_date} · PG · {hour.toFixed(0)}h {minute}m</p>
        </div>
        <div className="flex items-center">
          <TiStarFullOutline size={16} className="text-yellow-300" />
          <p className="font-semibold">{data.vote_average.toFixed(1)}</p>
          <p className="text-[#71717A]">/10</p>
        </div>
      </div>

      <img
        src={`https://image.tmdb.org/t/p/w500/${imgBackdropPath}`}
        className="w-full h-auto"
      />

      <div className="flex p-5 gap-10 mt-3">
        <img
          className="w-[100px] h-[148px] object-cover"
          src={`https://image.tmdb.org/t/p/w500/${imgPosterPath}`}
        />
        <div className="flex flex-col w-[201px]">
          <div className="flex gap-3 mb-5 flex-wrap">
            {data.genres?.map((genre: { id: number; name: string }) => (
              <p
                key={genre.id}
                className="text-gray-700 p-[2px] px-2 text-[12px] rounded-xl font-semibold border-[#E4E4E7] border-[1px]"
              >
                {genre.name}
              </p>
            ))}
          </div>
          <p className="text-[14px] text-gray-800">{data.overview}</p>
        </div>
      </div>

      {/* Update this part to show recommendations based on movie ID */}
      <Section
        number={2}
        title="More like this"
        endpoint={`${params.id}/recommendations`}
        moreLink={`/movie/${params.id}/recommendations`}
      />
    </div>
  );
}
