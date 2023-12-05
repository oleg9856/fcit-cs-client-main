import React from "react";

const InputEmailLog = ({ onChange, text, className }) => (
  <div className={`flex flex-col ${className}`}>
    <span
      className={"mb-[5px] font-Manrope text-xs font-bold uppercase text-white"}
    >
      {text}
    </span>
    <input
      onChange={onChange}
      className={
        "w-full rounded-lg border-2 border-coolYellow bg-transparent pl-[30px] pt-[17px] pb-[18px] font-PostNoBills text-xl font-semibold tracking-widest text-white"
      }
      type={"email"}
    />
  </div>
);

export default InputEmailLog;
