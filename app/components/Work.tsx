import { Typography } from "@mui/material"
import React from "react"
import WorkItem from "./WorkItem"

export default function Work() {
  return (
    <div >
      <Typography className="flex flex-row justify-center items-center p-4 text-7xl font-bold pb-20">Work</Typography>
      <div className="flex flex-wrap justify-center items-center py-4">
        <WorkItem title="Portfolio"></WorkItem>
        <WorkItem title="Nolosay"></WorkItem>
      </div>
    </div>
  )
}
