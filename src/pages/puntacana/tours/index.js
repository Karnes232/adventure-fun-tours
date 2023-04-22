import React from "react"
import Layout from "../../../components/layout"
import puntacanaTours from "../../../data/tours/puntacanaTours"
import TourCard from "../../../components/TourCardComponent/TourCard"
import HeroComponent from "../../../components/HeroComponent/HeroComponent"
import TextComponent from "../../../components/TextComponent/TextComponent"

const index = () => {
  return (
    <Layout>
      <main>
        <HeroComponent
          page="indexMid"
          h1="Fantastic Tours"
          p="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        />
        <div className="mt-[85vh]"></div>
        <TextComponent title="Choose your Tour" className="" />
        <div className="max-w-6xl flex flex-col md:flex-row flex-wrap justify-center md:justify-around  items-center mx-2 lg:mx-auto mb-5">
          {puntacanaTours.map(tour => {
            return <TourCard key={tour.id} tour={tour} />
          })}
        </div>
      </main>
    </Layout>
  )
}

export default index
