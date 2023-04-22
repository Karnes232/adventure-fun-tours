import React from "react"

import puntacanaTours from "../../../data/tours/puntacanaTours"
import Layout from "../../../components/layout"
import HeroComponent from "../../../components/TourPageComponents/HeroComponent"
import TextComponent from "../../../components/TextComponent/TextComponent"

const tour = ({ location }) => {
  const tour = puntacanaTours.find(({ link }) => link === location.pathname)
  return (
    <Layout>{tour && (
      <main>
        <HeroComponent image={tour.img} />
        <TextComponent title={tour.name} paragraph={tour.description} />
      </main>
      )}
    </Layout>
  )
}

export default tour
