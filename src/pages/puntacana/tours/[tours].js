import React from "react"

import { puntacanaTours } from "../../../data/tours/puntacanaTours"

const tour = ({ location }) => {
  const tour = puntacanaTours.find(({ link }) => link === location.pathname)
  return (
    <>
      {tour ? (
        <p className="text-lg md:text-2xl font-light xl:w-3/4">{tour.name}</p>
      ) : (
        <p className="text-lg md:text-2xl font-light xl:w-3/4">No Tour</p>
      )}
    </>
  )
}

export default tour
