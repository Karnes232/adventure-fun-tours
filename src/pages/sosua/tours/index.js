import React from "react"
import Layout from "../../../components/layout"
import sosuaTours from "../../../data/tours/sosuaTours"
import TourCard from "../../../components/TourCardComponent/TourCard"
import HeroComponent from "../../../components/HeroComponent/HeroComponent"
import TextComponent from "../../../components/TextComponent/TextComponent"
import Seo from "../../../components/seo"

const index = () => {
  return (
    <Layout>
      <main>
        <HeroComponent page="indexMid" h1="Sosua Tours" p="" />
        <div className="mt-[85vh]"></div>
        <TextComponent title="Choose your Tour" className="" />
        <div className="max-w-6xl flex flex-col md:flex-row flex-wrap justify-center md:justify-around  items-center mx-2 lg:mx-auto mb-5">
          {sosuaTours.map(tour => {
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
      title="Sosua Adventures - Explore the Beauty and Excitement of Sosua with Adventure Fun Tours"
      description="Discover the best of Sosua with Adventure Fun Tours. Dive into crystal-clear waters on scuba diving excursions, explore vibrant coral reefs, enjoy thrilling party boat tours, embark on horseback riding adventures, and more. Experience the beauty, excitement, and endless possibilities of Sosua with our expert guides and top-notch equipment. Book your unforgettable adventure in Sosua with Adventure Fun Tours today and create memories to last a lifetime."
    />
  </>
)
