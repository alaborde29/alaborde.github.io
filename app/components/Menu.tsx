
'use client'
import { ButtonBase } from "@mui/material"
import { Link } from "react-scroll"
import React from "react"

export default function Menu() {
  return (
    <div className="flex flex-col fixed top-0 right-0 pt-10 pr-36 items-end text-xl">
      <Link smooth={true}
        duration={2000}
        to="top"><ButtonBase>Home</ButtonBase></Link>
      <Link smooth={true}
        offset={-100}
        duration={2000}
        to="work" ><ButtonBase>Work</ButtonBase></Link>
      <Link smooth={true}
        duration={2000}
        to="about" ><ButtonBase>About</ButtonBase></Link>
      <Link smooth={true}
        duration={2000}
        to="footer" ><ButtonBase>Contact</ButtonBase></Link>
    </div>
  )
}
