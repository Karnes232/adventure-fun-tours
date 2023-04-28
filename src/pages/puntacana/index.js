import * as React from "react"
import Layout from "../../components/layout"
import puntacanaTours from "../../data/tours/puntacanaTours"
import LocationIndex from "../../components/Location/LocationIndex"
const IndexPage = () => {
  const shortList = puntacanaTours.slice(0, 6)
  return (
    <Layout>
      <LocationIndex
        page="puntaCana"
        heroH1="Explore Punta Cana"
        heroP="Find awesome water sports, buggies, horseback riding, and more!"
        title1="A tropical paradise in the heart of the Dominican Republic"
        paragraph1="Welcome to Punta Cana, a stunning coastal resort town located on the eastern coast of the Dominican Republic. Known for its pristine beaches, turquoise waters, and warm hospitality, Punta Cana is a popular destination for travelers looking for a tropical getaway."
        paragraph2="One of the main draws of Punta Cana is its beautiful beaches. The powdery white sands and crystal-clear waters are perfect for sunbathing, swimming, and water sports such as snorkeling and scuba diving. Some of the most popular beaches in Punta Cana include Bavaro Beach, Macao Beach, and Uvero Alto Beach."
        paragraph3="In addition to its beaches, Punta Cana offers plenty of opportunities for adventure and exploration. Take a zip line tour through the lush jungle canopy, go horseback riding along the beach, or explore the nearby coral reefs on a snorkeling or scuba diving excursion."
        bgImageMidPage="indexMid"
        shortList={shortList}
        bgImageLowPage="puntaCana2"
        title4="Create memories that will last a lifetime!"
        paragraph4="Whether you're seeking relaxation or adventure, Punta Cana has something for everyone. With its warm weather, stunning natural beauty, and vibrant culture, it's no wonder why it's one of the most popular destinations in the Caribbean. So come explore Punta Cana with us and create memories that will last a lifetime!"
        link="/puntacana/tours"
      />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Punta Cana - Adventure Fun Tours</title>
