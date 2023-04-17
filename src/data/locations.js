import { uid } from "uid"
import tourPhoto from "../images/tours/scuba.webp"
export const locations = [
  {
    id: uid(),
    name: "Punta Cana",
    link: "/puntacana/tours",
    img: tourPhoto,
  },
  {
    id: uid(),
    name: "Sosua",
    link: "/sosua/tours",
    img: tourPhoto,
  },
  {
    id: uid(),
    name: "Coming Soon",
    // link: "/",
    img: tourPhoto,
  },
]
