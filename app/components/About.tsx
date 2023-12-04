'use client'

import React from "react"
import aboutInfos from "../../content/about.json"
import Image from "next/image"
import { Element } from "react-scroll"
import "../i18n"
import { useTranslation } from 'react-i18next';

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
        width={width}
        height={height}
        className="object-contain filter grayscale hover:filter-none duration-300 transition hover:scale-110"
      />
    </div>
  );
};

function TechImages({className}:any) {
  return (
    <div className={"flex flex-wrap justify-around items-center md:pt-16 " + className}>
      <HoverImage src={"/images/js_logo.png"} alt={"fff"} width={300} height={300} />
      <HoverImage src={"/images/ts_logo.svg"} alt={"fff"} width={300} height={300} />
      <HoverImage src={"/images/react_logo.png"} alt={"fff"} width={300} height={300} />
      <HoverImage src={"/images/native_logo.png"} alt={"fff"} width={300} height={300} />
      <HoverImage src={"/images/cpp_logo.png"} alt={"fff"} width={300} height={300} />
      <HoverImage src={"/images/c_logo.png"} alt={"fff"} width={300} height={300} />
    </div>
  )
}

function AboutCard({className}:any) {
  const { t, i18n } = useTranslation('common');

  return (
    <div
      className="
        flex flex-col md:flex-row rounded-xl brightness-100 shadow-lg overflow-clip items-center
        max-w-screen-lg mx-auto
        "
    >
      <img src={"images/profile.webp"} alt={"Alexandre Laborde"} className="
        object-cover shadow-inner
        flex w-full h-full
        md:w-40 md:h-44
        lg:w-60 lg:h-64
        duration-300 transition hover:scale-110"
        

      />
      <div className="flex flex-col w-full px-4 md:px-6 space-y-2 py-6">
        <div className="flex text-justify font-bold text-sm w-full
        md:text-xl lg:text-xl xl:text-2xl md:mb-2">{t("aboutInfos")}</div>
      </div>
    </div>
  )
}

export default function About() {
  const { t, i18n } = useTranslation('common');

  return (
    <Element name="about" className="flex flex-col justify-center items-center  space-y-10 md:py-36">
      <p className="
        flex flex-row justify-center items-center font-bold text-5xl text-center
        md:p-4 xl:leading-loose
      ">{t("sections.about")}</p>
      <AboutCard className="" />
      <TechImages />
    </Element>
  )
}
