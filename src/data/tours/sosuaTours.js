import { uid } from "uid"

import horsePhoto from "../../images/tours/horse.jpg"
import scubaPhoto from "../../images/tours/scuba.webp"

export const tours = [
    {
        id: uid(),
        name: "Scuba",
        link: "/sosua/tours/scuba/",
        img: scubaPhoto,
        price: "120",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non consequatur voluptatem deserunt, delectus est deleniti. Illum, incidunt",
      },
      {
        id: uid(),
        name: "Horseback Riding",
        link: "/sosua/tours/horse/",
        img: horsePhoto,
        price: "45",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non consequatur voluptatem deserunt, delectus est deleniti. Illum, incidunt",
      },
]