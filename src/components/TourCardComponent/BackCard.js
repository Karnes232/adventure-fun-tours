import React from "react"
import { Link } from "gatsby"
const BackCard = ({ tour }) => {
  const { name, price, description, link } = tour
  return (
    <div className="flip-card-back rounded-lg">
      <div className="text-start absolute top-9 left-3 text-primary-color space-y-6">
        <p className="text-2xl">{name}</p>
        <p className="text-start text-lg">${price}</p>
        <p className="font-light pb-5">{description}</p>
        <Link to={link} className="underline text-xl underline-offset-8 z-30">
          More Info
        </Link>
      </div>
    </div>
  )
}

export default BackCard
