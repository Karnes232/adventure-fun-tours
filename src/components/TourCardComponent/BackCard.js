import React from "react"
import { Link } from "gatsby"
const BackCard = ({ tour }) => {
  const { name, price, description, link } = tour
  return (
    <div className="flip-card-back rounded-lg">
      <div className="text-start absolute top-9 left-3 text-primary-color space-y-6">
      <Link to={link} className=""><p className="text-2xl">{name}</p></Link>
        <p className="text-start text-lg">${price}</p>
        <p className="font-light pb-5">{description}</p>
        <Link to={link} className="underline text-xl underline-offset-8 z-30">
          More Info
        </Link>
        <a
          href="puntacana/tours/scuba"
          target="_blank"
          aria-label="Instagram"
          rel="noreferrer"
        >More Info</a>
      </div>
    </div>
  )
}

export default BackCard
