import { uid } from "uid"
import scubaPhoto from "../../../images/tours/scuba.webp"
import photo1 from "../../../images/tours/scuba/courseCard1.webp"
import photo2 from "../../../images/tours/scuba/courseCard2.webp"
import photo3 from "../../../images/tours/scuba/courseCard3.webp"

import video from '../../../videos/scubaHero.mp4'
const scuba = {
  id: uid(),
  name: "Scuba Punta Cana",
  link: "/puntacana/tours/scuba/",
  img: scubaPhoto,
  price: "120",
  location: "Punta Cana",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non consequatur voluptatem deserunt, delectus est deleniti. Illum, incidunt",
  tourPage: {
    title1: "Advanced Open Water Diver",
    paragraph1: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non consequatur voluptatem deserunt, delectus est deleniti. Illum, incidunt ab at accusamus corporis voluptates qui itaque reiciendis repudiandae doloremque sapiente ducimus iusto et ex magnam. Sed molestias quibusdam dolorum, quos vitae sequi autem perspiciatis aut ab obcaecati fuga eum tempore inventore maxime!',
    title2: "Advanced Open Water Diver",
    paragraph2: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non consequatur voluptatem deserunt, delectus est deleniti. Illum, incidunt ab at accusamus corporis voluptates qui itaque reiciendis repudiandae doloremque sapiente ducimus iusto et ex magnam. Sed molestias quibusdam dolorum, quos vitae sequi autem perspiciatis aut ab obcaecati fuga eum tempore inventore maxime!'
  },
  photos: [photo1, photo2, photo3],
  video: video
}

export default scuba
