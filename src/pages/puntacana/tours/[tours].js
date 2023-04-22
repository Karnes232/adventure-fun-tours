import React from "react"

import puntacanaTours from "../../../data/tours/puntacanaTours"
import Layout from "../../../components/layout"
import HeroComponent from "../../../components/TourPageComponents/HeroComponent"
import TextComponent from "../../../components/TextComponent/TextComponent"
import SwiperCarousel from "../../../components/BackgroundCarousel/SwiperCarousel"
import BackgroundVideo from "../../../components/BackgroundVideo/BackgroundVideo"
const tour = ({ location }) => {
  const tour = puntacanaTours.find(({ link }) => link === location.pathname)
  return (
    <Layout>
      {tour && (
        <main>
        {tour.img && (<HeroComponent image={tour.img} />)}
        {tour.name && (<TextComponent title={tour.name} paragraph={tour.description} />)}
          {tour.photos && (<div className="my-5">
            <SwiperCarousel tour={tour} />
          </div>)}
          {tour.tourPage.title1 && (<TextComponent title={tour.tourPage.title1} paragraph={tour.tourPage.paragraph1} />) }
          {tour.tourPage.title2 && (<TextComponent title={tour.tourPage.title2} paragraph={tour.tourPage.paragraph2} />)}
          {tour.video && (<BackgroundVideo video={tour.video} className="bg-video-courses" />)}
          
        </main>
      )}
    </Layout>
  )
}

export default tour
