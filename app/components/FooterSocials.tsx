import React from "react"
import { ButtonBase } from "@mui/material"

export default function FooterSocials() {
  return (
    <div className="flex flex-col justify-end text-3xl">
      <ButtonBase disableRipple className="ml-auto ">Github</ButtonBase>
      <ButtonBase disableRipple className="ml-auto ">Linkedin</ButtonBase>
      <ButtonBase disableRipple className="ml-auto ">Hire me !</ButtonBase>
      <ButtonBase disableRipple className="ml-auto ">Email</ButtonBase>
    </div>
  )
}
