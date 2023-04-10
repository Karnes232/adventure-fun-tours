import React from "react"
import Layout from "../../components/layout"
import HeroComponent from "../../components/HeroComponent/HeroComponent"

const index = () => {
  return (
    <Layout>
      <main>
        <HeroComponent page="indexMid" h1="About Us" />
        <div className="mt-[85vh]"></div>
      </main>
    </Layout>
  )
}

export default index
