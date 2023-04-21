import React from "react"

import FrontCard from "./FrontCard"
import BackCard from "./BackCard"
const TourCard = ({ tour }) => {
  return (
    <>
      <div className="flip-card w-[90vw] md:mx-auto md:w-80 h-96 my-2 md:my-6 rounded-lg">
        <div className="flip-card-inner rounded-lg">
          <FrontCard tour={tour} />
          <BackCard tour={tour}/>
        </div>
      </div>
    </>
  )
}

export default TourCard
