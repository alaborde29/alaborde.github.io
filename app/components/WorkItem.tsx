import React from "react"
import workInfos from "../../content/work.json"
import Image from "next/image";
import { ButtonBase, Typography } from "@mui/material";
export default function WorkItem({ title }) {

  const infos = workInfos.find((work) => work.title === title);

  return (
    <ButtonBase disableRipple className="flex flex-col px-8 max-w-xl rounded overflow-hidden shadow-lg">
      <img src={infos.image} alt={infos.title} className="w-full h-auto object-cover mb-4" />
      <div className="flex flex-col px-6 py-4">
        <div className="font-bold text-3xl mb-2 mr-auto">{infos.title}</div>
        <div className="text-xl text-left">{infos.desc}</div>
      </div>
    </ButtonBase>
  )
}