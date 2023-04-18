import * as React from "react"
import Layout from "../components/layout"
import HeroComponent from "../components/HeroComponent/HeroComponent"
import TextComponent from "../components/TextComponent/TextComponent"
import BackgroundImage from "../components/HeroComponent/BackgroundImage"
import TourCard from "../components/TourCardComponent/TourCard"
import { puntacanaTours } from "../data/tours/puntacanaTours"

import SwiperLocationCarousel from "../components/LocationCardComponent/SwiperLocationCarousel"
import IndexLocationComponent from "../components/LocationCardComponent/IndexLocationComponent"
const IndexPage = () => {
  const shortList = puntacanaTours.slice(0, 6)
  return (
    <Layout>
      <main>
        <HeroComponent
          page="index"
          h1="Explore the Dominican Republic"
          p="Find awesome water sports, buggies, horseback riding, and more!"
        />
        <div className="mt-[85vh]"></div>
        <TextComponent
          title="With our experience we will serve you the best"
          paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non consequatur voluptatem deserunt, delectus est deleniti. Illum, incidunt ab at accusamus corporis voluptates qui itaque reiciendis repudiandae doloremque sapiente ducimus iusto et ex magnam. Sed molestias quibusdam dolorum, quos vitae sequi autem perspiciatis aut ab obcaecati fuga eum tempore inventore maxime!"
          className=""
        />
        <TextComponent
          paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non consequatur voluptatem deserunt, delectus est deleniti. Illum, incidunt ab at accusamus corporis voluptates qui itaque reiciendis repudiandae doloremque sapiente ducimus iusto et ex magnam. Sed molestias quibusdam dolorum, quos vitae sequi autem perspiciatis aut ab obcaecati fuga eum tempore inventore maxime!"
          className=""
        />
        <BackgroundImage page="indexMid" />
        <div className="mt-5">
          <TextComponent title="Our Locations" className="" />
        </div>
        <SwiperLocationCarousel /> {/* Small/Medium Screen */}
        <IndexLocationComponent /> {/* Large Screen */}
        <BackgroundImage page="indexLower" />
        <div className="mt-5">
          <TextComponent title="Our Best Tours" className="" />
        </div>
        <div className="max-w-6xl flex flex-col md:flex-row flex-wrap justify-center md:justify-around  items-center mx-2 lg:mx-auto mb-5">
          {shortList.map(tour => {
            return <TourCard key={tour.id} tour={tour} />
          })}
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
