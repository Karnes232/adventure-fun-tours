import * as React from "react"
import Layout from "../../components/layout"
import sosuaTours from "../../data/tours/sosuaTours"
import LocationIndex from "../../components/Location/LocationIndex"
const IndexPage = () => {
  const shortList = sosuaTours.slice(0, 6)
  return (
    <Layout>
      <LocationIndex
        page="sosua"
        heroH1="Explore Sosua"
        heroP="Find awesome water sports, buggies, horseback riding, and more!"
        title1="A tropical paradise in the heart of the Dominican Republic"
        paragraph1="Welcome to Sosua, a charming beach town located on the north coast of the Dominican Republic. Known for its beautiful beaches, vibrant nightlife, and rich history, Sosua is a popular destination for travelers seeking a mix of relaxation and adventure."
        paragraph2="One of the main draws of Sosua is its stunning beaches. The town is home to two main beaches: Playa Sosua and Playa Alicia. Both offer crystal-clear waters, white sand, and plenty of opportunities for swimming, sunbathing, and water sports such as snorkeling and scuba diving."
        paragraph3="But Sosua isn't just about beaches and nightlife. The town also offers plenty of opportunities for adventure and exploration. Take a catamaran tour of the coast, go horseback riding through the countryside, or explore the nearby El Choco National Park."
        bgImageMidPage="indexMid"
        shortList={shortList}
        bgImageLowPage="sosua2"
        title4="Create memories that will last a lifetime!"
        paragraph4="Whether you're seeking relaxation, adventure, or a little bit of both, Sosua has something for everyone. With its warm weather, stunning natural beauty, and vibrant culture, it's no wonder why it's one of the most popular destinations in the Caribbean. So come explore Sosua with us and create memories that will last a lifetime!"
        link="/sosua/tours"
      />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Sosua - Adventure Fun Tours</title>
