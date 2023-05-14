import { uid } from "uid"

const mainPhoto = "https://i.postimg.cc/VvYs7LsM/dolphin1.webp"
const photo1 = "https://i.postimg.cc/QM2Hq3Wk/dolphin10.webp"
const photo2 = "https://i.postimg.cc/hPDhsMhw/dolphin11.webp"
const photo3 = "https://i.postimg.cc/kG9Gkvs2/dolphin12.webp"
const photo4 = "https://i.postimg.cc/3R2WScXM/dolphin13.webp"
const photo5 = "https://i.postimg.cc/GmSBHYLf/dolphin14.webp"
const photo6 = "https://i.postimg.cc/N09KTMLj/dolphin15.webp"
const photo7 = "https://i.postimg.cc/13znmMQ6/dolphin16.webp"
const photo8 = "https://i.postimg.cc/JnCzk59p/dolphin2.webp"
const photo9 = "https://i.postimg.cc/hGdGv53J/dolphin3.webp"
const photo10 = "https://i.postimg.cc/zBwXSRN8/dolphin4.webp"
const photo11 = "https://i.postimg.cc/HkjnDxw9/dolphin5.webp"
const photo12 = "https://i.postimg.cc/4xMdJgwk/dolphin6.webp"
const photo13 = "https://i.postimg.cc/qM1q5n37/dolphin7.webp"
const photo14 = "https://i.postimg.cc/Y2fhQT2Y/dolphin8.webp"
const photo15 = "https://i.postimg.cc/SRrRqY1D/dolphin9.webp"

// import video from "../../../videos/somelink"
const dolphin = {
  id: uid(),
  name: "Dolphin Swim",
  location: "Punta Cana",
  link: "/puntacana/tours/dolphin/",
  img: mainPhoto,
  price: "185",
  cost: "150",
  description:
    "Dive into an extraordinary adventure that will create lasting memories and a deep connection with these magnificent creatures",
  tourPage: {
    title1: "Swim with Dolphins: Experience the Magic of the Sea",
    paragraph1:
      "Immerse yourself in a once-in-a-lifetime encounter with dolphins and create unforgettable memories with our incredible swim with dolphins tour. Our partnership with Dolphin Island Park allows us to offer you this extraordinary opportunity to interact and swim alongside these magnificent creatures in their natural habitat. Our swim with dolphins tour is designed to provide a safe and educational experience while allowing you to connect with these intelligent marine mammals on a deeper level. Prepare to be amazed as you witness their grace, playfulness, and natural behaviors up close.",
    title2: "Swim, Interact, and Learn",
    paragraph2:
      "During the tour, you'll have the opportunity to swim and interact with the dolphins under the guidance of experienced trainers. Learn about their behavior, communication, and unique characteristics while forming a special bond with these gentle creatures. From gentle caresses to thrilling rides alongside them, every moment will leave you in awe. Swimming with dolphins is not only a thrilling adventure but also an enriching experience that fosters a deeper understanding and appreciation for these incredible creatures and their natural habitat. Our tour aims to promote conservation and respect for marine life, inspiring guests to become advocates for the protection of our oceans.",
    title3: "Book Your Swim with Dolphins Tour",
    paragraph3:
      "Ready to embark on an unforgettable journey with dolphins? Contact us directly to inquire about availability, pricing, and any additional information you may need for the swim with dolphins tour. Our team will ensure a seamless booking process and provide you with all the necessary details to make your experience truly remarkable. Please note that swim with dolphins reservations are exclusively handled through our team. To secure your spot or learn more about the tour, kindly reach out to us via email or through our contact page. We are thrilled to assist you in creating an extraordinary swim with dolphins adventure.",
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
    photo10,
    photo11,
    photo12,
    photo13,
    photo14,
    photo15,
  ],
  video: video,
  videoPhone: videoPhone,
}
export default dolphin
