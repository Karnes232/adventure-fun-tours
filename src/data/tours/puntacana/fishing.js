import { uid } from "uid"
// import mainPhoto from "../../../images/tours/somelink"
// import photo1 from "../../../images/tours/somelink"
// import photo2 from "../../../images/tours/somelink"
// import photo3 from "../../../images/tours/somelink"

// import video from "../../../videos/somelink"
const fishing = {
  id: uid(),
  name: "Fishing",
  location: "Punta Cana",
  link: "/puntacana/tours/fishing/",
  img: mainPhoto,
  price: "110",
  cost: "50",
  description: "Are you ready to reel in the catch of a lifetime?",
  tourPage: {
    title1: "Experience the Thrill of Deep Sea Fishing",
    paragraph1: "Join us on our exhilarating 4-hour Deep Sea Fishing Tour in Punta Cana, where the open waters of the Caribbean become your playground for an unforgettable fishing experience. Step aboard our well-equipped fishing vessel, manned by experienced captains and crew who are passionate about fishing. Leave the shores behind as we venture into the deep blue, where big game fish roam. Feel the adrenaline surge through your veins as you cast your line and wait for that exhilarating bite.",
    title2: "Abundance of Marine Life",
    paragraph2: "Punta Cana is renowned for its rich marine biodiversity, making it a prime destination for deep sea fishing enthusiasts. Prepare to encounter an array of impressive species, including marlin, sailfish, dorado, wahoo, and tuna. Our experienced crew will share their knowledge and techniques to increase your chances of landing that trophy fish. As you navigate the waters, soak in the breathtaking coastal views of Punta Cana's shoreline. Marvel at the pristine beaches, swaying palm trees, and turquoise waters that make this destination a true tropical paradise. Capture memorable photos and enjoy the tranquil beauty of the Caribbean Sea.",
    title3: "Unforgettable Memories",
    paragraph3: "Deep sea fishing is not just about the thrill of the catch; it's an experience that creates lifelong memories. Share laughter, stories, and camaraderie with your fellow anglers as you pursue your fishing goals. Whether you're an experienced angler or new to the sport, our fishing tours cater to all skill levels and provide an adventure that will stay with you for years to come. Don't miss your chance to embark on an epic deep sea fishing adventure in Punta Cana. Reserve your spot on our 4-hour Deep Sea Fishing Tour and get ready to cast your line, battle with big game fish, and create memories that will last a lifetime. Whether you're seeking the thrill of the catch or simply want to enjoy the beauty of the open sea, our fishing tour promises an experience you won't forget.",
  },
  available: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  included: ["Transportation", "Fishing Equipment", "Drinks"],
  goodInfo: [
    "Bring your bathing suit and sunscreen",
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
export default fishing
