'use client'

import React from "react"
import WorkItem from "./WorkItem"
import { Element } from "react-scroll"
import "../i18n"
import { useTranslation } from 'react-i18next';

export default function Work() {
  const { t, i18n } = useTranslation('common');
  
  return (
    <Element name="work" className="
      md:mx-20 mb-36
      lg:mx-32
      xl:mx-60
    ">
      <p className="
        flex flex-row justify-center items-center font-bold text-5xl
        pb-10
        md:p-4 md:text-7xl
      ">{t("sections.work")}</p>
      <div className="
        flex flex-col justify-center items-center py-4
        space-y-20
        max-w-screen-xl mx-auto
        md:flex-row 
        ">
        <WorkItem title="Portfolio"></WorkItem>
        <WorkItem title="Nolosay"></WorkItem>
      </div>
    </Element>
  )
}