import { uid } from "uid"

const videoPhone =
  "https://ik.imagekit.io/adventureTours/AdventureTours/PuntaCana/puntacana-taiguey-phone.mp4"
const video =
  "https://ik.imagekit.io/adventureTours/AdventureTours/PuntaCana/puntacana-taiguey.mp4"

const mainPhoto = "https://i.postimg.cc/7LSWbsDz/taiguey7.webp"
const photo1 = "https://i.postimg.cc/Qtsn7Qxy/taiguey1.webp"
const photo2 = "https://i.postimg.cc/hvtyyKm8/taiguey2.webp"
const photo3 = "https://i.postimg.cc/brV64407/taiguey3.webp"
const photo4 = "https://i.postimg.cc/fLKqfVVT/taiguey4.webp"
const photo5 = "https://i.postimg.cc/m2hp72BB/taiguey5.webp"
const photo6 = "https://i.postimg.cc/XNsDZyMs/taiguey6.webp"

const partyBoat = {
  id: uid(),
  name: "Taiguey Party Boat",
  location: "Punta Cana",
  link: "/puntacana/tours/partyboat/",
  img: mainPhoto,
  price: "95",
  cost: "35",
  description:
    "Get ready to let loose and party as our lively crew creates a festive ambiance onboard the Taiguey Party Boat.",
  tourPage: {
    title1: "Celebrate and Dance to the Rhythm of the Caribbean",
    paragraph1:
      "Step aboard our lively party boat and immerse yourself in the vibrant atmosphere as we set sail on an unforgettable journey through the sparkling Caribbean waters. Dance to the infectious beats of Caribbean music, sip on refreshing cocktails, and mingle with fellow revelers from around the world. Our energetic entertainment team ensures that the party never stops, ensuring an experience that is as exhilarating as it is memorable.",
    title2: "Snorkeling Adventure in Tropical Waters",
    paragraph2:
      "As we cruise along the stunning coastline, we'll make a stop at a captivating snorkeling spot. Grab your gear and dive into the crystal-clear turquoise waters, where a vibrant underwater world awaits. Explore colorful coral reefs, encounter a dazzling array of tropical fish, and immerse yourself in the natural beauty of the Dominican Republic's marine ecosystem. This snorkeling adventure is perfect for both experienced snorkelers and beginners looking to discover the wonders beneath the surface. Indulge in a unique and refreshing experience as we make our way to a natural oceanic pool. This serene and shallow area is nestled amidst the sparkling waters of Punta Cana's coastline. Take a refreshing dip, soak up the sun, and enjoy the soothing ambience of this natural oasis. It's the perfect opportunity to unwind, socialize, and take memorable photos with your friends and fellow partygoers.",
    title3: "Discover the Rich Culture of Los Tainos",
    paragraph3:
      "Prepare to be captivated by a mesmerizing cultural show that pays tribute to the indigenous people of the Dominican Republic, the Tainos. Through music, dance, and storytelling, we'll transport you back in time, allowing you to witness the traditions, customs, and vibrant heritage of this ancient civilization. Be enthralled by the performers' skill and talent as they showcase the beauty and history of the Tainos. Ready to set sail on a high-energy party boat experience? Reserve your spot on our Taiguey Party Boat tour and embark on a day of celebration, snorkeling, and cultural discovery in Punta Cana. Get ready to dance, snorkel, and be captivated by the rich heritage of the Dominican Republic. Let the party begin!",
  },
  available: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  included: ["transportation", "Boat Tour", "Snorkeling", "Drinks", "Snacks"],
  goodInfo: [
    "Bring your bathing suit and sunscreen",
    "All guests must be mobile and in good physical condition",
    "Transportation may not be available from some resorts or may be subject to an additional fee",
  ],
  extras: {
    duration: "3.5 hours (approx.)",
    minAge: "Suitable for all ages",
    pregnant: "No",
    pickUp: "Yes",
  },

  photos: [photo1, photo2, photo3, photo4, photo5, photo6],
  video: video,
  videoPhone: videoPhone,
}
export default partyBoat
