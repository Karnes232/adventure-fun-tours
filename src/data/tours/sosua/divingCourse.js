import { uid } from "uid"
const videoPhone =
  "https://ik.imagekit.io/adventureTours/AdventureTours/Scuba/scubaHero2.mp4"
const video =
  "https://ik.imagekit.io/adventureTours/AdventureTours/Scuba/scubaHero.mp4"
const mainPhoto = "https://i.postimg.cc/WbKH2P0w/scuba1.webp"
const photo1 = "https://i.postimg.cc/mkL0FNr3/scuba10.webp"
const photo2 = "https://i.postimg.cc/Hn6F0cJq/scuba11.webp"
const photo3 = "https://i.postimg.cc/yN94q85R/scuba12.webp"
const photo4 = "https://i.postimg.cc/FR4thQ5B/scuba13.webp"
const photo5 = "https://i.postimg.cc/PfMHrNqz/scuba14.webp"
const photo6 = "https://i.postimg.cc/QdFZbbJ0/scuba15.webp"
const photo7 = "https://i.postimg.cc/ZnjzfsQD/scuba16.webp"
const photo8 = "https://i.postimg.cc/brqj9fmt/scuba17.webp"
const photo9 = "https://i.postimg.cc/xCv2m13Q/scuba18.webp"
const photo10 = "https://i.postimg.cc/cHyW6nYT/scuba19.webp"
const photo11 = "https://i.postimg.cc/9XLkn9MS/scuba2.webp"
const photo12 = "https://i.postimg.cc/TPWGR9yp/scuba20.webp"
const photo13 = "https://i.postimg.cc/L852WR2k/scuba21.webp"
const photo14 = "https://i.postimg.cc/jdZRvC0d/scuba22.webp"
const photo15 = "https://i.postimg.cc/d39wbVh6/scuba23.webp"
const photo16 = "https://i.postimg.cc/MpLq24pC/scuba24.webp"
const photo17 = "https://i.postimg.cc/vHQQWfKN/scuba25.webp"
const photo18 = "https://i.postimg.cc/YS42v7P2/scuba26.webp"
const photo19 = "https://i.postimg.cc/Mp3KZHdr/scuba27.webp"
const photo20 = "https://i.postimg.cc/8kdpJtZv/scuba28.webp"
const photo21 = "https://i.postimg.cc/6QDWRSsr/scuba29.webp"
const photo22 = "https://i.postimg.cc/WzYfFBCj/scuba3.webp"
const photo23 = "https://i.postimg.cc/c4ZJXVvT/scuba30.webp"
const photo24 = "https://i.postimg.cc/Vv9kzFVj/scuba31.webp"
const photo25 = "https://i.postimg.cc/WbtyL4q4/scuba4.webp"
const photo26 = "https://i.postimg.cc/zvGcfzd0/scuba5.webp"
const photo27 = "https://i.postimg.cc/XJ3PTc9M/scuba6.webp"
const photo28 = "https://i.postimg.cc/13nb6zyd/scuba7.webp"
const photo29 = "https://i.postimg.cc/Df5V3DCx/scuba8.webp"
const photo30 = "https://i.postimg.cc/c45Vr3GY/scuba9.webp"
const divingCourse = {
  id: uid(),
  name: "Scuba Diving Courses",
  location: "Sosua",
  link: "/sosua/tours/divingcourse/",
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
    photo30,
  ],
  video: video,
  videoPhone: videoPhone,
}
export default divingCourse
