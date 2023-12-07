import React from "react";
import "../i18n"
import { useTranslation } from 'react-i18next';

const LanguageSwitch = () => {
  const { t, i18n } = useTranslation('translation');

  return (
    <div className="
    flex flex-col absolute top-0 left-0 pt-10 md:pl-10 items-end invisible z-20
    md:text-xl md:visible
    lg:text-3xl
    ">
      <button onClick={() => i18n.changeLanguage("fr")}>
        🇫🇷
      </button>
      <button onClick={() => i18n.changeLanguage("en")}>
        🇺🇸
      </button>
    </div>
  )
}

export default LanguageSwitch