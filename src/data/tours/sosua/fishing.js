import { uid } from "uid"
const mainPhoto = "https://i.postimg.cc/rpLcrNSs/fishing1.webp"
const photo1 = "https://i.postimg.cc/7LM4MJVV/fishing.webp"
const photo2 = "https://i.postimg.cc/Fs8h94zj/fishing2.webp"
const photo3 = "https://i.postimg.cc/dVCw3xZg/fishing3.webp"

// import video from "../../../videos/somelink"
const fishing = {
  id: uid(),
  name: "Fishing",
  location: "Sosua",
  link: "/sosua/tours/fishing/",
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

  photos: [photo1, photo2, photo3, mainPhoto],
  video: video,
  videoPhone: videoPhone,
}
export default fishing
