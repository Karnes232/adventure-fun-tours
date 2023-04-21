import React from "react"
import BackgroundImage from "react-background-image"
const HeroComponent = ({ image }) => {
  return (
    <>
    <div className="absolute top-0 w-full h-[25vh] lg:h-[30vh]">
      {image && (
        <BackgroundImage
          placeholder={image}
          src={image}
          className="myCustomClass"
        ></BackgroundImage>
      )}
    </div>
    <div className="mt-[30vh]"></div>
    </>
  )
}

export default HeroComponent
