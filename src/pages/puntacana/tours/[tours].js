import React from "react"

import puntacanaTours from "../../../data/tours/puntacanaTours"
import Layout from "../../../components/layout"
import TourPage from "../../../components/TourPageComponents/TourPage"
const tour = ({ location }) => {
  const tour = puntacanaTours.find(({ link }) => link === location.pathname)
  return (
    <Layout>
      <TourPage tour={tour} />
    </Layout>
  )
}

export default tour
