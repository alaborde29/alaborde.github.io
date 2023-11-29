
'use client'
import { ButtonBase } from "@mui/material"
import { Link } from "react-scroll"
import React from "react"

export default function Menu() {
  return (
    <div className="flex flex-col fixed top-0 right-0">
      <Link >Home</Link>
      <Link >Work</Link>
      <Link >About</Link>
      <Link >Contact</Link>
    </div>
  )
}
