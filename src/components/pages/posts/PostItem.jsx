import React from "react";
import { convertTimestamp } from "../../../utils/date/convertTimestamp";
import { useLocation, useNavigate } from "react-router-dom";

const PostItem = ({ id, title, description, img, timestamp }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div
      className={"w-[568px] flex flex-col gap-9 cursor-pointer mx-auto"}
      onClick={() => navigate(`${pathname}/${id}`)}
    >
      <img src={img} alt="News image" className={"rounded-[10px] h-[375px] object-cover"} />
      <div className={"px-[18px] border-l-2 border-white flex flex-col  max-h-[502px] gap-y-[10px]"}>
        <h1 className={"font-semibold text-[44px] text-white leading-[53.64px] line-clamp-3 font-Montserrat"}>
          {title}
        </h1>
        <div className={"flex flex-col gap-[11px] tracking-wider"}>
          <span className={"text-[#7E7E7E]"}>
            {convertTimestamp(timestamp)}
          </span>
          <p className={"text-2xl leading-[34px] text-white font-Roboto line-clamp-[8] font-normal tracking-wider"}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
