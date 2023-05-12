import { uid } from "uid"

const mainPhoto = "https://i.postimg.cc/pXty9kbZ/scubadoo2.webp"
const photo1 = "https://i.postimg.cc/VstdLpTv/scubadoo1.webp"
const photo2 = "https://i.postimg.cc/02dj7m9q/scubadoo3.webp"
const photo3 = "https://i.postimg.cc/kgJ4s45R/scubadoo4.webp"
const photo4 = "https://i.postimg.cc/Jnf055yR/scubadoo5.webp"
const photo5 = "https://i.postimg.cc/Kjtzq3LB/scubadoo6.webp"

const video =
  "https://ik.imagekit.io/adventureTours/AdventureTours/PuntaCana/puntacana-scubadoo.mp4"
const scubaDoo = {
  id: uid(),
  name: "Scuba Doo",
  location: "Punta Cana",
  link: "/puntacana/tours/scubadoo/",
  img: mainPhoto,
  price: "80",
  cost: "35",
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

  photos: [photo1, photo2, photo3, mainPhoto, photo4, photo5],
  video: video,
  videoPhone: videoPhone,
}
export default scubaDoo
