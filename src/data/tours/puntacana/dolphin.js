import { uid } from "uid"
// import mainPhoto from "../../../images/tours/somelink"
// import photo1 from "../../../images/tours/somelink"
// import photo2 from "../../../images/tours/somelink"
// import photo3 from "../../../images/tours/somelink"

// import video from "../../../videos/somelink"
const dolphin = {
  id: uid(),
  name: "Dolphin Swim",
  location: "Punta Cana",
  link: "/puntacana/tours/dolphin/",
  img: mainPhoto,
  price: "185",
  cost: "150",
  description: "Dive into an extraordinary adventure that will create lasting memories and a deep connection with these magnificent creatures",
  tourPage: {
    title1: "Swim with Dolphins: Experience the Magic of the Sea",
    paragraph1: "Immerse yourself in a once-in-a-lifetime encounter with dolphins and create unforgettable memories with our incredible swim with dolphins tour. Our partnership with Dolphin Island Park allows us to offer you this extraordinary opportunity to interact and swim alongside these magnificent creatures in their natural habitat. Our swim with dolphins tour is designed to provide a safe and educational experience while allowing you to connect with these intelligent marine mammals on a deeper level. Prepare to be amazed as you witness their grace, playfulness, and natural behaviors up close.",
    title2: "Swim, Interact, and Learn",
    paragraph2: "During the tour, you'll have the opportunity to swim and interact with the dolphins under the guidance of experienced trainers. Learn about their behavior, communication, and unique characteristics while forming a special bond with these gentle creatures. From gentle caresses to thrilling rides alongside them, every moment will leave you in awe. Swimming with dolphins is not only a thrilling adventure but also an enriching experience that fosters a deeper understanding and appreciation for these incredible creatures and their natural habitat. Our tour aims to promote conservation and respect for marine life, inspiring guests to become advocates for the protection of our oceans.",
    title3: "Book Your Swim with Dolphins Tour",
    paragraph3: "Ready to embark on an unforgettable journey with dolphins? Contact us directly to inquire about availability, pricing, and any additional information you may need for the swim with dolphins tour. Our team will ensure a seamless booking process and provide you with all the necessary details to make your experience truly remarkable. Please note that swim with dolphins reservations are exclusively handled through our team. To secure your spot or learn more about the tour, kindly reach out to us via email or through our contact page. We are thrilled to assist you in creating an extraordinary swim with dolphins adventure.",
  },
  available: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  included: ["transportation", "Open Bar", "Lunch"],
  goodInfo: [
    "Bring your bathing suit and sunscreen",
    "Minimum height requirement of 3' (90cm)",
    "All guests must be mobile and in good physical condition",
    "Transportation may not be available from some resorts or may be subject to an additional fee",
  ],
  extras: {
    duration: "4 hours (approx.)",
    minAge: "Suitable for all ages",
    pregnant: "No",
    pickUp: "Yes",
  },

  photos: [photo1, photo2, photo3],
  video: video,
  videoPhone: videoPhone,
}
export default dolphin
