import React from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// import logo from "../../images/logo-fun.png"
const Logo = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Link to="/" className="no-underline" aria-label="Home">
          <div className="flex p-2 md:p-6 items-center w-36 h-28 cursor-pointer md:w-48 md:h-32 xl:w-64 xl:h-40">
            <StaticImage
              src="../../images/logo-fun.png"
              loading="eager"
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
          </div>
        </Link>
      </div>
    </>
  )
}

export default Logo
