'use client'

import React from "react"
import Header from "./components/Header"

import Footer from "./components/Footer"
import Menu from "./components/Menu"
import { Element } from "react-scroll"
import About from "./components/About"
import Work from "./components/Work"
import IntroAnimation from "./components/IntroAnimation"
import "./i18n"
import { useTranslation } from 'react-i18next';
import LanguageSwitch from "./components/LanguageSwitch"
import AnimatedCursor from "react-animated-cursor"

export default function Home() {
  const { t, i18n } = useTranslation('translation');

  return (
    <main className="bg-zinc-50 dark:bg-neutral-950 h-full w-full overflow-x-hidden transition duration-300">
      {/* <IntroAnimation  /> */}
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color='255, 255, 255'
        outerAlpha={1}
        innerScale={1}
        outerScale={1.7}
        outerStyle={{
          mixBlendMode: 'exclusion'
        }}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
      <Element name="top" />
      <div className="flex flex-col text-black dark:text-white">
        <Header />
        <Work />
        <div className=" sm:mx-10 md:mx-20 lg:mx-32 xl:mx-60 px-10 text-black dark:text-white">
          <About />
        </div>
      </div>
      <Footer />
      <LanguageSwitch />
      <Menu />
    </main>
  )
}
