import React from "react";
import i18n from "../../../../services/i18next/i18next";

const Dropdown = ({ setdrop, className }) => {
  const setUA = () => {
    setdrop();
    i18n.changeLanguage("uk-UA");
    console.log("setUA");
  };

  const setEN = () => {
    setdrop();
    i18n.changeLanguage("en-US");
    console.log("setEN");
  };

  return (
    <ul className={`${className} text-[30px] tracking-log text-black z-10 flex h-[100px] w-[66px] flex-col items-center justify-center rounded-xl bg-silv`}>
      <li onClick={setdrop}>
        <button onClick={setUA}>UA</button>
      </li>
      <span className=" my-1 w-12 border border-solid border-black	"></span>
      <li onClick={setdrop}>
        <button onClick={setEN}>EN</button>
      </li>
    </ul>
  );
};

export default Dropdown;
