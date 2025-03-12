
import Image from "next/image";
import { Section } from "./components/section";
import NowPlaying from "./components/FeaturedMovies";

const API_KEY = process.env.API_KEY;

export default function Home() {
  if(!API_KEY){
  return <div>No api key</div>
}
  return(
    <div>
      <NowPlaying/>
      <Section number={10} title='Popular' endpoint="popular"/>
      <Section number={10} title='Upcoming' endpoint="upcoming"/>
      <Section number={10} title='Top rated' endpoint="top_rated"/>
    </div>
  )
}
