
'use client'
import { ButtonBase } from "@mui/material"
import { Link } from "react-scroll"
import React from "react"
import MenuIcon from '@mui/icons-material/Menu';

export default function Menu() {
  return (
    // mettre un composant qui s'affiche quand la taille est trop basse
    <div>
      <div className="
      flex flex-col fixed top-0 right-0 pt-10 md:pr-10 items-end invisible
      md:text-xl md:visible
      lg:text-3xl
    ">
        <Link smooth={true}
          duration={2000}
          to="top"><ButtonBase className="transition duration-300 hover:scale-125">Home</ButtonBase></Link>
        <Link smooth={true}
          offset={-100}
          duration={2000}
          to="work" ><ButtonBase className="transition duration-300 hover:scale-125">Work</ButtonBase></Link>
        <Link smooth={true}
          duration={2000}
          to="about" ><ButtonBase className="transition duration-300 hover:scale-125">About</ButtonBase></Link>
        <Link smooth={true}
          duration={2000}
          to="footer" ><ButtonBase className="transition duration-300 hover:scale-125">Contact</ButtonBase></Link>
      </div>
      {/* <div className="
        flex flex-col fixed top-0 right-0 pr-5 pt-5 md:pr-10 items-end visible
        md:text-xl md:invisible
        lg:text-3xl
      ">
        <ButtonBase disableRipple className="flex justify-center items-center">
          <MenuIcon className="text-4xl mix-blend-screen" />
        </ButtonBase>
      </div> */}
    </div>
  )
}
