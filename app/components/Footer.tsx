'use client'

import React from "react"
import FooterSocials from "./FooterSocials"
import { ArrowUpwardSharp } from "@mui/icons-material"
import { Element } from "react-scroll"
import { Link } from "react-scroll"

export default function Footer() {
  return (
    <Element name="footer" className="
      flex flex-col p-4 items-center mt-36
      md:flex-row md:items-end 
    ">
      <div className="
        flex flex-col w-full 
        border-b-stone-800 border-b-2
        md:border-r-stone-800 md:border-r-2 md:border-b-0
      ">
        <div className="
          flex flex-col justify-between items-center py-4 md:pr-8 space-y-8
          md:flex-row
        ">
          <div className="
            flex flex-col items-center text-5xl font-bold select-none
            md:text-5xl
            lg:text-7xl
          ">
            <div className="-ml-11 md:ml-0 ">Alexandre</div>
            <div className="ml-20">Laborde</div>
          </div>
          <FooterSocials />
        </div>
        <div className="
          flex flex-col justify-between items-center mb-16
          md:pr-8 md:flex-row md:mb-0
        ">
          <p>Copyright ©2023 A-L</p>
          <p>Made with ❤ from France!</p>
        </div>
      </div>
      <Link smooth={true}
        duration={1000}
        to="top">
        <button className="flex justify-center items-center ">
          <div className="flex m-10 text-9xl transition duration-300 hover:scale-125">
            <ArrowUpwardSharp sx={{fontSize: "8rem"}} />
          </div>
        </button>
      </Link>
    </Element>
  )
}
