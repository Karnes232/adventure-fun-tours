import { uid } from "uid"
// import mainPhoto from "../../../images/tours/somelink"
// import photo1 from "../../../images/tours/somelink"
// import photo2 from "../../../images/tours/somelink"
// import photo3 from "../../../images/tours/somelink"

// import video from "../../../videos/somelink"
const buggy = {
  id: uid(),
  name: "Buggy Tour",
  location: "Punta Cana",
  link: "/puntacana/tours/buggy/",
  img: mainPhoto,
  price: "",
  cost: "",
  description: "Strap in and take the wheel as you navigate the rugged terrains, explore stunning beaches, and immerse yourself in the vibrant culture of the Dominican Republic.",
  tourPage: {
    title1: "Take Control of the Adventure",
    paragraph1: "Our Punta Cana buggy tour puts you in the driver's seat, allowing you to experience the thrill of off-roading firsthand. Hop into your own powerful and specially equipped buggy, and get ready for an adrenaline-pumping journey through the stunning landscapes that await. Throughout the approximately 3-hour tour, you'll experience the thrill of off-roading, witness breathtaking natural beauty, and create unforgettable memories. Soak in the panoramic views of Punta Cana's landscapes, feel the adrenaline rush as you conquer challenging terrains, and savor the moments of tranquility at Playa Macao and the Dominican house.",
    title2: "Immerse Yourself in Dominican Culture",
    paragraph2: "Embark on a scenic drive to Playa Macao, one of the most picturesque beaches in Punta Cana. Feel the warm sun on your skin, sink your toes into the soft sand, and take a refreshing dip in the crystal-clear waters of the Caribbean Sea. Capture stunning photos and create lasting memories against the backdrop of this tropical paradise. Our buggy tour takes you beyond the typical tourist destinations. You'll have the opportunity to visit a typical Dominican house, where you can experience the warm hospitality and rich culture of the locals. Gain insight into their way of life, traditions, and customs, creating a deeper connection with the authentic spirit of the Dominican Republic.",
    title3: "Book Your Buggy Tour",
    paragraph3: "Ready to embark on an unforgettable off-road adventure in Punta Cana? Contact our team directly to inquire about availability, pricing, and any additional information you may need for the buggy tour in partnership with Punta Cana Dune Buggy. Our dedicated staff will assist you in planning your excursion and ensuring a seamless experience. Please note that buggy tour reservations are exclusively handled through our team. To secure your spot or learn more about the tour, kindly reach out to us via email or through our online contact page. Get ready to take the wheel, immerse yourself in the beauty of Punta Cana, and create memories that will last a lifetime.",
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
export default buggy
