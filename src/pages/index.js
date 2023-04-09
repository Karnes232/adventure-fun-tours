import * as React from "react"
import Layout from "../components/layout"
import HeroComponent from "../components/HeroComponent/HeroComponent"
import TextComponent from "../components/TextComponent/TextComponent"
import BackgroundImage from "../components/HeroComponent/BackgroundImage"
import TourCard from "../components/TourCardComponent/TourCard"
import { links } from "../data/links"
const IndexPage = () => {
  return (
    <Layout>
      <main>
        <HeroComponent page="index" />
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
          <TextComponent title="Choose your Tour" className="" />
        </div>
        <div className="flex flex-col justify-center items-center mx-2 mb-5">
        {links.map(link => {
        return (
          <TourCard />
        )
      })}
          <TourCard />
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
