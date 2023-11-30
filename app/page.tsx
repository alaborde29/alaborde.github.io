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

export default function Home() {
  return (
    <main className="bg-zinc-50 h-full w-full ">
      <Element name="top"/>
      <IntroAnimation />
      <CustomCursor />
      <div className="flex flex-col px-1/5 ">
        <Header/>
        <div className="mx-4 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-96 px-10 ">
          <Work />
          <About />
        </div>
      </div>
      <Footer />
      <Menu />
    </main>
  )
}
