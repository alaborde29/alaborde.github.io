import React from "react"
import { ButtonBase } from "@mui/material"
import "../i18n"
import { useTranslation } from 'react-i18next';

export default function FooterSocials() {
  const { t, i18n } = useTranslation('common');

  const handleButtonClick:any = (link:any, blank:any) => {
    window.open(link, blank);
  };


  return (
    <div className="flex flex-col md:justify-end text-3xl">
      <button onClick={() => handleButtonClick("http://github.com/alaborde29", "_blank")} className="md:ml-auto transition duration-300 hover:scale-125">Github</button>
      <button onClick={() => handleButtonClick("https://www.linkedin.com/in/alexandre-laborde/", "_blank")} className="md:ml-auto transition duration-300 hover:scale-125">Linkedin</button>
      <button onClick={() => handleButtonClick("https://www.malt.fr/profile/alexandrelaborde", "_blank")} className="md:ml-auto transition duration-300 hover:scale-125">{t("hire-me")}</button>
      <button onClick={() => handleButtonClick("mailto:laborde.a@live.fr", "")} className="md:ml-auto transition duration-300 hover:scale-125">Email</button>
    </div>
  )
}
