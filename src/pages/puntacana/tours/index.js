import React from "react"
import Layout from "../../../components/layout"
import puntacanaTours from "../../../data/tours/puntacanaTours"
import TourCard from "../../../components/TourCardComponent/TourCard"
import HeroComponent from "../../../components/HeroComponent/HeroComponent"
import TextComponent from "../../../components/TextComponent/TextComponent"
import Seo from "../../../components/seo"

const index = () => {
  return (
    <Layout>
      <main>
        <HeroComponent page="indexMid" h1="Punta Cana Tours" p="" />
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
export const Head = () => (
  <>
    <Seo
      title="
Punta Cana Adventures - Experience the Thrills and Beauty of Punta Cana with Adventure Fun Tours"
      description="Embark on unforgettable adventures in Punta Cana with Adventure Fun Tours. Dive into turquoise waters on scuba diving expeditions, explore stunning coral reefs, enjoy exhilarating buggy tours, party on vibrant party boats, and more. Discover the thrill, natural beauty, and endless possibilities of Punta Cana with our experienced guides and top-quality equipment. Book your extraordinary adventure in Punta Cana with Adventure Fun Tours and create memories that will last a lifetime."
    />
  </>
)
