import { Link } from "gatsby"
import React from "react"

const LocationCardComponent = ({ location, my }) => {
  const { name, link, img } = location
  console.log(link)
  return (
    <>
      <div className={`w-[90vw] md:w-80 h-64 ${my} md:my-6 rounded-lg`}>
        <Link to={link}>
          <div className="flip-card-inner rounded-lg">
            <div className="flip-card-front rounded-lg">
              <img
                className="rounded-lg w-[90vw] md:w-80 h-64 object-cover brightness-[.6]"
                src={img}
                alt={name}
              />
              <div className="absolute location-centered text-primary-color">
                <p className="text-3xl font-semibold">{name}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default LocationCardComponent
