import { uid } from "uid"
const mainPhoto = "https://i.postimg.cc/L8WfJx7v/bap18.webp"
const photo1 = "https://i.postimg.cc/xTCcLKLZ/bap5.webp"
const photo2 = "https://i.postimg.cc/Fzx31N5J/bap27.webp"
const photo3 = "https://i.postimg.cc/tJbFX7fj/bap22.webp"
const photo4 = "https://i.postimg.cc/Y2N1dfGq/bap20.webp"
const photo5 = "https://i.postimg.cc/L8WfJx7v/bap18.webp"
const photo6 = "https://i.postimg.cc/2yCLsMbj/bap16.webp"
const photo7 = "https://i.postimg.cc/ZK7vQfTZ/bap15.webp"
const photo8 = "https://i.postimg.cc/KcQ1K93L/bap1.webp"

const videoPhone =
  "https://ik.imagekit.io/adventureTours/AdventureTours/PuntaCana/zipline-phone.mp4"
const video =
  "https://ik.imagekit.io/adventureTours/AdventureTours/PuntaCana/zipline.mp4"
const zipLine = {
  id: uid(),
  name: "Zip Line",
  location: "Punta Cana",
  link: "/puntacana/tours/zipline/",
  img: mainPhoto,
  price: "89",
  cost: "80",
  description:
    "Get ready for an adrenaline-fueled aerial experience with our thrilling zipline tour in Punta Cana.",
  tourPage: {
    title1: "Experience the Ultimate Thrill",
    paragraph1:
      "Embark on an exhilarating journey through the treetops, soaring above lush landscapes and enjoying breathtaking views of the Dominican Republic's natural beauty. Strap in, let go of your fears, and embrace the excitement of this unforgettable zipline adventure. Our zipline tour offers an unparalleled thrill as you soar through the skies, feeling the rush of adrenaline with each breathtaking descent. Traverse a series of sturdy cables, securely attached to a harness, and witness the world from a unique perspective. Let the wind rush through your hair and the freedom of flight fill your senses as you conquer gravity and experience the ultimate thrill of ziplining.",
    title2: "Immerse Yourself in Nature's Beauty",
    paragraph2:
      "As you glide through the air, take in the awe-inspiring views of Punta Cana's natural landscapes. Admire the lush greenery, observe the diverse flora and fauna, and appreciate the pristine beauty of the surroundings. Our zipline tour offers not only an adrenaline rush but also an opportunity to connect with nature and immerse yourself in its captivating allure. Our zipline adventure is designed to cater to adventurers of all ages and experience levels. Whether you're a seasoned zipliner or a first-time flyer, our professional guides will ensure your safety and provide expert guidance throughout the tour. So gather your friends, family, or fellow thrill-seekers and get ready to create lasting memories together.",
    title3: "Unforgettable Memories",
    paragraph3:
      "Each zipline ride is a chance to create lasting memories. Capture stunning photos of yourself in mid-air, surrounded by the breathtaking landscapes of Punta Cana. Share laughter, excitement, and camaraderie with your fellow adventurers as you conquer each zipline course together. The memories you make during this exhilarating experience will be cherished for a lifetime. Ready to take flight and experience the thrill of ziplining in Punta Cana? Contact our team directly to inquire about availability, pricing, and any additional information you may need for the zipline tour in partnership with Bavaro Adventure Park. Our dedicated staff will assist you in planning your excursion and ensuring a seamless and unforgettable adventure.",
  },
  available: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  included: ["transportation", "Safety Equipment", "Lunch"],
  goodInfo: [
    "Bring your bathing suit and sunscreen",
    "Bring Digital or a printed voucher",
    "All guests must be mobile and in good physical condition",
    "Transportation may not be available from some resorts or may be subject to an additional fee",
    "Cash or credit card for souvenirs, pictures, snacks & drinks, tips, lockers",
  ],
  extras: {
    duration: "8 hours (approx.)",
    minAge: "6 years old",
    pregnant: "No",
    pickUp: "Yes",
  },

  photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
  video: video,
  videoPhone: videoPhone,
}
export default zipLine
