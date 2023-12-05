import React from "react";

const InputSubmitLog = ({ onClick, text, className }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onClick();
  };

  return (
    <input
      type={"submit"}
      onClick={handleSubmit}
      value={text}
      className={`cursor-pointer rounded-lg bg-coolYellow py-[23px] font-Manrope text-xl font-bold capitalize tracking-[0.05em] text-normBlack ${className}`}
    />
  );
};

export default InputSubmitLog;
