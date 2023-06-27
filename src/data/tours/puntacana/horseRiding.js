import { uid } from "uid"
const mainPhoto = "https://i.postimg.cc/NGxH6sSK/bap14.webp"
const photo1 = "https://i.postimg.cc/mDfHwtTH/bap24.webp"
const photo2 = "https://i.postimg.cc/SxYRvkT7/bap6.webp"
const photo3 = "https://i.postimg.cc/SsM474MX/bap9.webp"

const videoPhone =
  "https://ik.imagekit.io/adventureTours/AdventureTours/PuntaCana/horse-phone.mp4"
const video =
  "https://ik.imagekit.io/adventureTours/AdventureTours/PuntaCana/horse.mp4"
const horseRiding = {
  id: uid(),
  name: "Horse Riding",
  location: "Punta Cana",
  link: "/puntacana/tours/horse/",
  img: mainPhoto,
  price: "89",
  cost: "35",
  description:
    "Saddle up and embark on a memorable horseback riding tour in Punta Cana, where you can immerse yourself in the stunning natural beauty of the Dominican Republic's tropical landscapes.",
  tourPage: {
    title1: "A Tranquil Journey",
    paragraph1:
      "Leave the hustle and bustle behind as you embark on a peaceful horseback riding excursion. Feel the gentle rhythm of your horse's hooves as you meander through scenic trails, winding through lush forests, along pristine beaches, and past breathtaking vistas. This tranquil journey allows you to slow down, embrace the serenity of nature, and appreciate the beauty that surrounds you. Whether you're an experienced rider or a novice, our horseback riding tour is designed to accommodate riders of all levels. Our friendly and knowledgeable guides will provide instruction and support to ensure a safe and enjoyable experience for everyone. So, whether you're a seasoned equestrian or trying horseback riding for the first time, saddle up and get ready for an adventure.",
    title2: "Connect with Majestic Horses",
    paragraph2:
      "Experience a unique bond with these majestic creatures as you connect with your horse during the tour. Our well-trained and well-cared-for horses will be your trusted companions on this journey, allowing you to experience the joy of horseback riding in a secure and comfortable manner. Feel the connection between horse and rider as you navigate the trails together, creating a lasting memory. Prepare to be captivated by the stunning scenery that unfolds during your horseback riding tour. From lush tropical forests to white sandy beaches and panoramic vistas, Punta Cana offers a picturesque backdrop for your equestrian adventure. Take in the sights, breathe in the fresh air, and let the natural beauty of the surroundings envelop you as you explore the hidden gems of the Dominican Republic.",
    title3: "Booking Your Horseback Riding Tour",
    paragraph3:
      "Ready to embark on a horseback riding adventure in Punta Cana? Contact our team directly to inquire about availability, pricing, and any additional information you may need for the horseback riding tour in partnership with the selected company. Our dedicated staff will assist you in planning your excursion, ensuring a seamless and enjoyable experience. To secure your spot or learn more about the horseback riding tour, kindly reach out to us via email through our contact page. Get ready to saddle up, connect with nature, and create cherished memories as you embark on a horseback riding tour in the stunning Punta Cana.",
  },
  available: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  included: [
    "Transportation",
    "Safety equipment and security briefing",
    "Lunch",
  ],
  goodInfo: [
    "Bring your bathing suit and sunscreen",
    "All guests must be mobile and in good physical condition",
    "Transportation may not be available from some resorts or may be subject to an additional fee",
  ],
  extras: {
    duration: "5 hours (approx.)",
    minAge: "Suitable for all ages",
    pregnant: "No",
    pickUp: "Yes",
  },

  photos: [
    {
      mobile: photo1,
      desktop: photo1,
    },
    {
      mobile: photo2,
      desktop: photo2,
    },
    {
      mobile: photo3,
      desktop: photo3,
    },
    {
      mobile: mainPhoto,
      desktop: mainPhoto,
    },
  ],
  video: video,
  videoPhone: videoPhone,
}
export default horseRiding
