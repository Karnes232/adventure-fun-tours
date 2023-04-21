import React from "react"
import TextComponent from "../TextComponent/TextComponent"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import { EffectCoverflow, Pagination } from "swiper"
import TourCard from "./TourCard"

const SwiperCarousel = ({ title, tours }) => {
  return (
    <>
      <div className="mt-5">
        <TextComponent title={title} className="" />
      </div>
      <div className="max-w-6xl flex flex-col md:flex-row flex-wrap justify-center md:justify-around  items-center mx-2 lg:mx-auto mb-5">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {tours.map(tour => {
            return (
              <SwiperSlide key={tour.id}>
                <TourCard tour={tour} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </>
  )
}

export default SwiperCarousel
