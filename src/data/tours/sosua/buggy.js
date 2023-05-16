import { uid } from "uid"
const videoPhone =
  "https://ik.imagekit.io/adventureTours/AdventureTours/Sosua/sosua-buggie.mp4"
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
  description: "Buckle up, hold on tight, and prepare for an adrenaline-filled ride as you explore the hidden gems of this vibrant destination.",
  tourPage: {
    title1: "Off-Roading Excitement",
    paragraph1: "Our buggy tours in Sosua take you off the beaten path, allowing you to discover the natural wonders and hidden treasures of this beautiful region. Hop into our rugged and powerful buggies, specially designed to tackle the challenging terrains, and get ready to embark on an unforgettable journey. As you navigate through the rugged trails, be prepared to be mesmerized by the breathtaking views that unfold before your eyes. From lush tropical forests to rugged mountains and picturesque valleys, each turn offers a new perspective of Sosua's natural beauty.",
    title2: "Explore the Unexplored",
    paragraph2: "Feel the rush of adrenaline as you tackle challenging terrains, splash through muddy puddles, and conquer rugged trails. Our buggy tours are designed to provide an exhilarating experience for adventure enthusiasts of all levels. Capture the thrill and excitement of your buggy tour with stunning photos and videos. Immerse yourself in the natural beauty of Sosua as you create unforgettable memories with friends and family. Each moment spent on the buggy tour is a chance to bond, laugh, and share in the joy of this thrilling adventure.",
    title3: "Book Your Buggy Tour",
    paragraph3: "Ready to embark on an unforgettable off-road adventure in Sosua? Contact our team directly to inquire about availability, pricing, and any additional information you may need for the buggy tours. Our dedicated staff will assist you in planning your excursion and ensuring a seamless experience. To secure your spot or learn more about the tour, kindly reach out to us via email or through our online contact page. Get ready to rev your engines, feel the thrill of off-roading, and create memories that will last a lifetime.",
  },
  available: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  included: ["Transportation", "Vehicle", "Helmet"],
  goodInfo: [
    "Bring your bathing suit and sunscreen",
    "Closed shoes, and Bandanna recommended",
    "All guests must be mobile and in good physical condition",
    "Transportation may not be available from some resorts or may be subject to an additional fee",
  ],
  extras: {
    duration: "4 hours (approx.)",
    minAge: "Not advised for the old and very young",
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
