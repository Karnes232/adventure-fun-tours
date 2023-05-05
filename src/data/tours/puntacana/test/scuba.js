import { uid } from "uid"
import video from "../../../../videos/scubaHero.mp4"
const mainPhoto = "https://i.postimg.cc/HjDNYtmk/catalina1.webp"
const photo1 = "https://i.postimg.cc/pXKWDGpk/catalina2.webp"
const photo2 = "https://i.postimg.cc/7hf4G9j1/catalina3.webp"
const photo3 = "https://i.postimg.cc/1zsZcsL3/catalina4.webp"
const photo4 = "https://i.postimg.cc/nLGp6Cvm/catalina5.webp"
const photo5 = "https://i.postimg.cc/g29pjvsR/catalina6.webp"
const photo6 = "https://i.postimg.cc/sXfsyscN/catalina7.webp"
const photo7 = "https://i.postimg.cc/Y0ZH1gw5/catalina8.webp"
const photo8 = "https://i.postimg.cc/VL01z7qm/catalina9.webp"

const scuba = {
  id: uid(),
  name: "Scuba Punta Cana",
  link: "/puntacana/tours/scuba/",
  img: mainPhoto,
  price: "120",
  cost: "",
  location: "Punta Cana",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non consequatur voluptatem deserunt, delectus est deleniti. Illum, incidunt",
  tourPage: {
    title1: "Advanced Open Water Diver",
    paragraph1:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non consequatur voluptatem deserunt, delectus est deleniti. Illum, incidunt ab at accusamus corporis voluptates qui itaque reiciendis repudiandae doloremque sapiente ducimus iusto et ex magnam. Sed molestias quibusdam dolorum, quos vitae sequi autem perspiciatis aut ab obcaecati fuga eum tempore inventore maxime!",
    title2: "Advanced Open Water Diver",
    paragraph2:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non consequatur voluptatem deserunt, delectus est deleniti. Illum, incidunt ab at accusamus corporis voluptates qui itaque reiciendis repudiandae doloremque sapiente ducimus iusto et ex magnam. Sed molestias quibusdam dolorum, quos vitae sequi autem perspiciatis aut ab obcaecati fuga eum tempore inventore maxime!",
    title3: "Advanced Open Water Diver",
    paragraph3:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non consequatur voluptatem deserunt, delectus est deleniti. Illum, incidunt ab at accusamus corporis voluptates qui itaque reiciendis repudiandae doloremque sapiente ducimus iusto et ex magnam. Sed molestias quibusdam dolorum, quos vitae sequi autem perspiciatis aut ab obcaecati fuga eum tempore inventore maxime!",
  },
  available: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  included: ["transportation", "Open Bar", "Lunch"],
  goodInfo: [
    "Bring your bathing suit and sunscreen",
    "All guests must be mobile and in good physical condition",
    "Transportation may not be available from some resorts or may be subject to an additional fee",
  ],
  extras: {
    duration: "8 hours (approx.)",
    minAge: "Suitable for all ages",
    pregnant: "No",
    pickUp: "Yes",
  },

  photos: [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    mainPhoto,
  ],
  video: video,
}

export default scuba
