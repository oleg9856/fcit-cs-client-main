import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
import logo from "../../../../assets/LogoComputerScience.svg";
import japwhite from "../../../../assets/japwhite.svg";
import { useTranslation } from "react-i18next";
import LanguageButton from "../../../UI/button/LanguageButton";

const MainHeader = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [toggle, setToggle] = useState(false);
  const [openDrop, setOpenDrop] = useState(false);
  const { t, i18n } = useTranslation(["header"]);

  const toggleDropdown = () => {
    setOpenDrop((prevState) => !prevState);
  };
  const navLinks = [
    {
      link: "/news",
      title: t("news", { ns: "header" }),
    },
    {
      link: "/about-us",
      title: t("aboutUs", { ns: "header" }),
    },
    {
      link: "/programs",
      title: t("programs", { ns: "header" }),
    },
    {
      link: "/research",
      title: t("research", { ns: "header" }),
    },
    {
      link: "/our-staff",
      title: t("campus", { ns: "header" }),
    },
    {
      link: "/contacts",
      title: t("contacts", { ns: "header" }),
    },
  ];

  useEffect(() => {
    document.body.style.overflow = toggle ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggle]);

  document.body.addEventListener(
    "wheel",
    function (event) {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    },
    { passive: false }
  );

  return (
    <header className={`sticky top-0 z-50 bg-primary smm:px-[16px] ${i18n.language === "uk-UA" ? "font-medium" : "font-PostNoBills"}`}>
      <div className="flex justify-between px-12 uppercase">
        <div
          className={"my-[10px] flex cursor-pointer"}
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt=""
            className="w-[50px] min-w-[50px]"
          />
          <div className="flex w-32 items-center pl-4 text-xl font-semibold uppercase not-italic leading-6 tracking-wider text-white xss:hidden">
            Software Engineering
          </div>
        </div>
        <nav
          className={`navbar flex w-full items-center py-[5px] leading-9 tracking-log text-white text-adapt
            ${i18n.language === "uk-UA" ? "tracking-normal" : "text-adaptEN"}`}
        >
          <ul className="hidden flex-1 list-none items-center justify-end md:flex xll:flex-wrap">
            {navLinks.map((nav, index) => (
              <li
                key={nav.link}
                className={`cursor-pointer 
                  ${index === navLinks.length - 1 ? "mr-[50px] xll:mr-[40px]" : "mr-[50px] xll:mr-[40px]"}
                  ${pathname === nav.link ? "text-coolYellow" : "text-white"}
                `}
              >
                <Link to={nav.link}>{nav.title}</Link>
              </li>
            ))}
            <div
              className="relative cursor-pointer md:flex"
              onClick={toggleDropdown}
            >
              <span className="absolute">
                {openDrop && <Dropdown setdrop={toggleDropdown} className={"absolute top-10 left-4 -translate-x-1/2"} />}
              </span>
              <img className="h-[27px] w-[30px]" src={japwhite} alt="" />
            </div>
          </ul>

          <div className="flex flex-1 justify-end md:hidden ">
            <div
              className={`menu-btn relative z-50 h-[53px] w-[53px] overflow-hidden rounded-full object-contain ${toggle ? "active" : ""
                }`}
              onClick={() => {
                setToggle((prev) => !prev);
                setOpenDrop(false);
              }}
            >
              <span></span>
              <span></span>
            </div>
            <div
              className={`${toggle ? "flex" : "hidden"
                } absolute inset-0 z-10 h-screen w-screen min-w-[140px] backdrop-blur-3xl`}
              onClick={() => {
                setToggle((prevToggle) => !prevToggle);
              }}
            >
              <div className="absolute left-0 top-28 h-6 w-16 -rotate-90 font-Manrope text-xl leading-7 tracking-wider text-gray-500">
                MENU
              </div>
              <ul
                className={`flex flex-1 list-none flex-col items-center justify-center tracking-log text-adaptBurger
                    ${i18n.language === "en-US" && "text-adaptBurgerEN"}`}
              >
                <div>
                  {navLinks.map((nav, index) => (
                    <li
                      key={nav.link}
                      className={`${index === navLinks.length - 1 ? "mb-20" : "mb-5"
                        }`}
                    >
                      <Link to={nav.link}>{nav.title}</Link>
                    </li>
                  ))}
                  <div
                    className="mx-auto w-fit"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown();
                    }}
                  >
                    <LanguageButton />
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-white" />
    </header>
  );
};

export default MainHeader;
