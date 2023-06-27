import React from "react"
import { navigate } from "gatsby"
import { Fab, Action } from "react-tiny-fab"
import "react-tiny-fab/dist/styles.css"
import { AiOutlinePlus } from "react-icons/ai"
import { MdOutlineEmail } from "react-icons/md"
import { FaWhatsapp } from "react-icons/fa"
import { BsChatRightDots } from "react-icons/bs"
import useWindowWidth from "../../customHooks/useWindowWidth"

const mainButtonStyles = {
  backgroundColor: "#F58634",
  fontSize: "2rem",
  height: "45px",
  width: "45px",
}

const style = { bottom: 0, right: 0 }
const styleDesktop = { bottom: 24, right: 50 }
const actionButtonStyles = {
  backgroundColor: "#F58634",
  opacity: 0.75,
  fontSize: "1.2rem",
  height: "40px",
  width: "40px",
  left: "2px",
}
const handleEmail = () => {
  //navigate("mailto:adventurefuntours.dr@gmail.com?subject=Adventure Fun Tours")
  window.open(
    "mailto:adventurefuntours.dr@gmail.com?subject=Adventure Fun Tours"
  )
}
const handleWhatapp = () => {
  window.open("https://api.whatsapp.com/send?phone=18295641324")
}
const handleContact = () => {
  navigate("/contact")
}

const FloatingButton = () => {
  const windowWidth = useWindowWidth()
  return (
    <Fab
      mainButtonStyles={mainButtonStyles}
      style={windowWidth < 1200 ? style : styleDesktop}
      icon={<AiOutlinePlus />}
      //event={event}
      alwaysShowTitle={false}
      // onClick={handleMainButtonClick}
    >
      <Action text="Email" style={actionButtonStyles} onClick={handleEmail}>
        <MdOutlineEmail />
      </Action>
      <Action
        text="WhatsApp"
        style={actionButtonStyles}
        onClick={handleWhatapp}
      >
        <FaWhatsapp />
      </Action>
      <Action
        text="Contact Us"
        style={actionButtonStyles}
        onClick={handleContact}
      >
        <BsChatRightDots />
      </Action>
    </Fab>
  )
}

export default FloatingButton
