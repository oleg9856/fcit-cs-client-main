import React, { useState } from "react";
import { Parallax } from "react-parallax";
import { useTranslation } from "react-i18next";
import AccordionItem from "../accordion/AccordionItem";
import faqs from "../../../assets/kelly-sikkema-F7UonANW5LU-unsplash 1.png";

const Qa = () => {
  const { t, i18n } = useTranslation(["main"]);
  const [selected, setSelected] = useState(0);
  const ordinalNumbers = ["first", "second", "third", "fourth", "fifth"];

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className="relative z-40 mx-auto mt-[129px] flex min-h-[776px] max-w-[1344px] font-Manrope xll:list-item">
      <div className="max-w-[499px] text-white smm:px-4 xll:mx-auto">
        <h1 className="mb-[30px] flex text-6xl font-bold tracking-wider">
          {t("faqs.title", { ns: "main" })}
        </h1>
        <div className="mb-[36px] max-w-[500px] flex-wrap items-center text-xl uppercase leading-7">
          {t("faqs.description", { ns: "main" })}
        </div>
        <Parallax
          className="relative h-[540px] w-[501px] rounded-2xl xss:h-[360px] xss:max-w-[390px] xss:object-contain smm:w-full"
          bgImage={faqs}
          strength={100}
        >
        </Parallax>
      </div>

      <section className="ml-[105px] mt-[100px] max-w-[733px] text-black xll:mx-auto xll:mt-[20px]">
        <div className="max-w-[732px] px-[40px]">
          {ordinalNumbers.map((item, index) => (
            <AccordionItem
              lastindex={index}
              key={index}
              isOpen={index === selected}
              title={t(`faqs.${item}Question.title`, { ns: "main" })}
              desc={t(`faqs.${item}Question.answer`, { ns: "main" })}
              toggle={() => {
                toggle(index);
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Qa;
