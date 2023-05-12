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

const catalinaDiving = {
  id: uid(),
  name: "Catalina Scuba Diving",
  location: "Punta Cana",
  link: "/puntacana/tours/catalinadiving/",
  img: mainPhoto,
  price: "195",
  cost: "85",
  description:
    "Join us on an unforgettable journey to Catalina Island, where you'll discover the breathtaking beauty of the Caribbean Sea. ",
  tourPage: {
    title1: "Dive Deep into the Wall",
    paragraph1:
      "Prepare for an adrenaline-pumping adventure as we take you to the legendary wall dive site. Depending on your certification level, you can explore depths of up to 100 feet, immersing yourself in a mesmerizing marine realm. Marvel at the sheer drop-offs, mysterious crevices, and fascinating formations that make this dive a truly unforgettable experience. While experienced divers explore the depths of the wall, family members of all ages can join in the fun with snorkeling on the top of the wall. The shallow waters teem with vibrant marine life, providing an ideal environment for snorkelers to encounter an array of colorful fish, and fascinating coral formations. It's an adventure the whole family can enjoy together.",
    title2: "The Aquarium: A World of Wonder",
    paragraph2:
      "Prepare to be amazed as we venture to the renowned dive site known as 'The Aquarium.' Immerse yourself in an underwater paradise filled with a kaleidoscope of corals, graceful stingrays, curious lobsters, and, if luck is on your side, even discover the elusive sea horses. This captivating dive site offers an up-close encounter with the diverse marine life that calls Catalina Island home. Our experienced dive instructors and guides are committed to your safety and enjoyment throughout the Catalina Diving Tour. Whether you're a certified diver or a novice snorkeler, our team will provide personalized attention, ensuring a seamless and memorable experience for everyone.",
    title3: "Relax and Indulge in Island Bliss",
    paragraph3:
      "After an exhilarating day of diving and snorkeling, it's time to unwind and soak up the tropical ambiance of Catalina Island. Indulge in a delicious lunch and refreshing drinks while lounging on the powdery white sands of this paradise island. Take in the breathtaking views, feel the warm Caribbean breeze, and create unforgettable memories with your fellow adventurers. Are you ready to embark on an extraordinary underwater adventure? Reserve your spot on our Catalina Diving Tour and immerse yourself in the depths of the Dominican Republic's marine wonders. Join us for an unforgettable day of thrilling dives, vibrant snorkeling, and island relaxation. Create memories that will last a lifetime!",
  },
  available: ["Mon", "Wed", "Fri"],
  included: ["Transportation", "Open Bar", "Lunch", "Dive Equipment"],
  goodInfo: [
    "Dive Certification Required",
    "Bring your bathing suit and sunscreen",
    "All guests must be mobile and in good physical condition",
    "Transportation may not be available from some resorts or may be subject to an additional fee",
  ],
  extras: {
    duration: "8 hours (approx.)",
    minAge: "10 years old",
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
export default catalinaDiving
