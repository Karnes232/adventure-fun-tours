import { uid } from "uid"
// import mainPhoto from "../../../images/tours/somelink"
// import photo1 from "../../../images/tours/somelink"
// import photo2 from "../../../images/tours/somelink"
// import photo3 from "../../../images/tours/somelink"

const videoPhone =
  "https://ik.imagekit.io/adventureTours/AdventureTours/Sosua/glass-phone.mp4"
const video =
  "https://ik.imagekit.io/adventureTours/AdventureTours/Sosua/glass.mp4"
const glass = {
  id: uid(),
  name: "Glass Bottom Boat",
  location: "Sosua",
  link: "/sosua/tours/glass/",
  img: mainPhoto,
  price: "35",
  cost: "20",
  description:
    "Experience the wonders of the underwater world without getting wet on our captivating glass bottom boat tours in Sosua",
  tourPage: {
    title1: "A Window to the Marine Realm",
    paragraph1:
      "Set sail on a unique adventure that allows you to witness the vibrant marine life, colorful coral reefs, and fascinating underwater landscapes, all from the comfort and convenience of a glass-bottomed boat. Get ready to be mesmerized by the beauty beneath the surface as you embark on an unforgettable journey. Our glass bottom boat tours offer a window into the captivating marine realm of Sosua. With a specially designed boat featuring a transparent glass bottom, you'll have an unobstructed view of the underwater wonders that lie beneath. Peer through the glass and marvel at the kaleidoscope of colors as tropical fish dart among vibrant coral formations, providing a front-row seat to nature's aquatic spectacle.",
    title2: "Explore Coral Reefs and Marine Life",
    paragraph2:
      "As you glide across the crystal-clear waters, you'll have the opportunity to explore thriving coral reefs teeming with life. Observe the intricate formations of hard and soft corals, home to a diverse array of marine species. From colorful reef fish to graceful rays and even the occasional sea turtle, each moment offers a new and exciting encounter with Sosua's underwater inhabitants.. Throughout the tour, our knowledgeable guides will provide educational and entertaining commentary, sharing fascinating facts about the marine ecosystem, local marine life, and conservation efforts. Learn about the delicate balance of the coral reefs, the importance of preserving these underwater habitats, and the significance of sustainable practices for future generations. ",
    title3: "Unforgettable Scenic Views",
    paragraph3:
      "While the focus of the tour is the underwater world, don't miss the opportunity to soak in the breathtaking scenery above the surface. Sosua's coastline is renowned for its picturesque beauty, featuring stunning cliffs, pristine beaches, and lush greenery. Capture memorable photos of the stunning landscapes as you sail along the coast, creating cherished memories of your time in Sosua. Ready to embark on a mesmerizing glass bottom boat tour in Sosua? Contact our team directly to inquire about availability, pricing, and any additional information you may need for the tour. Our dedicated staff will assist you in planning your excursion, ensuring a seamless and enjoyable experience.",
  },
  available: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  included: ["Transportation", "Soda / Water", "Snacks"],
  goodInfo: [
    "Bring your bathing suit and sunscreen",
    "All guests must be mobile and in good physical condition",
    "Transportation may not be available from some resorts or may be subject to an additional fee",
  ],
  extras: {
    duration: "3.5 hours (approx.)",
    minAge: "Suitable for all ages",
    pregnant: "Yes",
    pickUp: "Yes",
  },

  photos: [photo1, photo2, photo3],
  video: video,
  videoPhone: videoPhone,
}
export default glass
