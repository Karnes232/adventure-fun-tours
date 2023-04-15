import React from "react"

const LocationCardComponent = ({ location }) => {
  const { name, link, img } = location
  return (
    <>
      <div className="w-[90vw] md:w-80 h-96 my-2 md:my-6 rounded-lg">
        <div className="flip-card-inner rounded-lg">
          <div className="flip-card-front rounded-lg">
            <img
              className="rounded-lg w-[90vw] md:w-80 h-96 object-cover brightness-[.6]"
              src={img}
              alt={name}
            />
            <div className="absolute bottom-3 left-3 text-primary-color">
              <p className="text-lg">{name}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LocationCardComponent
