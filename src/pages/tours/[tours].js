import React from "react"

import { tours } from "../../data/tours"

const tour = ({ location }) => {
  const tour = tours.find(({ link }) => link === location.pathname)
  return (
  // <div>{tour.name}</div>
  <div>test</div>
  )
}

export default tour
