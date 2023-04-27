import { uid } from "uid"

import puntaCanaPhoto from "../images/location/puntaCana.jpg"
import sosuaPhoto from "../images/location/Sosua.jpg"
import limonPhoto from "../images/location/limon.jpg"

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
