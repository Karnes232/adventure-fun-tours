import { uid } from "uid"

import puntaCanaPhoto from "../images/location/phone-puntaCana.webp"
import sosuaPhoto from "../images/location/phone-Sosua.webp"
import limonPhoto from "../images/location/phone-limon.webp"

const locations = [
  {
    id: uid(),
    name: "Punta Cana",
    link: "/puntacana",
    img: puntaCanaPhoto,
  },
  {
    id: uid(),
    name: "Sosua",
    link: "/sosua",
    img: sosuaPhoto,
  },
  {
    id: uid(),
    name: "Coming Soon",
    link: "/",
    img: limonPhoto,
  },
]

export default locations
