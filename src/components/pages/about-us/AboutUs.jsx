import React, { useState, useEffect } from "react"
import MainLayout from "../../layout/main/MainLayout"
import Main from "../../../assets/MainAboutUs.png"
import Icon from "../../../assets/AboutUSArrow.svg"
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation(["aboutus"]);
  const [isVisible, setIsVisible] = useState(false);
  const infoArray = [
    "info1",
    "info2",
    "info3",
    "info4",
    "info5",
    "info6",
    "info7",
    "info8",

  ];

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 0);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center font-[Inter] text-white">
        <div className="flex items-center relative w-full">
          <img
            className=" h-[760px] w-full object-cover brightness-75"
            src={Main}
            alt="Main Image" />
          <span className="absolute  text-[64px] max-w-[560px] uppercase leading-[87px] ml-[73px]">
            {t("main.maintext", { ns: "aboutus" })}
          </span>
        </div>

        <div className="flex z-10 w-full h-[101px] bg-white items-center justify-center mb-[120px]">
          <span className="text-[24px] font-semibold	text-black">
            Home/Campus/History Of The DEPARTMENT OF COMPUTER SCIENCE
          </span>
        </div>
        <div className="fleh w-[1440px]">
          <div className="mx-[48px]  font-semibold grid">
            <h1 className="text-[48px] mb-[32px]">{t("info.ourinf", { ns: "aboutus" })}</h1>
            {infoArray.map((value, index) => (
              <div className={`flex mb-[200px] ${index % 2 === 0 ? "justify-start" : "justify-end"} xs `}>
                <p className="max-w-[625px] text-[20px] leading-[150%]">{t(`info.${value}`, { ns: "aboutus" })}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 z-0 h-[92%] w-0  border-[3px] border-solid border-white" >
        </div>
      </div>
      <div
        className="flex flex-col justify-center items-center text-white font-[Inter] cursor-pointer"
        onClick={scrollToTop}>
        <img className="w-[30px] h-[30px]" src={Icon} alt="" />
        <div
          className="text-[20px] font-semibold leading-[24px]"
        >
          Повернутися до витоків
        </div>
      </div>
    </MainLayout >
  )
}

export default AboutUs
