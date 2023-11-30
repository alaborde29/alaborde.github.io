'use client'

import { Typography } from "@mui/material"
import React from "react"
import WorkItem from "./WorkItem"
import { Element } from "react-scroll"

export default function Work() {
  return (
    <Element name="work" className=" pb-36">
      <Typography className="flex flex-row justify-center items-center p-4 text-7xl font-bold pb-20">Work</Typography>
      <div className="flex flex-wrap justify-center items-center py-4 space-x-10">
        <WorkItem title="Portfolio"></WorkItem>
        <WorkItem title="Nolosay"></WorkItem>
      </div>
    </Element>
  )
}
