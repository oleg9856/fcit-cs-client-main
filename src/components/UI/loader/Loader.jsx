import React from "react";

const Loader = () => {
  return (
    <div className={"flex w-full justify-center gap-8 items-center h-[83px] mt-10"}>
      <div className={"h-[83px] w-[5px] bg-white rounded-full animate-loader"}></div>
      <div className={"h-[83px] w-[5px] bg-white rounded-full animate-loader animation-delay-300"}></div>
      <div className={"h-[83px] w-[5px] bg-white rounded-full animate-loader animation-delay-600"}></div>
      <div className={"h-[83px] w-[5px] bg-white rounded-full animate-loader animation-delay-900"}></div>
    </div>
  );
};

export default Loader;
