import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import { EffectCoverflow, Pagination } from "swiper"
import { locations } from "../../data/locations"
import LocationCardComponent from "./LocationCardComponent"

const SwiperLocationCarousel = () => {
  return (
    <div className="lg:hidden max-w-6xl mx-2 lg:mx-auto mb-5">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {locations.map(location => {
          return (
            <SwiperSlide key={location.id}>
              <LocationCardComponent location={location} my={"mx-auto"} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default SwiperLocationCarousel
