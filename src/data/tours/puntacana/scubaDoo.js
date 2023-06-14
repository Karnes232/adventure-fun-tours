import { uid } from "uid"

const mainPhoto = "https://i.postimg.cc/pXty9kbZ/scubadoo2.webp"
const photo1 = "https://i.postimg.cc/VstdLpTv/scubadoo1.webp"
const photo2 = "https://i.postimg.cc/02dj7m9q/scubadoo3.webp"
const photo3 = "https://i.postimg.cc/kgJ4s45R/scubadoo4.webp"
const photo4 = "https://i.postimg.cc/Jnf055yR/scubadoo5.webp"
const photo5 = "https://i.postimg.cc/Kjtzq3LB/scubadoo6.webp"
const videoPhone =
  "https://ik.imagekit.io/adventureTours/AdventureTours/PuntaCana/puntacana-scubadoo.mp4"
const video =
  "https://ik.imagekit.io/adventureTours/AdventureTours/PuntaCana/puntacana-scubadoo.mp4"
const scubaDoo = {
  id: uid(),
  name: "Scuba Doo",
  location: "Punta Cana",
  link: "/puntacana/tours/scubadoo/",
  img: mainPhoto,
  price: "55",
  cost: "35",
  description:
    "Immerse yourself in the wonders of the underwater world and experience an unforgettable adventure with ScubaDoo in Punta Cana.",
  tourPage: {
    title1: "Discover ScubaDoo: The Ultimate Underwater Experience",
    paragraph1:
      "ScubaDoo offers a unique opportunity to explore the underwater realm without the need for scuba diving certification. With our cutting-edge underwater scooters, you'll embark on an exhilarating journey that combines the freedom of snorkeling with the excitement of scuba diving. With ScubaDoo, you'll have the opportunity to glide effortlessly through the water, propelled by your own underwater scooter. Feel the thrill as you cruise along the vibrant coral reefs, marvel at the colorful marine life, and immerse yourself in the beauty of Punta Cana's underwater paradise.",
    title2:
      "Snorkeling Excursion and Glass Bottom Boat Adventure: Explore Above and Below",
    paragraph2:
      "In addition to the ScubaDoo experience, our tour provides the chance to go snorkeling and enjoy a captivating trip on a glass bottom boat. Dive in and witness the breathtaking beauty of the coral reefs, swim alongside colorful tropical fish, and marvel at the fascinating underwater landscapes. Whether you're an experienced snorkeler or new to the activity, our guides will ensure you have a safe and enjoyable experience. After snorkeling, hop aboard our glass bottom boat and discover the marine world from above. As you cruise over the crystal-clear waters, gaze through the glass bottom and be amazed by the vibrant underwater scenery below. Observe the colorful coral formations, spot playful marine creatures, and create lasting memories of this unique perspective on the underwater world.",
    title3: "Book Your ScubaDoo Adventure",
    paragraph3:
      "Ready to embark on an extraordinary underwater escapade in Punta Cana? Book your ScubaDoo adventure now and get ready to experience the wonders of the underwater world. Contact us directly to inquire about availability, pricing, and any additional information you may need. Please note that ScubaDoo reservations are exclusively handled by our team. To secure your spot or learn more about the tour, kindly reach out to us via email or through our contact page. Our dedicated staff will be delighted to assist you and ensure a seamless and unforgettable ScubaDoo experience.",
  },
  available: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  included: ["Transportation", "Snorkel Equipment", "Water"],
  goodInfo: [
    "Bring your bathing suit and sunscreen",
    "All guests must be mobile and in good physical condition",
    "Transportation may not be available from some resorts or may be subject to an additional fee",
  ],
  extras: {
    duration: "4 hours (approx.)",
    minAge: "10 years old",
    pregnant: "No",
    pickUp: "Yes",
  },

  photos: [photo1, photo2, photo3, mainPhoto, photo4, photo5],
  video: video,
  videoPhone: videoPhone,
}
export default scubaDoo
