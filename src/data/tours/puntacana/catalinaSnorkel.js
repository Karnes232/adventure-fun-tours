import { uid } from "uid"
import videoPhone from "../../../videos/scubaHero2.mp4"
import video from "../../../videos/scubaHero.mp4"
const mainPhoto = "https://i.postimg.cc/pXKWDGpk/catalina2.webp"
const photo1 = "https://i.postimg.cc/HjDNYtmk/catalina1.webp"
const photo2 = "https://i.postimg.cc/7hf4G9j1/catalina3.webp"
const photo3 = "https://i.postimg.cc/1zsZcsL3/catalina4.webp"
const photo4 = "https://i.postimg.cc/nLGp6Cvm/catalina5.webp"
const photo5 = "https://i.postimg.cc/g29pjvsR/catalina6.webp"
const photo6 = "https://i.postimg.cc/sXfsyscN/catalina7.webp"
const photo7 = "https://i.postimg.cc/Y0ZH1gw5/catalina8.webp"
const photo8 = "https://i.postimg.cc/VL01z7qm/catalina9.webp"

const catalinaSnorkel = {
  id: uid(),
  name: "Catalina Snorkeling",
  location: "Punta Cana",
  link: "/puntacana/tours/catalinasnorkel/",
  img: mainPhoto,
  price: "99",
  cost: "50",
  description:
    "Dive into crystal-clear waters and discover a mesmerizing realm teeming with colorful coral gardens, playful marine life, and unforgettable snorkeling experiences.",
  tourPage: {
    title1: "Immerse Yourself in the Vibrant Underwater World",
    paragraph1:
      "Welcome to our Catalina Snorkeling Tour, where you can experience the mesmerizing beauty of the Dominican Republic's marine wonders without having to dive deep. Join us on a captivating journey to Catalina Island, where pristine turquoise waters and vibrant coral reefs await. Prepare to be amazed as you glide effortlessly over Catalina Island's breathtaking coral gardens. Dive into a world of kaleidoscopic colors, where you'll encounter a stunning array of tropical fish and intricate coral formations. With crystal-clear visibility, this snorkeling paradise offers an up-close and personal encounter with the incredible biodiversity that thrives beneath the surface.",
    title2: "Encounter Marine Life in its Natural Habitat",
    paragraph2:
      "Even if you're new to snorkeling, there's no better place to start than at Catalina Island. With calm and shallow waters, this tour is perfect for all ages and skill levels. Whether you're a seasoned snorkeler or it's your first time exploring the underwater realm, our expert guides will ensure your safety and provide assistance, making sure you have an unforgettable experience. Get ready for magical moments as you observe curious fish darting through vibrant coral formations. Keep your eyes peeled for elegant stingrays gliding gracefully across the sandy seabed. Every moment spent snorkeling is an opportunity for discovery and wonder.",
    title3: "Relax and Recharge in Paradise",
    paragraph3:
      "After an exhilarating snorkeling adventure, take some time to unwind and soak up the beauty of Catalina Island. Feel the warm sun on your skin as you relax on the soft, powdery white sand beaches. Enjoy a delicious lunch and refreshing beverages as you bask in the serenity of this tropical paradise, creating lasting memories with your fellow snorkelers. Are you ready to embark on an incredible snorkeling adventure in the Dominican Republic? Reserve your spot on our Catalina Snorkeling Tour and be prepared to be amazed by the vibrant underwater world of Catalina Island. Join us for a day filled with adventure, natural beauty, and relaxation, as you create memories that will last a lifetime!",
  },
  available: ["Mon", "Wed", "Fri"],
  included: ["Transportation", "Open Bar", "Lunch"],
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
    mainPhoto,
  ],
  video: video,
  videoPhone: videoPhone,
}
export default catalinaSnorkel
