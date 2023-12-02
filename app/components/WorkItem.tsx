import React from "react"
import workInfos from "../../content/work.json"
import Image from "next/image";
import { ButtonBase, Typography } from "@mui/material";
export default function WorkItem({ title }: any) {

  const infos: any = workInfos.find((work) => work.title === title);

  return (
    <ButtonBase 
      disableRipple 
      className="
        flex flex-col mx-8 rounded-xl brightness-75 shadow-lg overflow-clip
        transform duration-300 hover:brightness-100
        w-12/12
        md:
        " //neumobox class
      href={infos.link}
      target="_blank"
    >
      <img src={infos.image} alt={infos.title} className="
        w-full object-cover shadow-inner"
        
      />
      <div className="flex flex-col w-full px-6 space-y-2 py-6">
        <div className="font-bold text-3xl mr-auto">{infos.title}</div>
        <div className="text-lg text-left">{infos.desc}</div>
        <div className="text-sm text-left pt-4">{infos.tags}</div>
      </div>
    </ButtonBase>
  )
}