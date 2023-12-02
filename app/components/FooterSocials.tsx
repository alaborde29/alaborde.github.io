import React from "react"
import { ButtonBase } from "@mui/material"

export default function FooterSocials() {
  return (
    <div className="flex flex-col md:justify-end text-3xl">
      <ButtonBase disableRipple href="http://github.com/alaborde29" className="md:ml-auto transition duration-300 hover:scale-125">Github</ButtonBase>
      <ButtonBase disableRipple href="https://www.linkedin.com/in/alexandre-laborde/" className="md:ml-auto transition duration-300 hover:scale-125">Linkedin</ButtonBase>
      <ButtonBase disableRipple href="mailto:laborde.a@live.fr" className="md:ml-auto transition duration-300 hover:scale-125">Hire me !</ButtonBase>
      <ButtonBase disableRipple href="mailto:laborde.a@live.fr" className="md:ml-auto transition duration-300 hover:scale-125">Email</ButtonBase>
    </div>
  )
}
