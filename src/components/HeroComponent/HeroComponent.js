import React from "react"

const HeroComponent = ({ page, h1, p }) => {
  return (
    <div className="absolute top-0 w-full h-[75vh] lg:h-[80vh]">
      <div className={`hero bgImage ${page}`}>
        <div className="hero-text flex flex-col justify-center items-center text-primary-color w-11/12 md:w-9/12 lg:w-6/12 xl:w-4/12">
          {h1 && <h1 className="text-4xl md:text-6xl font-bold mb-6">{h1}</h1>}
          {p && <p className="text-lg md:text-2xl font-light xl:w-3/4">{p}</p>}
        </div>
      </div>
    </div>
  )
}

export default HeroComponent
