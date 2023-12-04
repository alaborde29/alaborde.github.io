import React from "react"
import workInfos from "../../content/work.json"
export default function WorkItem({ title }: any) {

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
        <div className="text-lg text-left">{infos.desc}</div>
        <div className="text-sm text-left pt-4">{infos.tags}</div>
      </div>
    </button>
  )
}