import React from "react";
import macbook from "../../../assets/macbook.png";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation(["main"]);

  const ordinalNumbers = [
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
    "eighth",
    "ninth",
    "tenth",
  ];

  return (
    <div>
      <div className="relative flex items-center">
        <img
          className="h-[788px] w-full object-cover"
          src={macbook}
          alt="MacBook"
        />

        <div className="absolute ml-[48px] uppercase tracking-wider text-white">
          <h1 className="max-w-[1080px] text-[48px] font-semibold leading-[59px]">
            {t("hero.heading", { ns: "main" })}
          </h1>

          <h2 className="mt-[20px] max-w-[682px] text-[16px] font-medium leading-5">
            {t("hero.subheading", { ns: "main" })}
          </h2>

          <h2 className="py-[30px] text-[24px] font-semibold leading-[29px]">
            {t("hero.lessonsHeading", { ns: "main" })}
          </h2>

          <div className="flex max-w-[682px] flex-wrap gap-[10px]">
            {ordinalNumbers.map((value) => (
              <div className="flex min-h-[30px] flex-auto items-center justify-center rounded-[15px] bg-white/20 px-[15px] text-[16px] font-medium leading-5">
                {t(`hero.lessons.${value}`, { ns: "main" })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
