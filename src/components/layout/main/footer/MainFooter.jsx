import React from "react";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import LogoComputerScience from "../../../../assets/LogoComputerScience.svg";
import footerBackground from "../../../../assets/footerBackground.png"
import "./iconsm.css";
import { Link } from "react-router-dom";

const MainFooter = () => {
  const { t, i18n } = useTranslation(["footer"]);

  return (
    <footer className="relative z-0 mx-auto mt-[240px] min-h-[420px] w-full font-Manrope text-xl text-white pb-[15px] smm:mt-0 bg-primary">
      <div className="relative z-10 mx-[40px] my-[50px] flex justify-between
      mdd:justify-evenly
      smm:grid smm:mx-auto smm:w-fit smm:scale-[1.1] smm:my-0">
        <div
          className="flex items-center gap-x-[12px]c smm:my-[60px] smm:block smm:w-fit smm:mx-auto">
          <img className="h-[60px] w-[60px] smm:mx-auto" src={LogoComputerScience} alt="" />
          <div className="w-[60px] uppercase  smm:text-center smm:mt-[10px] smm:w-[90px] font-PostNoBills">
            Software Engineering
          </div>
        </div>
        <div className="w-[40%] smm:mb-[50px] smm:w-fit">
          <ul
            className="grid grid-cols-2 gap-y-[20px] gap-x-[42%] whitespace-nowrap text-center capitalize leading-7 tracking-wider
            smm:grid-cols-1  smm:gap-y-[40px] smm:text-[24px]">
            <li>
              <Link to={"/news"}>{t("news", { ns: "footer" })}</Link>
            </li>
            <li>
              <Link to={"/our-staff"}>{t("campus", { ns: "footer" })}</Link>
            </li>
            <li>
              <Link to={"/about-us"}>{t("aboutUs", { ns: "footer" })}</Link>
            </li>
            <li>
              <Link to={"/programs"}>{t("programs", { ns: "footer" })}</Link>
            </li>

            <li>
              <Link to={"/contacts"}>{t("contacts", { ns: "footer" })}</Link>
            </li>
            <li>
              <Link to={"/admin-login"}>
                {t("areYouAdmin", { ns: "footer" })}
              </Link>
            </li>
          </ul>
        </div>

        <div
          className="whitespace-pre-wrap text-right font-bold uppercase leading-7 text-white mdd:hidden ">
          {t("information", { ns: "footer" })}
        </div>
      </div>
      <div
        className="relative z-10 my-[40px] h-[3px] w-full bg-gradient-to-r from-transparent via-white smm:my-[15px]"></div>
      <img
        className="absolute bottom-0 h-screen w-screen smm:object-none"
        src={footerBackground}
        alt=""
      />
      <div className="mx-auto my-[50px] w-fit smm:my-[25px]">
        <ul className="footericons">
          <li className="footericons--li circle">
            <div className="wave"></div>
            <a className="footericons--a " href="https://www.youtube.com/channel/UC8_AztX2iwEozJleDqkTaTA">
              <AiOutlineYoutube />
            </a>
          </li>
          <li className="footericons--li circle">
            <div className="wave"></div>
            <a className="footericons--a " href="https://www.facebook.com/groups/ipz.tneu">
              <FaFacebookF />
            </a>
          </li>
          <li className="footericons--li circle">
            <div className="wave"></div>
            <a className="footericons--a " href="https://www.instagram.com/ipz.fcit.zunu">
              <AiOutlineInstagram />
            </a>
          </li>
        </ul>
      </div>
      <div className="relative bottom-[-15px] mx-auto w-fit text-lg font-extrabold leading-6 smm:bottom-0 text-center">
        {t("copyright", { ns: "footer" })}
      </div>
    </footer>
  );
};
export default MainFooter;
