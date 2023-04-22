import React from "react"

import puntacanaTours from "../../../data/tours/puntacanaTours"
import Layout from "../../../components/layout"
import HeroComponent from "../../../components/TourPageComponents/HeroComponent"
import TextComponent from "../../../components/TourPageComponents/TextComponent"
import SwiperCarousel from "../../../components/BackgroundCarousel/SwiperCarousel"
import BackgroundVideo from "../../../components/BackgroundVideo/BackgroundVideo"
import AvailableComponent from "../../../components/TourPageComponents/AvailableComponent"
import IncludedComponent from "../../../components/TourPageComponents/IncludedComponent"
import GoodInfo from "../../../components/TourPageComponents/GoodInfo"
const tour = ({ location }) => {
  const tour = puntacanaTours.find(({ link }) => link === location.pathname)
  return (
    <Layout>
      {tour && (
        <main>
          {tour.img && <HeroComponent image={tour.img} />}
          <div className="max-w-6xl my-5 mx-5 md:mx-10 xl:mx-auto">
            {tour.name && (
              <div className="max-w-6xl my-5 xl:mx-auto">
                <h4 className="font-light text-3xl md:text-4xl tracking-wide">
                  {tour.name}
                </h4>
                <p className="font-extralight text-base md:text-lg tracking-wide">
                  {tour.location}
                </p>
              </div>
            )}
            {tour.available && (
              <AvailableComponent available={tour.available} />
            )}
            {tour.tourPage.title1 && (
              <div className="my-5">
                <TextComponent
                  title={tour.tourPage.title1}
                  paragraph={tour.tourPage.paragraph1}
                />{" "}
              </div>
            )}
          </div>
          {tour.photos && (
            <div className="my-5">
              <SwiperCarousel tour={tour} />
            </div>
          )}
          <div className="max-w-6xl my-5 mx-5 md:mx-10 xl:mx-auto">
          {tour.tourPage.title2 && (
            <div className="my-5">
              <TextComponent
                title={tour.tourPage.title2}
                paragraph={tour.tourPage.paragraph2}
              />
            </div>
          )}
          {tour.tourPage.title3 && (
            <TextComponent
              title={tour.tourPage.title3}
              paragraph={tour.tourPage.paragraph3}
            />
          )}
          <div className="mt-5">
          {tour.included && <IncludedComponent included={tour.included} />}
          </div>
          {tour.goodInfo && <GoodInfo goodInfo={tour.goodInfo} />}
          </div>
          {tour.video && (
            <BackgroundVideo video={tour.video} className="bg-video-courses" />
          )}
        </main>
      )}
    </Layout>
  )
}

export default tour
