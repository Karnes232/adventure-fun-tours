import { uid } from "uid"
const photo11 = "https://i.postimg.cc/rpLcrNSs/fishing1.webp"
const photo1 = "https://i.postimg.cc/7LM4MJVV/fishing.webp"
const photo2 = "https://i.postimg.cc/Fs8h94zj/fishing2.webp"
const photo3 = "https://i.postimg.cc/dVCw3xZg/fishing3.webp"
const photo4 = "https://i.postimg.cc/VLdbqDJR/fishing1.webp"
const photo5 = "https://i.postimg.cc/Vs7C03kv/fishing2.webp"
const photo6 = "https://i.postimg.cc/WzfqRJHg/fishing3.webp"
const photo7 = "https://i.postimg.cc/pX45qz8t/fishing4.webp"
const photo8 = "https://i.postimg.cc/T1P5HcCT/fishing5.webp"
const photo9 = "https://i.postimg.cc/V6gbRh97/fishing6.webp"
const photo10 = "https://i.postimg.cc/ydsZ0KRg/fishing7.webp"
const mainPhoto = "https://i.postimg.cc/zfMscsXJ/fishing95.webp"

const videoPhone =
  "https://ik.imagekit.io/adventureTours/AdventureTours/PuntaCana/fishing-phone.mp4"
const video =
  "https://ik.imagekit.io/adventureTours/AdventureTours/PuntaCana/fishing.mp4"
const fishing = {
  id: uid(),
  name: "Fishing",
  location: "Punta Cana",
  link: "/puntacana/tours/fishing/",
  img: mainPhoto,
  price: "110",
  cost: "50",
  description: "Are you ready to reel in the catch of a lifetime?",
  tourPage: {
    title1: "Experience the Thrill of Deep Sea Fishing",
    paragraph1:
      "Join us on our exhilarating 4-hour Deep Sea Fishing Tour in Punta Cana, where the open waters of the Caribbean become your playground for an unforgettable fishing experience. Step aboard our well-equipped fishing vessel, manned by experienced captains and crew who are passionate about fishing. Leave the shores behind as we venture into the deep blue, where big game fish roam. Feel the adrenaline surge through your veins as you cast your line and wait for that exhilarating bite.",
    title2: "Abundance of Marine Life",
    paragraph2:
      "Punta Cana is renowned for its rich marine biodiversity, making it a prime destination for deep sea fishing enthusiasts. Prepare to encounter an array of impressive species, including marlin, sailfish, dorado, wahoo, and tuna. Our experienced crew will share their knowledge and techniques to increase your chances of landing that trophy fish. As you navigate the waters, soak in the breathtaking coastal views of Punta Cana's shoreline. Marvel at the pristine beaches, swaying palm trees, and turquoise waters that make this destination a true tropical paradise. Capture memorable photos and enjoy the tranquil beauty of the Caribbean Sea.",
    title3: "Unforgettable Memories",
    paragraph3:
      "Deep sea fishing is not just about the thrill of the catch; it's an experience that creates lifelong memories. Share laughter, stories, and camaraderie with your fellow anglers as you pursue your fishing goals. Whether you're an experienced angler or new to the sport, our fishing tours cater to all skill levels and provide an adventure that will stay with you for years to come. Don't miss your chance to embark on an epic deep sea fishing adventure in Punta Cana. Reserve your spot on our 4-hour Deep Sea Fishing Tour and get ready to cast your line, battle with big game fish, and create memories that will last a lifetime. Whether you're seeking the thrill of the catch or simply want to enjoy the beauty of the open sea, our fishing tour promises an experience you won't forget.",
  },
  available: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  included: ["Transportation", "Fishing Equipment", "Drinks"],
  goodInfo: [
    "Bring your bathing suit and sunscreen",
    "All guests must be mobile and in good physical condition",
    "Transportation may not be available from some resorts or may be subject to an additional fee",
  ],
  extras: {
    duration: "4 hours (approx.)",
    minAge: "Suitable for all ages",
    pregnant: "No",
    pickUp: "Yes",
  },

  photos: [
    {
      mobile: photo1,
      desktop: photo1,
    },
    {
      mobile: photo2,
      desktop: photo2,
    },
    {
      mobile: photo3,
      desktop: photo3,
    },
    {
      mobile: photo4,
      desktop: photo4,
    },
    {
      mobile: photo5,
      desktop: photo5,
    },
    {
      mobile: photo6,
      desktop: photo6,
    },
    {
      mobile: photo7,
      desktop: photo7,
    },
    {
      mobile: photo8,
      desktop: photo8,
    },
    {
      mobile: photo9,
      desktop: photo9,
    },
    {
      mobile: photo10,
      desktop: photo10,
    },
    {
      mobile: photo11,
      desktop: photo11,
    },
    {
      mobile: mainPhoto,
      desktop: mainPhoto,
    },
  ],
  video: video,
  videoPhone: videoPhone,
}
export default fishing
