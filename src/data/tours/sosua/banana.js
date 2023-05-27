import { uid } from "uid"
// import mainPhoto from "../../../images/tours/somelink"
// import photo1 from "../../../images/tours/somelink"
// import photo2 from "../../../images/tours/somelink"
// import photo3 from "../../../images/tours/somelink"

// import video from "../../../videos/somelink"
const banana = {
  id: uid(),
  name: "Banana Boat",
  location: "Sosua",
  link: "/sosua/tours/banana/",
  img: mainPhoto,
  price: "",
  cost: "",
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

  photos: [photo1, photo2, photo3],
  video: video,
  videoPhone: videoPhone,
}
export default banana
