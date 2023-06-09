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
        <Link to={link} className="underline underline-offset-8">
          More Info about <span className="capitalize">{name}</span>
        </Link>
      </div>
    </div>
  )
}

export default BackCard
