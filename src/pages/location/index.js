import React from "react"
import HeroComponent from "../../components/HeroComponent/HeroComponent"
import Layout from "../../components/layout"
import TextComponent from "../../components/TextComponent/TextComponent"
import locations from "../../data/locations"
import LocationCardComponent from "../../components/LocationCardComponent/LocationCardComponent"
const index = () => {
  return (
    <Layout>
      <main>
        <HeroComponent page="indexMid" h1="Our Locations" p="" />
        <div className="mt-[85vh]"></div>
        <TextComponent title="Choose your Location" className="" />
        <div className="max-w-6xl flex flex-col md:flex-row flex-wrap justify-center md:justify-around  items-center mx-2 lg:mx-auto mb-5">
          {locations.map((location, index) => {
            return (
              <LocationCardComponent
                location={location}
                my={"my-2"}
                key={index}
              />
            )
          })}
        </div>
      </main>
    </Layout>
  )
}

export default index

export const Head = () => (
  <>
    <Seo
      title="Adventure Fun Tours - Exciting Adventures in Punta Cana, Sosua, and More"
      description="Discover a world of thrilling adventures with Adventure Fun Tours in Punta Cana, Sosua, and beyond. Dive into crystal-clear waters, explore vibrant coral reefs, embark on adrenaline-pumping excursions, and immerse yourself in the natural beauty of these breathtaking locations. Whether you're seeking scuba diving, snorkeling, party boat tours, horseback riding, or more, Adventure Fun Tours has you covered. Experience the best of each destination with our expert guides and top-notch equipment. Book your adventure today and create unforgettable memories with Adventure Fun Tours."
    />
  </>
)
