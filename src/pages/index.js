import * as React from "react"
import Layout from "../components/layout"
import HeroComponent from "../components/HeroComponent/HeroComponent"
import TextComponent from "../components/TextComponent/TextComponent"
import BackgroundImage from "../components/HeroComponent/BackgroundImage"
import { puntacanaTours } from "../data/tours/puntacanaTours"
import { sosuaTours } from "../data/tours/sosuaTours"
import SwiperLocationCarousel from "../components/LocationCardComponent/SwiperLocationCarousel"
import IndexLocationComponent from "../components/LocationCardComponent/IndexLocationComponent"
import SwiperCarousel from "../components/TourCardComponent/SwiperCarousel"
const IndexPage = () => {
  const PCshortList = puntacanaTours.slice(0, 6)
  const SOSshortList = sosuaTours.slice(0, 6)
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
        <SwiperCarousel title="Punta Cana's Best Tours" tours={PCshortList} />
        <SwiperCarousel title="Sosua's Best Tours" tours={SOSshortList} />
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
