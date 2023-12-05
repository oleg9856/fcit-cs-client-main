import React from "react";
const ShowMoreBtn = ({ className, onClick }) => {

  return (
    <div
      className={`${className} py-1.5 px-[14px] shadow-[0px_2px_5px_0px_#FFFFFF40_inset] backdrop-blur-[5px] uppercase bg-[#FFFFFF33]
     cursor-pointer flex gap-[7px] items-center rounded-[5px] text-white font-Montserrat`}
      onClick={onClick}
    >
      <span className={"text-sm"}>
        More
      </span>
      <span className={"text-[10px] mt-[1px]"}>
        &#9654;
      </span>
    </div>
  );
};

export default ShowMoreBtn;
