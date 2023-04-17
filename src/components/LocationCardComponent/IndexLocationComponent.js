import React from "react"
import LocationCardComponent from "./LocationCardComponent"
import { locations } from "../../data/locations"

const IndexLocationComponent = () => {
  return (
    <div className="hidden max-w-6xl lg:flex flex-col lg:flex-row flex-wrap justify-center md:justify-around  items-center mx-2 lg:mx-auto mb-5">
      {locations.map(location => {
        return <LocationCardComponent location={location} />
      })}
    </div>
  )
}

export default IndexLocationComponent
