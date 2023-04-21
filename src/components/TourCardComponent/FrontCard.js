import { Link } from "gatsby"
import React from "react"

const FrontCard = ({ tour }) => {
  const { name, img, price, description, link } = tour
  return (
    <div className="flip-card-front rounded-lg">
      <img
        className="rounded-lg w-[90vw] md:w-80 h-96 object-cover brightness-[.6]"
        src={img}
        alt={name}
      />
      <div className="absolute bottom-3 left-3 text-primary-color">
        <p className="text-lg text-start">{name}</p>
        <p className="text-start my-2">${price}</p>
        <p className="text-start font-light pb-5 lg:hidden">{description}</p>
        <p className="text-start lg:hidden"><Link to={link} className="underline underline-offset-8">
          More Info
        </Link></p>
      </div>
    </div>
  )
}

export default FrontCard
