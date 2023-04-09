import React from 'react'
import { Link } from "gatsby"
const BackCard = ({tour}) => {
  return (
    <div className="flip-card-back rounded-lg">
            <div className="text-start absolute top-9 left-3 text-primary-color space-y-6">
            <p className="text-2xl">{tour.name}</p>
            <p className="text-start text-lg">${tour.price}</p>
            <p className="font-light pb-5">{tour.description}</p>
            <Link to={tour.link} className="underline underline-offset-8">
              More Info
            </Link>
            </div>
            
          </div>
  )
}

export default BackCard