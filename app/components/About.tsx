import { Typography } from "@mui/material"
import React from "react"
import aboutInfos from "../../content/about.json"
import Image from "next/image"

const HoverImage = ({ src, alt, width, height }) => {
  return (
    <div className=" flex w-60 h-64 transition-transform duration-300 transform hover:scale-105  m-10">
      <div className="flex w-full h-full absolute top-0 left-0 transition-opacity duration-300">
        <Image
          src={src}
          alt={alt}
          width={width}  // Set the desired width
          height={height}  // Set the desired height
          className="w-full h-full object-cover filter grayscale hover:filter-none duration-300"
        />
      </div>
    </div>
  );
};



export default function About() {
  return (
    <div className="flex flex-col justify-center items-center p-4 text-7xl font-bold pb-20"> 
      <Typography className="flex flex-row justify-center items-center p-4 text-7xl font-bold py-20">About</Typography>
      
      <p className="flex-wrap text-center font-bold text-3xl mb-2">{aboutInfos.text}</p>
      <div className="flex flex-wrap justify-around items-center">
        <HoverImage src={"/images/js_logo.png"} alt={"fff"} width={300} height={300} />
        <HoverImage src={"/images/ts_logo.svg"} alt={"fff"} width={100} height={100} />
        <HoverImage src={"/images/react_logo.png"} alt={"fff"} width={100} height={100} />
        <HoverImage src={"/images/native_logo.png"} alt={"fff"} width={100} height={100} />
        <HoverImage src={"/images/cpp_logo.png"} alt={"fff"} width={100} height={100} />
        <HoverImage src={"/images/c_logo.png"} alt={"fff"} width={100} height={100} />
      </div>

    </div>
  )
}
