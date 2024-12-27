
import Image from "next/image";
import { Section } from "./components/section";
import { Header } from "./components/header";
import { Pagination } from "./components/pagintaion";

export const API_KEY = 'f39690f9830ce804b7894ac1def4f7e9';

export default function Home() {
  return(
    <div>
      <Header />
      <Section title='Popular' endpoint="popular"/>
      <Section title='Upcoming' endpoint="upcoming"/>
      <Section title='Top rated' endpoint="top_rated"/>
      <Pagination/>
    </div>
  )
}