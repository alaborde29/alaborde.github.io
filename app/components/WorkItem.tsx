import React from "react"
import workInfos from "../../content/work.json"
import "../i18n"
import { useTranslation } from 'react-i18next';

export default function WorkItem({ title }: any) {
  const { i18n } = useTranslation('translation');
  const infos: any = workInfos.find((work) => work.title === title);

  const handleButtonClick = () => {
    // Handle button click action if needed
    window.open(infos.link, "_blank");
  };

  return (
    <button
      className="
        flex flex-col mx-8 rounded-xl brightness-75 shadow-lg overflow-clip
        transform duration-300 hover:brightness-100 w-12/12
        " //neumobox class
      onClick={handleButtonClick}
    >
      <img src={infos.image} alt={infos.title} className="
        w-full object-cover shadow-inner"

      />
      <div className="flex flex-col w-full px-6 space-y-2 py-6">
        <div className="font-bold text-3xl mr-auto">{infos.title}</div>
        <div className="text-lg text-left">
          {i18n.language === 'en' && infos.descEn}

          {i18n.language === 'fr' && infos.descFr}
        </div>
        <div className="text-sm text-left pt-4">{infos.tags}</div>
      </div>
    </button>
  )
}