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
  price: "120",
  cost: "40",
  description:
    "Escape to the tropical paradise of Saona Island and experience a day of pure bliss and natural beauty.",
  tourPage: {
    title1: "A Journey to Paradise",
    paragraph1:
      "Our Saona Island tour promises an unforgettable adventure that will leave you in awe of the Dominican Republic's stunning coastline and pristine turquoise waters. Embark on a scenic boat ride that will take you to the exquisite Saona Island, located off the southeastern coast of the Dominican Republic. As you cruise through the crystal-clear Caribbean Sea, soak in the breathtaking views of the coastline, lush mangroves, and picturesque landscapes.",
    title2: "Unspoiled Beaches and Tranquil Waters",
    paragraph2:
      "Upon arrival at Saona Island, you'll be greeted by the mesmerizing sight of unspoiled white sandy beaches, swaying palm trees, and tranquil turquoise waters. This idyllic setting serves as the perfect backdrop for a day of relaxation and adventure. Indulge in a delicious beachside lunch prepared with local flavors, offering a taste of the Dominican culinary delights. Savor the fresh seafood, tropical fruits, and refreshing beverages while taking in the serene ambiance of the island.",
    title3: "Capture Memories and Cherish Moments",
    paragraph3:
      "As you immerse yourself in the beauty of Saona Island, don't forget to capture the magic with your camera. Take snapshots of the breathtaking landscapes, vibrant marine life, and the joyful moments spent with friends and loved ones. These memories will last a lifetime. Ready to embark on an unforgettable journey to Saona Island? Contact our team directly to inquire about availability, pricing, and any additional information you may need for the Saona Island tour. Our knowledgeable staff will assist you in planning your excursion and ensuring a seamless experience.",
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
