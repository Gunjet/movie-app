
import Image from "next/image";
import { Section } from "./components/section";
import NowPlaying from "./components/FeaturedMovies";

export const API_KEY = 'f39690f9830ce804b7894ac1def4f7e9';

export default function Home() {
  return(
    <div>
      <NowPlaying/>
      <Section number={10} title='Popular' endpoint="popular"/>
      <Section number={10} title='Upcoming' endpoint="upcoming"/>
      <Section number={10} title='Top rated' endpoint="top_rated"/>
    </div>
  )
}
