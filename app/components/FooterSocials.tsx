import React from "react"
import { ButtonBase } from "@mui/material"
import "../i18n"
import { useTranslation } from 'react-i18next';

export default function FooterSocials() {
  const { t, i18n } = useTranslation('common');

  return (
    <div className="flex flex-col md:justify-end text-3xl">
      <ButtonBase disableRipple target="_blank" href="http://github.com/alaborde29" className="md:ml-auto transition duration-300 hover:scale-125">Github</ButtonBase>
      <ButtonBase disableRipple target="_blank" href="https://www.linkedin.com/in/alexandre-laborde/" className="md:ml-auto transition duration-300 hover:scale-125">Linkedin</ButtonBase>
      <ButtonBase disableRipple target="_blank" href="https://www.malt.fr/profile/alexandrelaborde" className="md:ml-auto transition duration-300 hover:scale-125">{t("hire-me")}</ButtonBase>
      <ButtonBase disableRipple target="_blank" href="mailto:laborde.a@live.fr" className="md:ml-auto transition duration-300 hover:scale-125">Email</ButtonBase>
    </div>
  )
}
