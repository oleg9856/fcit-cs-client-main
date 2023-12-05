import React from "react";
import { convertTimestamp } from "../../../utils/date/convertTimestamp";
import { useLocation, useNavigate } from "react-router-dom";

const FirstPost = ({ id, title, description, img, timestamp }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div
      className={"h-[556px] flex items-center gap-y-5 cursor-pointer gap-x-[34px]"}
      onClick={() => navigate(`${pathname}/${id}`)}
    >
      <img src={img} alt="News image" className={"flex rounded-[10px] object-cover h-[434px] w-[564px]"} />
      <div className={"flex flex-col gap-[10px]"}>
        <h1 className={"font-semibold text-[44px] text-white leading-[50px] h-[200px] line-clamp-4 font-Montserrat"}>
          {title}
        </h1>
        <div className={"flex flex-col gap-[11px] tracking-wider"}>
          <span className={"text-[#7E7E7E]"}>
            {convertTimestamp(timestamp)}
          </span>
          <p className={"text-[20px] leading-[40.8px] text-white font-Roboto line-clamp-[7] font-normal tracking-wider"}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstPost;
