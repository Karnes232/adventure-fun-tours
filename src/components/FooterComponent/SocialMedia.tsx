import React from "react"

import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa"
import { GrMail } from "react-icons/gr"

const SocialMedia = () => {
  return (
    <div className="border-b border-gray-500 md:border-none">
      <div className="flex flex-col mx-10 py-4 md:mx-20">
        <div className="flex justify-between">
          <a
            href="https://www.facebook.com/adventurefuntoursdr"
            target="_blank"
            aria-label="Facebook"
            rel="noreferrer"
          >
            <FaFacebookF className="footerIcons" />
          </a>
          <a
            href="https://www.instagram.com/adventurefuntoursdr/"
            target="_blank"
            aria-label="Instagram"
            rel="noreferrer"
          >
            <FaInstagram className="footerIcons" />
          </a>
          <a
            href="https://www.tiktok.com/@adventurefuntoursdr"
            aria-label="tiktok"
            rel="noreferrer"
          >
            <FaTiktok className="footerIcons" />
          </a>
        </div>
        <div className="flex justify-around mt-4">
          <a
            href="https://www.youtube.com/@Adventurefuntoursdr"
            aria-label="youtube"
            rel="noreferrer"
          >
            <FaYoutube className="footerIcons" />
          </a>
          <a
            href="mailto:adventurefuntours.dr@gmail.com"
            aria-label="Gmail"
            rel="noreferrer"
          >
            <GrMail className="footerIcons" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SocialMedia
