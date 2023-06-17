import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper"

import useWindowWidth from "../../customHooks/useWindowWidth"
const SwiperCarousel = ({ tour }) => {
  const windowWidth = useWindowWidth()

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
        className="mySwiper h-[25vh] md:h-[35vh] lg:h-[45vh]"
      >
        {tour.photos.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={windowWidth < 600 ? image.mobile : image.desktop}
              className="h-[25vh] md:h-[35vh] lg:h-[45vh] object-cover w-full"
              alt={tour.name}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default SwiperCarousel
