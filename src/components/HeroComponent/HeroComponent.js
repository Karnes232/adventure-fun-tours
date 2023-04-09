import React from "react"

const HeroComponent = ({ page }) => {
  return (
    <div className="absolute top-0 w-full h-[75vh] lg:h-[80vh]">
      <div className={`hero bgImage ${page}`}>
        <div className="hero-text flex flex-col justify-center items-center text-gray-200 w-11/12 md:w-9/12 lg:w-6/12 xl:w-4/12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Explore the Dominican Republic
          </h1>
          <p className="text-lg md:text-2xl font-light xl:w-3/4">
            Find awesome water sports, buggies, horseback riding, and more!
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroComponent
