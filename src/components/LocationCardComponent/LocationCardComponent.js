import { Link } from "gatsby"
import React from "react"

const LocationCardComponent = ({ location, my }) => {
  const { name, link, img } = location
  return (
    <>
      <div className={`w-[90vw] md:w-80 h-64 ${my} md:my-6 rounded-2xl`}>
        <Link to={link}>
          <div className="flip-card-inner rounded-2xl">
            <div className="flip-card-front rounded-2xl">
              <img
                className="rounded-2xl w-[90vw] md:w-80 h-64 object-cover brightness-[.6]"
                src={img}
                alt={name}
              />
              <div className="absolute location-centered text-primary-color">
                <p className="text-3xl font-semibold font-serif">{name}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default LocationCardComponent
