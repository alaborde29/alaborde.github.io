import { ButtonBase, Typography } from "@mui/material"
import React from "react"
import FooterSocials from "./FooterSocials"
import { ArrowUpwardSharp } from "@mui/icons-material"

export default function Footer() {
  return (
    <div className="flex flex-row items-end p-4">
      <div className="flex flex-col w-full border-r-stone-800 border-r-2">
        <div className="flex flex-row justify-between items-center py-4 pr-8" >
          <div className="flex flex-col items-center text-7xl ">
            <div>Alexandre</div>
            <div className="ml-20">Laborde</div>
          </div>
          <FooterSocials />
        </div>
        <div className="flex flex-row justify-between items-center py-4 pr-8">
          <Typography>Copyright ©2023 A-L</Typography>
          <Typography>Made with ❤ from France!</Typography>
        </div>
      </div>
      <ButtonBase className="flex justify-center items-center m-10 ">
        <ArrowUpwardSharp style={{ fontSize: 140}} />
      </ButtonBase>
    </div>

  )
}
