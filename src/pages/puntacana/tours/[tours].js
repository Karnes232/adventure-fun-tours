import React from "react"

import { puntacanaTours } from "../../../data/tours/puntacanaTours"
import Layout from "../../../components/layout"
import HeroComponent from "../../../components/TourPageComponents/HeroComponent"

const tour = ({ location }) => {
  const tour = puntacanaTours.find(({ link }) => link === location.pathname)
  console.log(tour)
  return (
    <Layout>
      <main>
        <HeroComponent image={tour.img} />
      </main>
      {tour ? (
        <p className="text-lg md:text-2xl font-light xl:w-3/4">{tour.name}</p>
      ) : (
        <p className="text-lg md:text-2xl font-light xl:w-3/4">No Tour</p>
      )}
    </Layout>
  )
}

export default tour
