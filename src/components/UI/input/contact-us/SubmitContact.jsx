import React from "react";

const SubmitContact = ({ value }) => {
  return (
    <input className={"w-full bg-[#15161B] h-[56px] rounded-[5px] smm:h-[45px] cursor-pointer"} type={"submit"} value={value}/>
  );
};

export default SubmitContact;
