import { uid } from "uid"
// import videoPhone from "../../../videos/sosua/partySosua-phone.mp4"
// import video from "../../../videos/sosua/partySosua.mp4"
const videoPhone =
  "https://ik.imagekit.io/adventureTours/AdventureTours/Sosua/partySosua-phone.mp4"
const video =
  "https://ik.imagekit.io/adventureTours/AdventureTours/Sosua/partySosua.mp4"
const mainPhoto = "https://i.postimg.cc/gjCPscbm/party16.webp"
const photo1 = "https://i.postimg.cc/BQJWqzZh/party.webp"
const photo2 = "https://i.postimg.cc/PrygNMPd/party1.webp"
const photo3 = "https://i.postimg.cc/zfb6tZpf/party10.webp"
const photo4 = "https://i.postimg.cc/sx9tYYm9/party11.webp"
const photo7 = "https://i.postimg.cc/mrLW86Jz/party14.webp"
const photo8 = "https://i.postimg.cc/HWRHdzcR/party15.webp"
const photo9 = "https://i.postimg.cc/Hn7qrGcK/party17.webp"
const photo10 = "https://i.postimg.cc/XJhMNNJd/party18.webp"
const photo11 = "https://i.postimg.cc/HxjDC8pT/party19.webp"
const photo12 = "https://i.postimg.cc/nhL6mQDB/party2.webp"
const photo13 = "https://i.postimg.cc/Fzd40dqT/party20.webp"
const photo14 = "https://i.postimg.cc/K8y2gY55/party21.webp"
const photo15 = "https://i.postimg.cc/cLqsMhdw/party22.webp"
const photo16 = "https://i.postimg.cc/KYfxbyBD/party23.webp"
const photo17 = "https://i.postimg.cc/MTrwcbsc/party24.webp"
const photo18 = "https://i.postimg.cc/0yp9tSN3/party25.webp"
const photo19 = "https://i.postimg.cc/PqTT0qpq/party26.webp"
const photo20 = "https://i.postimg.cc/WpHptjK9/party27.webp"
const photo21 = "https://i.postimg.cc/3Rw7JbZ5/party28.webp"
const photo22 = "https://i.postimg.cc/9z5vTxyf/party29.webp"
const photo23 = "https://i.postimg.cc/FHnwVsyq/party3.webp"
const photo24 = "https://i.postimg.cc/yYhVj9xG/party4.webp"
const photo25 = "https://i.postimg.cc/G2Y02wsf/party5.webp"
const photo26 = "https://i.postimg.cc/j5y9THp0/party6.webp"
const photo27 = "https://i.postimg.cc/fL0s9S1B/party7.webp"
const photo28 = "https://i.postimg.cc/J0WfH6Nz/party8.webp"
const photo29 = "https://i.postimg.cc/wxLHxJXB/party9.webp"

const partyBoat = {
  id: uid(),
  name: "Party Boat",
  location: "Sosua",
  link: "/sosua/tours/party/",
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
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
    photo12,
    photo13,
    photo14,
    photo15,
    photo16,
    photo17,
    photo18,
    photo19,
    photo20,
    photo21,
    photo22,
    photo23,
    photo24,
    photo25,
    photo26,
    photo27,
    photo28,
    photo29,
  ],
  video: video,
  videoPhone: videoPhone,
}
export default partyBoat
