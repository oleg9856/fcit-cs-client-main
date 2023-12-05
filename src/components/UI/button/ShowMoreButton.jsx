import React from "react";
import { useTranslation } from "react-i18next";
import rotatingArrow from "../../../assets/rotatingArrow.svg";

const ShowMoreButton = ({ size = "big", onClick }) => {
  const { t } = useTranslation(["ourStaff"]);

  return (

    <button
      onClick={onClick}
      className={`flex relative z-10 select-none cursor-pointer items-center justify-center gap-[9px] rounded-[15px] bg-coolYellow font-semibold uppercase tracking-wider text-black
    ${size === "big" ? "h-[51px] w-[248px] text-[16px]" : "h-[37px] w-[208px] text-[14px]"}`}>
      {t("showMore", { ns: "ourStaff" })}
      <img
        src={rotatingArrow}
        alt="Rotating arrow"
        className={`${size === "big" ? "h-[20px] w-[20px]" : "h-[15px] w-[15px]"}`}
      />
    </button>
  );
};

export default ShowMoreButton;
