import React from "react"
import Layout from "../../components/layout"
import HeroComponent from "../../components/HeroComponent/HeroComponent"
import ContactForm from "../../components/ContactForm/ContactForm"

const index = () => {
  return (
    <Layout>
      <HeroComponent page="indexMid" h1="Contact Us" />
      <div className="mt-[80vh] xl:mt-[85vh]"></div>
      <ContactForm />
    </Layout>
  )
}

export default index

export const Head = () => (
  <>
    <Seo
      title="Contact Adventure Fun Tours - Get in Touch for Unforgettable Adventures"
      description="Contact Adventure Fun Tours to inquire about our thrilling adventures and book your next unforgettable experience. Our friendly and knowledgeable team is ready to assist you with any questions you may have. Whether you're interested in scuba diving, snorkeling, party boat tours, horseback riding, or any other exciting activity, we're here to help. Reach out to Adventure Fun Tours today and let us guide you towards the adventure of a lifetime."
    />
  </>
)
