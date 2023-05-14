import React from "react"
import HeroComponent from "./HeroComponent"
import AvailableComponent from "./AvailableComponent"
import SwiperCarousel from "../BackgroundCarousel/SwiperCarousel"
import TextComponent from "./TextComponent"
import IncludedComponent from "./IncludedComponent"
import GoodInfo from "./GoodInfo"
import ExtraInfo from "./ExtraInfo"
import BackgroundVideo from "../BackgroundVideo/BackgroundVideo"
import Button from "./Button"

const TourPage = ({ tour }) => {
  return (
    <>
      {tour && (
        <main>
          {tour.img && <HeroComponent image={tour.img} />}
          <div className="max-w-6xl my-5 mx-5 md:mx-10 xl:mx-auto">
            {tour.name && (
              <div className="max-w-6xl my-2 xl:mx-auto">
                <h4 className="font-light text-3xl md:text-4xl tracking-wide">
                  {tour.name}
                </h4>
                <div className="flex flex-col md:flex-row md:justify-between">
                  <p className="font-extralight my-2 text-base md:text-lg tracking-wide">
                    {tour.location}
                  </p>
                  <Button text="Check Availability" customClass="" />
                </div>
              </div>
            )}
            {tour.available && (
              <AvailableComponent
                available={tour.available}
                price={tour.price}
              />
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
            <div className="my-5 max-w-6xl lg:mx-auto">
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
            <div className="flex flex-col lg:flex-row lg:space-x-8 lg:justify-center">
              {tour.included && <IncludedComponent included={tour.included} />}
              {tour.goodInfo && <GoodInfo goodInfo={tour.goodInfo} />}
              {tour.extras && <ExtraInfo extras={tour.extras} />}{" "}
            </div>
            <div className="mt-2">
              <Button text="Book Now" customClass="lg:px-20 lg:py-4" />
            </div>
          </div>

          {tour.video && (
            <BackgroundVideo
              video={tour.video}
              phoneVideo={tour.videoPhone}
              className=""
            />
          )}
        </main>
      )}
    </>
  )
}

export default TourPage
