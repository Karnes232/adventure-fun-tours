import { uid } from "uid"
const mainPhoto = "https://i.postimg.cc/9fncRDj0/buggy1.webp"
const photo1 = "https://i.postimg.cc/j2VKcB2r/buggy2.webp"
const photo2 = "https://i.postimg.cc/rmRMSq8J/buggy3.webp"
const photo3 = "https://i.postimg.cc/NF1tzb22/buggy4.webp"
const photo4 = "https://i.postimg.cc/1zt93p2b/buggy5.webp"

const videoPhone =
  "https://ik.imagekit.io/adventureTours/AdventureTours/PuntaCana/buggy-phone.mp4"
const video =
  "https://ik.imagekit.io/adventureTours/AdventureTours/PuntaCana/buggy.mp4"

const buggy = {
  id: uid(),
  name: "Buggy Tour",
  location: "Punta Cana",
  link: "/puntacana/tours/buggy/",
  img: mainPhoto,
  price: "85",
  cost: "50",
  description:
    "Strap in and take the wheel as you navigate the rugged terrains, explore stunning beaches, and immerse yourself in the vibrant culture of the Dominican Republic.",
  tourPage: {
    title1: "Take Control of the Adventure",
    paragraph1:
      "Our Punta Cana buggy tour puts you in the driver's seat, allowing you to experience the thrill of off-roading firsthand. Hop into your own powerful and specially equipped buggy, and get ready for an adrenaline-pumping journey through the stunning landscapes that await. Throughout the approximately 4-hour tour, you'll experience the thrill of off-roading, witness breathtaking natural beauty, and create unforgettable memories. Soak in the panoramic views of Punta Cana's landscapes, feel the adrenaline rush as you conquer challenging terrains, and savor the moments of tranquility at Playa Macao and the Dominican house.",
    title2: "Immerse Yourself in Dominican Culture",
    paragraph2:
      "Embark on a scenic drive to Playa Macao, one of the most picturesque beaches in Punta Cana. Feel the warm sun on your skin, sink your toes into the soft sand, and take a refreshing dip in the crystal-clear waters of the Caribbean Sea. Capture stunning photos and create lasting memories against the backdrop of this tropical paradise. Our buggy tour takes you beyond the typical tourist destinations. You'll have the opportunity to visit a typical Dominican house, where you can experience the warm hospitality and rich culture of the locals. Gain insight into their way of life, traditions, and customs, creating a deeper connection with the authentic spirit of the Dominican Republic.",
    title3: "Book Your Buggy Tour",
    paragraph3:
      "Ready to embark on an unforgettable off-road adventure in Punta Cana? Contact our team directly to inquire about availability, pricing, and any additional information you may need for the buggy tour in partnership with Punta Cana Dune Buggy. Our dedicated staff will assist you in planning your excursion and ensuring a seamless experience. Please note that buggy tour reservations are exclusively handled through our team. To secure your spot or learn more about the tour, kindly reach out to us via email or through our online contact page. Get ready to take the wheel, immerse yourself in the beauty of Punta Cana, and create memories that will last a lifetime.",
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

  photos: [photo1, photo2, photo3, photo4, mainPhoto],
  video: video,
  videoPhone: videoPhone,
}
export default buggy
