import { uid } from "uid"
import tourPhoto from "../images/tours/scuba.webp"
const locations = [
  {
    id: uid(),
    name: "Punta Cana",
    link: "/puntacana",
    img: tourPhoto,
  },
  {
    id: uid(),
    name: "Sosua",
    link: "/sosua",
    img: tourPhoto,
  },
  {
    id: uid(),
    name: "Coming Soon",
    link: "/",
    img: tourPhoto,
  },
]

export default locations
