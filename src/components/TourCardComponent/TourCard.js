import React from "react"
import img from "../../images/background-index3.jpg"
const TourCard = () => {
  return (
    <>
      <div className="flip-card my-2 rounded-lg">
        <div className="flip-card-inner rounded-lg">
          <div className="flip-card-front rounded-lg">
            <img className='rounded-lg' src={img} alt="Avatar" />
          </div>
          <div className="flip-card-back  rounded-lg">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default TourCard
