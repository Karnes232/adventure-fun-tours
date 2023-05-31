import { uid } from "uid"

const mainPhoto = "https://i.postimg.cc/JzLPSgBW/1.webp"
const photo1 = "https://i.postimg.cc/nhbvCDHK/10.webp"
const photo2 = "https://i.postimg.cc/Dwr1swZ9/11.webp"
const photo3 = "https://i.postimg.cc/Vs27W5fv/12.webp"
const photo4 = "https://i.postimg.cc/bYZCn1j4/13.webp"
const photo5 = "https://i.postimg.cc/sg4wzcpG/14.webp"
const photo6 = "https://i.postimg.cc/3w3mZQ0d/2.webp"
const photo7 = "https://i.postimg.cc/65GrW0N5/3.webp"
const photo8 = "https://i.postimg.cc/mZn3WnJ5/4.webp"
const photo9 = "https://i.postimg.cc/Kj3MYZws/5.webp"
const photo10 = "https://i.postimg.cc/PqKZ3V1K/6.webp"
const photo11 = "https://i.postimg.cc/9Mn9V487/7.webp"
const photo12 = "https://i.postimg.cc/sDST6yxc/8.webp"
const photo13 = "https://i.postimg.cc/855vqdHG/9.webp"

const videoPhone =
  "https://ik.imagekit.io/adventureTours/AdventureTours/Sosua/banana-phone.mp4"
const video =
  "https://ik.imagekit.io/adventureTours/AdventureTours/Sosua/banana.mp4"
const banana = {
  id: uid(),
  name: "Banana Boat",
  location: "Sosua",
  link: "/sosua/tours/banana/",
  img: mainPhoto,
  price: "15 per person",
  cost: "7",
  description:
    "Get ready for a wet and wild adventure with our exhilarating banana boat rides in Sosua.",
  tourPage: {
    title1: "Thrills on the Waves",
    paragraph1:
      "Hold on tight as you hop aboard our inflatable banana-shaped boat and cruise along the stunning coastline, experiencing the thrill of speed, laughter, and endless fun on the open waters. Our banana boat rides are perfect for those seeking a dose of adrenaline and excitement. Feel the wind in your hair and the spray of the ocean as our experienced guides navigate the waves, ensuring a thrilling and safe ride for all participants. Get ready for twists, turns, and plenty of laughs as you hold on tight during this unforgettable water adventure.",
    title2: "Fun for All Ages",
    paragraph2:
      "Banana boat rides are suitable for individuals of all ages, making them a fantastic activity for families, friends, or groups looking to create unforgettable memories together. Whether you're traveling with children or a group of thrill-seekers, our banana boat rides offer a delightful experience that will leave everyone with smiles and laughter. As you cruise along the stunning coastline of Sosua, take in the picturesque views and bask in the beauty of your surroundings. Feel the refreshing splashes of seawater as the boat glides over the waves, providing a refreshing respite from the tropical heat. This adventure not only offers thrills but also allows you to soak in the natural beauty of the Dominican Republic's coastal paradise.",
    title3: "Unforgettable Water Fun",
    paragraph3:
      "Our banana boat rides provide an opportunity to break free from the ordinary and embrace the joy of pure water fun. Share laughter and excitement with your fellow riders as you navigate the waves together, creating memories that will be cherished long after your vacation ends. Prepare for an unforgettable adventure that will leave you with stories to tell and smiles on your faces. Ready to experience the thrill of a banana boat ride in Sosua? Contact our team directly to inquire about availability, pricing, and any additional information you may need for this exciting water activity. Our friendly staff will assist you in scheduling your ride and ensuring a memorable experience for you and your group.",
  },
  available: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  included: ["transportation", "Open Bar", "Lunch"],
  goodInfo: [
    "Bring your bathing suit and sunscreen",
    "All guests must be mobile and in good physical condition",
    "Transportation may not be available from some resorts or may be subject to an additional fee",
  ],
  extras: {
    duration: "10 minutes (approx.)",
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
  ],
  video: video,
  videoPhone: videoPhone,
}
export default banana
