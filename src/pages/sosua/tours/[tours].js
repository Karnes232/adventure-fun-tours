import React from "react"

import sosuaTours from "../../../data/tours/sosuaTours"
import Layout from "../../../components/layout"
import TourPage from "../../../components/TourPageComponents/TourPage"
const tour = ({ location }) => {
  const tour = sosuaTours.find(({ link }) => link === location.pathname)
  return (
    <Layout>
      <TourPage tour={tour}/>
    </Layout>
  )
}

export default tour
