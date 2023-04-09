import React from "react"

import { Link } from "gatsby"
import { links } from "../../data/links"

const Links = () => {
  return (
    <>
      {links.map(link => {
        return (
          <Link to={link.link} key={link.id} className="no-underline">
            <button className="navLinks">{link.name}</button>
          </Link>
        )
      })}
    </>
  )
}

export default Links
