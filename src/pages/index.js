import React, { Suspense } from "react"
import Layout from "../components/layout"
import HeroComponent from "../components/HeroComponent/HeroComponent"
import TextComponent from "../components/TextComponent/TextComponent"
import BackgroundImage from "../components/HeroComponent/BackgroundImage"
import puntacanaTours from "../data/tours/puntacanaTours"
import sosuaTours from "../data/tours/sosuaTours"
//import SwiperLocationCarousel from "../components/LocationCardComponent/SwiperLocationCarousel"
//import IndexLocationComponent from "../components/LocationCardComponent/IndexLocationComponent"
//import SwiperCarousel from "../components/TourCardComponent/SwiperCarousel"

const SwiperLocationCarousel = React.lazy(() =>
  import("../components/LocationCardComponent/SwiperLocationCarousel")
)
const IndexLocationComponent = React.lazy(() =>
  import("../components/LocationCardComponent/IndexLocationComponent")
)
const SwiperCarousel = React.lazy(() =>
  import("../components/TourCardComponent/SwiperCarousel")
)

const IndexPage = () => {
  const PCshortList = puntacanaTours.slice(0, 6)
  const SOSshortList = sosuaTours.slice(0, 6)
  return (
    <Layout>
      <main>
        <HeroComponent
          page="index"
          h1="Explore the Dominican Republic"
          p="Find awesome water sports, buggies, horseback riding, and more!"
        />
        <div className="mt-[85vh]"></div>
        <TextComponent
          title="Welcome to Dominican Republic"
          paragraph="A beautiful island nation located in the Caribbean. With its stunning natural beauty, rich history, and vibrant culture, the  Republic is a popular destination for travelers from around the world."
          className=""
        />
        <TextComponent
          paragraph="With so much to see and do in the  Republic, there are a wide range of tours available to suit every taste and interest. Whether you're looking to explore the country's history and culture, soak up the sun on its beautiful beaches, or get your adrenaline pumping with adventure activities, there's a tour for you."
          className=""
        />
        <TextComponent
          paragraph="One of the main draws of the  Republic is its beaches. The country boasts over 1,000 miles of coastline, with some of the most popular beaches located in Punta Cana, Sosua, and Samana. The beaches offer crystal-clear waters, soft sand, and plenty of opportunities for water sports such as snorkeling, scuba diving, and surfing."
          className=""
        />
        <div className="mt-5"></div>
        <BackgroundImage page="indexMid" />
        <div className="mt-5">
          <TextComponent title="Our Locations" className="" />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <SwiperLocationCarousel /> {/* Small/Medium Screen */}
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <IndexLocationComponent /> {/* Large Screen */}
        </Suspense>

        <BackgroundImage page="indexLower" />
        <Suspense fallback={<div>Loading...</div>}>
          <SwiperCarousel title="Punta Cana's Best Tours" tours={PCshortList} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <SwiperCarousel title="Sosua's Best Tours" tours={SOSshortList} />
        </Suspense>

        <TextComponent
          title="Create memories that will last a lifetime!"
          paragraph="No matter what your interests, taking a tour in the  Republic is a great way to make the most of your visit. With knowledgeable guides, comfortable transportation, and carefully planned itineraries, you can sit back, relax, and enjoy all that this amazing destination has to offer. So book your tour today and start exploring the  Republic!"
          className=""
        />
        <div className="mb-5"></div>
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <title>Adventure Fun Tours</title>
    <meta
      name="description"
      content="Tour Company located in Punta Cana, providing adventure for the family"
    />
  </>
)
