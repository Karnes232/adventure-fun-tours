import { uid } from "uid"
// import mainPhoto from "../../../images/tours/somelink"
// import photo1 from "../../../images/tours/somelink"
// import photo2 from "../../../images/tours/somelink"
// import photo3 from "../../../images/tours/somelink"

const videoPhone =
  "https://ik.imagekit.io/adventureTours/AdventureTours/Scuba/scubaHero2.mp4"
const video =
  "https://ik.imagekit.io/adventureTours/AdventureTours/Scuba/scubaHero.mp4"
const bayahibeDiving = {
  id: uid(),
  name: "Bayahibe Scuba Diving",
  location: "Punta Cana",
  link: "/puntacana/tours/bayahibediving/",
  img: mainPhoto,
  price: "",
  cost: "",
  description: "Dive into crystal-clear waters, explore vibrant coral reefs, and encounter an abundance of marine life in one of the Dominican Republic's most renowned diving destinations.",
  tourPage: {
    title1: "Dive Sites for Every Adventurer",
    paragraph1: "Prepare for an extraordinary adventure beneath the surface as we invite you to explore the captivating underwater world of Bayahibe through our exhilarating scuba diving tours. Immerse yourself in crystal-clear waters, encounter vibrant marine life, and create unforgettable memories in one of the most renowned diving destinations in the Dominican Republic. Bayahibe boasts an impressive selection of dive sites, each offering its own unique charm. From stunning coral gardens to intriguing shipwrecks, there's something for every adventurer. Explore renowned spots like El Peñón, Atlantic princess Princess, or St. George Wreck, where you'll encounter a diverse array of marine life, including tropical fish, sea turtles, and vibrant corals.",
    title2: "Vibrant Coral Reefs and Marine Life",
    paragraph2: "Our scuba diving tours in Bayahibe are designed for both beginners and experienced divers alike. Whether you're new to diving or a seasoned enthusiast, our knowledgeable instructors and guides will ensure a safe and thrilling underwater experience. Prepare to embark on an incredible journey as you explore the hidden treasures of the Caribbean Sea. Bayahibe boasts an extraordinary ecosystem teeming with life. Dive into a world of vibrant coral reefs, where you'll encounter an array of tropical fish, colorful corals, and other fascinating marine creatures. Be captivated by the beauty and diversity of this underwater paradise, as you swim alongside schools of fish and witness the intricate harmony of the underwater ecosystem.",
    title3: "Unforgettable Memories",
    paragraph3: "Each dive is an opportunity to create memories that will last a lifetime. Capture the enchanting moments of your underwater exploration with stunning underwater photography or simply soak in the beauty and tranquility of the underwater world. Whether you're diving with friends, family, or embarking on a solo adventure, the memories you make will be cherished for years to come. Ready to embark on a scuba diving adventure in Bayahibe? Contact our team directly to inquire about availability, pricing, and any additional information you may need for the scuba diving tours. Our dedicated staff will assist you in planning your diving experience and ensuring a seamless journey into the depths of Bayahibe's underwater realm.",
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
export default bayahibeDiving
