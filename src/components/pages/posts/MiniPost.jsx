import React from "react";
import ShowMoreBtn from "../../UI/button/ShowMoreBtn";
import { useLocation, useNavigate } from "react-router-dom";

const MiniPost = ({ id, title, img }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className={"w-[322px] h-[244px] relative rounded-[10px]"}>
      <img src={img} alt="Post" className={"w-full h-full object-cover rounded-[10px]"} />
      <div className={"absolute w-full bottom-0 px-2.5 py-4 h-[104px] rounded-[10px] bg-[#0000004F]"}>
        <div className={""}>
          <p className={"h-fit text-white text-xl leading-6 line-clamp-[3] font-Montserrat font-semibold"}>{title}</p>
          <ShowMoreBtn
            className={"absolute bottom-2.5 right-[21px]"}
            onClick={() => navigate(`${pathname}/${id}`)}
          />
        </div>

      </div>
    </div>
  );
};

export default MiniPost;

