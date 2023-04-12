import React from 'react'
import Layout from '../../components/layout'
import HeroComponent from '../../components/HeroComponent/HeroComponent'
import ContactForm from '../../components/ContactForm/ContactForm'

const index = () => {
  return (
    <Layout>
        <HeroComponent page="indexMid" h1="Contact Us" />
        <div className="mt-[80vh] xl:mt-[85vh]"></div>
        <ContactForm/>
    </Layout>
  )
}

export default index