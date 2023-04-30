import { uid } from "uid"
const mainPhoto = 'https://i.postimg.cc/pXKWDGpk/catalina2.webp'
const photo1 = 'https://i.postimg.cc/HjDNYtmk/catalina1.webp'
const photo2 = 'https://i.postimg.cc/7hf4G9j1/catalina3.webp'
const photo3 = 'https://i.postimg.cc/1zsZcsL3/catalina4.webp'
const photo4 = 'https://i.postimg.cc/nLGp6Cvm/catalina5.webp'
const photo5 = 'https://i.postimg.cc/g29pjvsR/catalina6.webp'
const photo6 = 'https://i.postimg.cc/sXfsyscN/catalina7.webp'
const photo7 = 'https://i.postimg.cc/Y0ZH1gw5/catalina8.webp'
const photo = 'https://i.postimg.cc/VL01z7qm/catalina9.webp'

// import video from "../../../videos/somelink"
const catalinaDiving = {
  id: uid(),
  name: "Catalina Scuba Diving",
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
export default catalinaDiving
