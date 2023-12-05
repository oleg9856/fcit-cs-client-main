import React from "react";

const InputContact = ({ placeholder, onChange, value, type }) => {
  return (
    <input type={type} placeholder={placeholder} onChange={onChange} value={value}
      className={"pt-5 pb-[21px] bg-[#15161B] pl-[22px] rounded-[15px] tracking-[0.1em]"}/>
  );
};

export default InputContact;
