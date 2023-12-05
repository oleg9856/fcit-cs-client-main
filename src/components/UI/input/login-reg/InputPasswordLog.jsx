import React from "react";

const InputPasswordLog = ({ onChange, text }) => (
  <div className="flex flex-col">
    <span
      className={"mb-[5px] font-Manrope text-xs font-bold uppercase text-white"}
    >
      {text}
    </span>
    <input
      className={`rounded-lg border-2 border-coolYellow bg-transparent pl-[30px] pt-[17px] pb-[18px] font-PostNoBills
		 text-xl font-semibold text-white`}
      onChange={onChange}
      type="password"
    />
  </div>
);

export default InputPasswordLog;
