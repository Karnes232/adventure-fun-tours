import React from "react"
import Layout from "../../components/layout"
import HeroComponent from "../../components/HeroComponent/HeroComponent"
import TextComponent from "../../components/TextComponent/TextComponent"
import image from "../../images/dominican6.webp"
const index = () => {
  return (
    <Layout>
      <main>
        <HeroComponent page="indexMid" h1="About Us" />
        <div className="mt-[80vh] xl:mt-[85vh]"></div>
        <div className="max-w-6xl mx-auto space-y-4 p-4 flex flex-col md:flex-row justify-center items-center">
          <TextComponent
            paragraph="Welcome to Adventure Fun Tours, your premier provider of tours and activities in the  Republic. We are a locally owned and operated company, and we are passionate about sharing the natural beauty, vibrant culture, and rich history of our country with visitors from all over the world."
            className=""
          />
          <div className="w-full flex justify-center items-center mx-5 my-5">
            <img
              loading="lazy"
              src={image}
              alt=""
              className="h-auto lg:max-w-sm xl:max-w-md rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
            />
          </div>
        </div>
        <div className="max-w-6xl mx-auto space-y-4 md:space-y-0 my-5 flex flex-col md:flex-row justify-center items-center">
          <TextComponent
            paragraph="At Adventure Fun Tours, we believe that travel should be more than just a vacation - it should be an experience. That's why we offer a wide range of tours and activities that are designed to immerse you in the best that the  Republic has to offer. Whether you're looking for a relaxing beach day, a thrilling adventure, or an insightful cultural experience, we have something for everyone."
            className=""
          />
          <TextComponent
            paragraph="Our team is made up of experienced professionals who are dedicated to providing exceptional service to our customers. From the moment you book your tour with us, our goal is to make your experience as smooth and enjoyable as possible. We take care of all the details, from transportation to guides to equipment, so that you can simply relax and enjoy your time in the  Republic."
            className=""
          />
        </div>
        <div className="max-w-6xl mx-auto space-y-4 md:space-y-0 my-5 flex flex-col md:flex-row items-center">
          <TextComponent
            paragraph="We also take great pride in giving back to our community. We believe that responsible tourism is about more than just showing visitors a good time - it's about supporting local businesses, protecting the environment, and promoting cultural exchange. That's why we work with local suppliers, hire knowledgeable guides from the community, and implement eco-friendly practices in all of our operations."
            className=""
          />
          <TextComponent
            paragraph="So whether you're a first-time visitor to the  Republic or a seasoned traveler, we invite you to join us for an unforgettable experience. Discover the beauty, culture, and adventure of our country with Adventure Fun Tours, your trusted partner for tours and activities in the  Republic."
            className=""
          />
        </div>
      </main>
    </Layout>
  )
}

export default index

export const Head = () => (
  <>
    <Seo
      title="About Adventure Fun Tours - Unveiling the Essence of Unforgettable Adventures"
      description="Discover the story behind Adventure Fun Tours and our commitment to providing unforgettable adventures. Learn about our passion for exploration, dedication to customer satisfaction, and the range of thrilling experiences we offer. From scuba diving and snorkeling to party boat tours and horseback riding, our team is here to make your adventure dreams come true. Explore our About Us page to get to know Adventure Fun Tours and embark on an extraordinary journey with us."
    />
  </>
)
