import React from "react"
import { navigate } from "gatsby"
import { Fab, Action } from "react-tiny-fab"
import "react-tiny-fab/dist/styles.css"
import { AiOutlinePlus } from "react-icons/ai"
import { MdOutlineEmail } from "react-icons/md" 
import { FaWhatsapp } from "react-icons/fa"
import { BsChatRightDots } from "react-icons/bs"

const mainButtonStyles = {
  backgroundColor: "#F58634",
  fontSize: '2rem',
  height: '45px',
  width: '45px',
}

const actionButtonStyles = {
  backgroundColor: "#ed7c28",
  fontSize: '1.2rem',
  height: '40px',
  width: '40px',
}
const handleEmail = () => {
  console.log('Email')
  navigate("mailto:adventurefuntours.dr@gmail.com?subject=Adventure Fun Tours")
  // window.open('mailto:adventurefuntours.dr@gmail.com?subject=Adventure Fun Tours')
}
const handleWhatapp = () => {
  console.log('Whatsapp')
  window.open("https://api.whatsapp.com/send?phone=18295641324")
  // window.open('https://api.whatsapp.com/send?phone=18295641324')
}
const handleContact = () => {
  navigate("/contact", { replace: false })
  // window.location.href = 'localhost:8000/contact'
}

const FloatingButton = () => {
  return (
    <Fab
      mainButtonStyles={mainButtonStyles}
      //style={style}
      icon={<AiOutlinePlus />}
      //event={event}
      //alwaysShowTitle={true}
      //onClick={someFunctionForTheMainButton}
    >
      <Action text="Email" style={actionButtonStyles} onClick={handleEmail}>
        <MdOutlineEmail />
      </Action>
      <Action text="WhatsApp" style={actionButtonStyles} onClick={handleWhatapp}>
        <FaWhatsapp />
      </Action>
      <Action text="Contact Us" style={actionButtonStyles} onClick={handleContact}>
        <BsChatRightDots />
      </Action>
    </Fab>
  )
}

export default FloatingButton
