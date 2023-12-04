'use client'

import React from "react"
import Header from "./components/Header"

import Footer from "./components/Footer"
import Menu from "./components/Menu"
import CustomCursor from "./components/CustomCursor"
import { Link, Element } from "react-scroll"
import About from "./components/About"
import Work from "./components/Work"
import IntroAnimation from "./components/IntroAnimation"
import "./i18n"
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t, i18n } = useTranslation('common');

  return (
    <main className="bg-zinc-50 h-full w-full overflow-x-hidden">
      <Element name="top"/>
      {/* <IntroAnimation /> */}
      <CustomCursor />
      <div className="flex flex-col">
        <Header/>
        <Work />
        <div className=" sm:mx-10 md:mx-20 lg:mx-32 xl:mx-60 px-10 ">
          <About />
        </div>
      </div>
      <Footer />
      <Menu />
    </main>
  )
}
