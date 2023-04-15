import React from "react"
import TourMenu from "./TourMenu"
import { Link } from "gatsby"

const Links = () => {
  return (
    <>
      <Link to="/" className="no-underline">
        <button className="navLinks">Home</button>
      </Link>
      <Link to="/contact" className="no-underline">
        <button className="navLinks">Contact Us</button>
      </Link>
      <Link to='"/about"' className="no-underline">
        <button className="navLinks">About</button>
      </Link>
      <TourMenu />
    </>
  )
}

export default Links
