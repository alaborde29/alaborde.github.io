'use client'

import React from "react"
import aboutInfos from "../../content/about.json"
import Image from "next/image"
import { Element } from "react-scroll"

const HoverImage = ({ src, alt, width, height }: any) => {
  return (
    <div className="
      flex w-20 h-24 m-4
      md:w-40 md:h-44 md:p-4
      lg:w-60 lg:h-64
    ">
        <Image
          src={src}
          alt={alt}
          width={width}  // Set the desired width
          height={height}  // Set the desired height
          className="object-contain filter grayscale hover:filter-none duration-300 transition hover:scale-110"
        />
    </div>
  );
};

function TechImages() {
  return (
  <div className="flex flex-wrap justify-around items-center md:pt-16 ">
    <HoverImage src={"/images/js_logo.png"} alt={"fff"} width={300} height={300} />
    <HoverImage src={"/images/ts_logo.svg"} alt={"fff"} width={300} height={300} />
    <HoverImage src={"/images/react_logo.png"} alt={"fff"} width={300} height={300} />
    <HoverImage src={"/images/native_logo.png"} alt={"fff"} width={300} height={300} />
    <HoverImage src={"/images/cpp_logo.png"} alt={"fff"} width={300} height={300} />
    <HoverImage src={"/images/c_logo.png"} alt={"fff"} width={300} height={300} />
  </div>
  )
}

export default function About() {
  return (
    <Element name="about" className="flex flex-col justify-center items-center p-4 space-y-10 md:py-36">
      <p className="
        flex flex-row justify-center items-center font-bold text-5xl
        md:p-4 md:text-7xl
      ">About</p>
      <p className="
        flex-wrap text-center font-bold text-lg
        md:text-2xl md:mb-2
      ">{aboutInfos.text}</p>
      <TechImages/>
    </Element>
  )
}
