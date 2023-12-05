import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageButton = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language)
  const handleClick = () => {
    if (language === "en-US") {
      i18n.changeLanguage("uk-UA")
        .then(() => setLanguage("uk-UA"));

    }
    else {
      i18n.changeLanguage("en-US")
        .then(() => setLanguage("en-US"));
    }
  }
  return (
    <div onClick={handleClick}
      className={`text-[30px] tracking-normal ${language === "en-US" && "tracking-widest"} w-[65px] h-[65px] text-black rounded-xl bg-silv flex items-center justify-center`}
    >
      {language === "en-US" ? "EN" : "UA"}
    </div>
  );
};

export default LanguageButton;
