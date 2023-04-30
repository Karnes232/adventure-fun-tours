import { uid } from "uid"
// import mainPhoto from "../../../images/tours/somelink"
// import photo1 from "../../../images/tours/somelink"
// import photo2 from "../../../images/tours/somelink"
// import photo3 from "../../../images/tours/somelink"

// import video from "../../../videos/somelink"

const mainPhoto = 'https://i.postimg.cc/7LSWbsDz/taiguey7.webp'
const photo1 = 'https://i.postimg.cc/Qtsn7Qxy/taiguey1.webp'
const photo2 = 'https://i.postimg.cc/hvtyyKm8/taiguey2.webp'
const photo3 = 'https://i.postimg.cc/brV64407/taiguey3.webp'
const photo4 = 'https://i.postimg.cc/fLKqfVVT/taiguey4.webp'
const photo5 = 'https://i.postimg.cc/m2hp72BB/taiguey5.webp'
const photo6 = 'https://i.postimg.cc/XNsDZyMs/taiguey6.webp'

const partyBoat = {
  id: uid(),
  name: "Party Boat",
  location: "",
  link: "",
  img: mainPhoto,
  price: "",
  cost: "",
  description: "",
  tourPage: {
    title1: "",
    paragraph1: "",
    title2: "",
    paragraph2: "",
    title3: "",
    paragraph3: "",
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

  photos: [photo1, photo2, photo3],
  video: video,
}
export default partyBoat
