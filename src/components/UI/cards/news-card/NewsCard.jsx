import React from "react"
import { Link } from "react-router-dom";

const NewsCard = ({ img, title, descriptionText, id, text }) => {
  return (
    <div className="relative text-white w-[564px] h-[334.36px]">
      <img className="object-cover rounded-[15px] w-[564px] h-[334px] brightness-75" src={img} alt="" />
      <Link
        to={`/${text}/${id}`}
        className="cursor-pointer">
        <div className="absolute w-full font-Manrope bottom-[24px] left-[24px] pr-10">
          <h1 className="font-bold text-2xl leading-8 truncate w-full">{title}</h1>
          <p className="w-[516px] h-[72px] line-clamp-3">{descriptionText}</p>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
