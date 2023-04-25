import React from "react"
import BackgroundImage from "react-background-image"
const HeroComponent = ({ image }) => {
  return (
    <>
      <div className="absolute top-0 w-full h-[75vh] lg:h-[80vh]">
        {image && (
          <BackgroundImage
            placeholder={image}
            src={image}
            className="myCustomClass"
          ></BackgroundImage>
        )}
      </div>
      <div className="h-[75vh] lg:h-[80vh]"></div>
    </>
  )
}

export default HeroComponent
