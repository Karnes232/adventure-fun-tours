import React from 'react'

const FrontCard = ({tour}) => {
  return (
    <div className="flip-card-front rounded-lg">
            <img className="rounded-lg w-[90vw] md:w-80 h-96 object-cover brightness-[.6]" src={tour.img} alt={tour.name} />
            <div className="absolute bottom-3 left-3 text-primary-color">
              <p className="text-lg">{tour.name}</p>
              <p className="text-start">${tour.price}</p>
            </div>
          </div>
  )
}

export default FrontCard