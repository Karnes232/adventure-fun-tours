import React from 'react'
import HeroComponent from './HeroComponent'
import AvailableComponent from './AvailableComponent'
import SwiperCarousel from '../BackgroundCarousel/SwiperCarousel'
import TextComponent from './TextComponent'
import IncludedComponent from './IncludedComponent'
import GoodInfo from './GoodInfo'
import ExtraInfo from './ExtraInfo'
import BackgroundVideo from '../BackgroundVideo/BackgroundVideo'

const TourPage = ({tour}) => {
  return (
    <>
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
          {tour.extras && <ExtraInfo extras={tour.extras}/>} 
          </div>
          {tour.video && (
            <BackgroundVideo video={tour.video} className="bg-video-courses" />
          )}
        </main>
      )}
    </>
  )
}

export default TourPage