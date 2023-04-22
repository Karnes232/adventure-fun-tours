import { uid } from "uid"
import horsePhoto from "../../../images/tours/horse.jpg"
const horse = {
  id: uid(),
  name: "Horseback Riding",
  link: "/puntacana/tours/horse/",
  img: horsePhoto,
  price: "45",
  location: "Punta Cana",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non consequatur voluptatem deserunt, delectus est deleniti. Illum, incidunt",
    tourPage: {
      title1: "Advanced Open Water Diver",
      paragraph1: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non consequatur voluptatem deserunt, delectus est deleniti. Illum, incidunt ab at accusamus corporis voluptates qui itaque reiciendis repudiandae doloremque sapiente ducimus iusto et ex magnam. Sed molestias quibusdam dolorum, quos vitae sequi autem perspiciatis aut ab obcaecati fuga eum tempore inventore maxime!',
      title2: "Advanced Open Water Diver",
      paragraph2: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non consequatur voluptatem deserunt, delectus est deleniti. Illum, incidunt ab at accusamus corporis voluptates qui itaque reiciendis repudiandae doloremque sapiente ducimus iusto et ex magnam. Sed molestias quibusdam dolorum, quos vitae sequi autem perspiciatis aut ab obcaecati fuga eum tempore inventore maxime!'
    },
}

export default horse
