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
        <HeroComponent
          page="indexMid"
          h1="Our Locations"
          p="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        />
        <div className="mt-[85vh]"></div>
        <TextComponent title="Choose your Location" className="" />
        <div className="max-w-6xl flex flex-col md:flex-row flex-wrap justify-center md:justify-around  items-center mx-2 lg:mx-auto mb-5">
          {locations.map(location => {
            return <LocationCardComponent location={location} my={"my-2"} />
          })}
        </div>
      </main>
    </Layout>
  )
}

export default index

export const Head = () => <title>Our Locations - Adventure Fun Tours</title>
