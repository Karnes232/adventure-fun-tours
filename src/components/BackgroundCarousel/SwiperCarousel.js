import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper"
const SwiperCarousel = ({ tour }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper h-[25vh]"
      >
        {tour.photos.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              className="h-[25vh] object-cover w-full"
              alt={tour.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default SwiperCarousel