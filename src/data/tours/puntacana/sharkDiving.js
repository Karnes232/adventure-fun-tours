import { uid } from "uid"
// import mainPhoto from "../../../images/tours/somelink"
// import photo1 from "../../../images/tours/somelink"
// import photo2 from "../../../images/tours/somelink"
// import photo3 from "../../../images/tours/somelink"

// import video from "../../../videos/somelink"
const sharkDiving = {
  id: uid(),
  name: "Shark Diving",
  location: "Punta Cana",
  link: "/puntacana/tours/sharkdive/",
  img: mainPhoto,
  price: "180",
  cost: "100",
  description:
    "Prepare to be awe-struck as you descend into the realm of the black tip reef sharks, one of the ocean's most graceful and awe-inspiring creatures.",
  tourPage: {
    title1:
      "Experience the Thrill of Diving with Black Tip Reef Sharks in Punta Cana",
    paragraph1:
      "An adrenaline-fueled experience that brings you face-to-face with one of the ocean's most mesmerizing apex predators. Located in the breathtaking waters of Punta Cana, this tour is designed specifically for advanced scuba divers seeking an extraordinary encounter with these graceful and captivating creatures. Prepare for an exhilarating dive as you descend into the realm of black tip reef sharks. The crystal-clear waters of Punta Cana provide the perfect backdrop for this thrilling adventure. With its vibrant coral reefs and thriving marine ecosystem, it's an ideal habitat for encountering these magnificent creatures in their natural environment.",
    title2: "Witness the Elegance of Black Tip Reef Sharks",
    paragraph2:
      "As you explore the depths, you'll have the rare opportunity to observe black tip reef sharks in their element. These sleek and agile creatures gracefully glide through the water, their distinctive black-tipped fins cutting through the turquoise waves. Witness their power, beauty, and innate harmony with the underwater world. Our Black Tip Reef Shark Diving Adventure is specifically tailored for experienced divers who are comfortable with advanced diving techniques. Safety is our utmost priority, and our professional dive guides will provide thorough briefings and guidance to ensure a secure and unforgettable experience. Prepare to be amazed by the awe-inspiring presence of these apex predators.",
    title3: "Unforgettable Memories Above and Below the Surface",
    paragraph3:
      "We are passionate about responsible diving practices and environmental conservation. During the Black Tip Reef Shark Diving Adventure, we adhere to strict guidelines to minimize our impact on the sharks and their habitat. By participating in this tour, you contribute to the preservation of these majestic creatures and their ecosystem. Are you ready to embark on an awe-inspiring dive with black tip reef sharks? Reserve your spot on our Black Tip Reef Shark Diving Adventure and experience the exhilaration of encountering these magnificent creatures up close. Dive into the depths of Punta Cana's vibrant marine world and create memories that will last a lifetime.",
  },
  available: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  included: ["Transportation", "Dive Equipment", "Water"],
  goodInfo: [
    "Dive Certification Required",
    "Bring your bathing suit and sunscreen",
    "All guests must be mobile and in good physical condition",
    "Transportation may not be available from some resorts or may be subject to an additional fee",
  ],
  extras: {
    duration: "3 hours (approx.)",
    minAge: "15 years old",
    pregnant: "No",
    pickUp: "Yes",
  },

  photos: [photo1, photo2, photo3],
  video: video,
  videoPhone: videoPhone,
}
export default sharkDiving
