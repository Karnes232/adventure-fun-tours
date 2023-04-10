import React from "react"
import Layout from "../../components/layout"
import HeroComponent from "../../components/HeroComponent/HeroComponent"
import TextComponent from "../../components/TextComponent/TextComponent"
import image from "../../images/tours/horse.jpg"
const index = () => {
  return (
    <Layout>
      <main>
        <HeroComponent page="indexMid" h1="About Us" />
        <div className="mt-[80vh] xl:mt-[85vh]"></div>
        <div className="max-w-6xl mx-auto space-y-4 p-4 flex flex-col md:flex-row justify-center items-center">
          <TextComponent
            title="Title about Us"
            paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non consequatur voluptatem deserunt, delectus est deleniti. Illum, incidunt ab at accusamus corporis voluptates qui itaque reiciendis repudiandae doloremque sapiente ducimus iusto et ex magnam. Sed molestias quibusdam dolorum, quos vitae sequi autem perspiciatis aut ab obcaecati fuga eum tempore inventore maxime!"
            className=""
          />
          <div className="w-full flex justify-center items-center mx-5 my-5">
            <img
              src={image}
              alt=""
              className="h-auto lg:max-w-sm xl:max-w-md rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
            />
          </div>
        </div>
        <div className="max-w-6xl mx-auto space-y-4 my-5 flex flex-col md:flex-row justify-center items-center">
          <TextComponent
            title="Title about Us"
            paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non consequatur voluptatem deserunt, delectus est deleniti. Illum, incidunt ab at accusamus corporis voluptates qui itaque reiciendis repudiandae doloremque sapiente ducimus iusto et ex magnam. Sed molestias quibusdam dolorum, quos vitae sequi autem perspiciatis aut ab obcaecati fuga eum tempore inventore maxime!"
            className=""
          />
          <TextComponent
            title="Title about Us"
            paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non consequatur voluptatem deserunt, delectus est deleniti. Illum, incidunt ab at accusamus corporis voluptates qui itaque reiciendis repudiandae doloremque sapiente ducimus iusto et ex magnam. Sed molestias quibusdam dolorum, quos vitae sequi autem perspiciatis aut ab obcaecati fuga eum tempore inventore maxime!"
            className=""
          />
        </div>
      </main>
    </Layout>
  )
}

export default index
