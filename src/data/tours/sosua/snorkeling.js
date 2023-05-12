import { uid } from "uid"
const mainPhoto = "https://i.postimg.cc/3Rp6hsyx/snorkel10.webp"
const photo1 = "https://i.postimg.cc/TYktzdkc/snorkel.webp"
const photo2 = "https://i.postimg.cc/D06xyn7n/snorkel1.webp"
const photo3 = "https://i.postimg.cc/SRfv2cf0/snorkel11.webp"
const photo4 = "https://i.postimg.cc/wvKfwwW8/snorkel2.webp"
const photo5 = "https://i.postimg.cc/3JrLf4ZR/snorkel3.webp"
const photo6 = "https://i.postimg.cc/50wPT8GH/snorkel4.webp"
const photo7 = "https://i.postimg.cc/fWcFrhnH/snorkel5.webp"
const photo8 = "https://i.postimg.cc/RZFDh638/snorkel6.webp"
const photo9 = "https://i.postimg.cc/HngNk654/snorkel7.webp"
const photo10 = "https://i.postimg.cc/jdv1RQjP/snorkel8.webp"
const photo11 = "https://i.postimg.cc/DwMYXvLz/snorkel9.webp"

// import video from "../../../videos/somelink"
const snorkeling = {
  id: uid(),
  name: "Snorkeling Tour",
  location: "Sosua",
  link: "/sosua/tours/snorkel/",
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

  photos: [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
  ],
  video: video,
  videoPhone: videoPhone,
}
export default snorkeling
