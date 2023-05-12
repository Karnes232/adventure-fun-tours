import { uid } from "uid"
const video =
  "https://ik.imagekit.io/adventureTours/AdventureTours/Sosua/sosua-buggie.mp4"
const mainPhoto = "https://i.postimg.cc/Dy5Wxp9G/Sosua-Buggie10.webp"
const photo1 = "https://i.postimg.cc/HnzLPjhm/Sosua-Buggie.webp"
const photo2 = "https://i.postimg.cc/wMgvVDFF/Sosua-Buggie2.webp"
const photo3 = "https://i.postimg.cc/FRjz3Tb7/Sosua-Buggie3.webp"
const photo4 = "https://i.postimg.cc/nhPXJjcc/Sosua-Buggie4.webp"
const photo5 = "https://i.postimg.cc/vHGgLwNM/Sosua-Buggie5.webp"
const photo6 = "https://i.postimg.cc/nhzXgYxP/Sosua-Buggie6.webp"
const photo7 = "https://i.postimg.cc/SKYJNSJL/Sosua-Buggie8.webp"
const photo8 = "https://i.postimg.cc/jqHn7SvZ/Sosua-Buggie7.webp"
const photo9 = "https://i.postimg.cc/V6y5JxCx/Sosua-Buggie9.webp"

const buggy = {
  id: uid(),
  name: "Buggy Tour",
  location: "Sosua",
  link: "/sosua/tours/buggy/",
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
  ],
  video: video,
  videoPhone: videoPhone,
}
export default buggy
