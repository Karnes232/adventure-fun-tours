import { uid } from "uid"
const mainPhoto = "https://i.postimg.cc/GtPmcTtH/saona1.webp"
const photo1 = "https://i.postimg.cc/qqH7VxkP/saona2.webp"
const photo2 = "https://i.postimg.cc/02xNVnXm/saona3.webp"
const photo3 = "https://i.postimg.cc/tC54w68c/saona4.webp"

const videoPhone =
  "https://ik.imagekit.io/adventureTours/AdventureTours/PuntaCana/saona-phone.mp4"
const video =
  "https://ik.imagekit.io/adventureTours/AdventureTours/PuntaCana/saona.mp4"
const saona = {
  id: uid(),
  name: "Saona Island",
  location: "Punta Cana",
  link: "/puntacana/tours/saona/",
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
  videoPhone: videoPhone,
}
export default saona
