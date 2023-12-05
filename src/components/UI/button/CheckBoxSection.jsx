import React from "react";

const peerNames = {
  news: "peer/news",
  events: "peer/events",
};

const peerBasedStyles = {
  news: "peer-checked/news:bg-[#ffb902] peer-checked/news:[-webkit-text-fill-color:transparent] peer-checked/news:[-webkit-text-stroke:2px_black]",
  events:
    "peer-checked/events:bg-[#ffb902] peer-checked/events:[-webkit-text-fill-color:transparent] peer-checked/events:[-webkit-text-stroke:2px_black]",
};

const CheckBoxSection = ({ text, sectionName, isChecked, onChange }) => {
  return (
    <div className="flex h-[94px] max-w-[249px] flex-1 smm:w-[154px] smm:h-[57px] smm:z-50">
      <input
        type="radio"
        name="react-radio-buttons"
        id={sectionName}
        defaultChecked={isChecked}
        onChange={onChange}
        className={`${peerNames[sectionName]} absolute appearance-none`}
      />
      <label
        htmlFor={sectionName}
        className={`${peerBasedStyles[sectionName]} flex flex-1 select-none justify-center rounded-[15px] border-[3px] border-[#ffb902]
        font-Manrope text-[36px] smm:text-[27px] font-bold tracking-[0.15em] text-white`}
      >
        <span className="ml-[0.15em] self-center ">{text}</span>
      </label>
    </div>
  );
};

export default CheckBoxSection;
