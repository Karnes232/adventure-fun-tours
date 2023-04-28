import React from "react"
import HeroComponent from "../HeroComponent/HeroComponent"
import TextComponent from "../TextComponent/TextComponent"
import BackgroundImage from "../HeroComponent/BackgroundImage"
import TourCard from "../TourCardComponent/TourCard"
import { Link } from "gatsby"

const LocationIndex = ({
  page,
  heroH1,
  heroP,
  title1,
  paragraph1,
  paragraph2,
  paragraph3,
  bgImageMidPage,
  shortList,
  bgImageLowPage,
  title4,
  paragraph4,
  link,
}) => {
  return (
    <main>
      <HeroComponent page={page} h1={heroH1} p={heroP} />
      <div className="mt-[85vh]"></div>
      <TextComponent title={title1} paragraph={paragraph1} className="" />
      <TextComponent paragraph={paragraph2} className="" />
      <TextComponent paragraph={paragraph3} className="" />
      <div className="mt-5">
        <BackgroundImage page={bgImageMidPage} />
      </div>
      <div className="mt-5">
        <TextComponent title="Our Best Tours" className="" />
      </div>
      <div className="max-w-6xl flex flex-col md:flex-row flex-wrap justify-center md:justify-around  items-center mx-2 lg:mx-auto mb-5">
        {shortList.map(tour => {
          return <TourCard key={tour.id} tour={tour} />
        })}
      </div>
      <BackgroundImage page={bgImageLowPage} />
      <div className="my-5">
        <TextComponent title={title4} paragraph={paragraph4} className="" />
      </div>
      <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-5 md:p-6 lg:p-2 xl:mx-auto">
        <Link to={link}>
          <h5 className="text-2xl border-b-2 font-semibold mb-5 md:text-4xl">
            More Tours
          </h5>
        </Link>
      </div>
    </main>
  )
}

export default LocationIndex
