import * as React from "react"
import Layout from "../../components/layout"
import sosuaTours from "../../data/tours/sosuaTours"
import LocationIndex from "../../components/Location/LocationIndex"
const IndexPage = () => {
  const shortList = sosuaTours.slice(0, 6)
  return (
    <Layout>
      <LocationIndex 
      page="index"
      heroH1="Explore the Dominican Republic"
      heroP="Find awesome water sports, buggies, horseback riding, and more!"
      title1='With our experience we will serve you the best'
      paragraph1='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non consequatur voluptatem deserunt, delectus est deleniti. Illum, incidunt ab at accusamus corporis voluptates qui itaque reiciendis repudiandae doloremque sapiente ducimus iusto et ex magnam. Sed molestias quibusdam dolorum, quos vitae sequi autem perspiciatis aut ab obcaecati fuga eum tempore inventore maxime!'
      paragraph2='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non consequatur voluptatem deserunt, delectus est deleniti. Illum, incidunt ab at accusamus corporis voluptates qui itaque reiciendis repudiandae doloremque sapiente ducimus iusto et ex magnam. Sed molestias quibusdam dolorum, quos vitae sequi autem perspiciatis aut ab obcaecati fuga eum tempore inventore maxime!'
      bgImageMidPage='indexMid'
      shortList={shortList}
      bgImageLowPage='indexLower'
      title3='With our experience we will serve you the best'
      paragraph3='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non consequatur voluptatem deserunt, delectus est deleniti. Illum, incidunt ab at accusamus corporis voluptates qui itaque reiciendis repudiandae doloremque sapiente ducimus iusto et ex magnam. Sed molestias quibusdam dolorum, quos vitae sequi autem perspiciatis aut ab obcaecati fuga eum tempore inventore maxime!'
      link='/sosua/tours'
    />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>