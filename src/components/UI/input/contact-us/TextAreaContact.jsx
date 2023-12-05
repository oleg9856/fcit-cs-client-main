import React from "react";

const TextAreaContact = ({ placeholder, onChange, value }) => {
  return (
    <textarea placeholder={placeholder} onChange={onChange} value={value}
      className={"pt-[15px] h-[175px] pb-[14px] bg-[#15161B] px-[22px] rounded-[15px] tracking-[0.1em] resize-none leading-[21px]"}/>

  );
};

export default TextAreaContact;
