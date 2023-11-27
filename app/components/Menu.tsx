import { ButtonBase } from "@mui/material"
import React from "react"

export default function Menu() {
  return (
    <div className="flex flex-col fixed top-0 right-0">
      <ButtonBase disableRipple>Home</ButtonBase>
      <ButtonBase disableRipple>Work</ButtonBase>
      <ButtonBase disableRipple>About</ButtonBase>
      <ButtonBase disableRipple>Contact</ButtonBase>
    </div>
  )
}
