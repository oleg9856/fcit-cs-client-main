import React from "react";
import AccordionWChildren from "../../UI/accordion/AccordionWChildren";
import { useTranslation } from "react-i18next";

const AccordionContactItem = ({ title, name, phone, email, className, defaultOpen }) => {
  const { t } = useTranslation(["contacts"]);

  return (
    <AccordionWChildren defaultOpen={defaultOpen} title={title}
      className={`${className} bg-contactBlack px-[20px] rounded-[30px] cursor-pointer text-xl`}
      titleClassName={"py-[18px]"}
    >

      <div className={"pt-[7px] pb-[19px] flex flex-col gap-2.5 border-t-2 border-pointGray"}>
        <div className={"flex flex-col gap-3"}>
          <span className={"text-pointGray text-xl"}>
            {t("accordionItems.fullName", { ns: "contacts" })}
          </span>
          <span className={"text-white font-Montserrat text-base"}>
            {name}
          </span>
        </div>
        <div className={"flex flex-col gap-3"}>
          <span className={"text-pointGray text-xl"}>
            {t("accordionItems.phone", { ns: "contacts" })}
          </span>
          <span className={"text-white font-Montserrat text-base"}>
            {phone}
          </span>
        </div>
        <div className={"flex flex-col gap-3"}>
          <span className={"text-pointGray text-xl"}>
            {t("accordionItems.email", { ns: "contacts" })}
          </span>
          <span className={"text-white font-Montserrat text-base"}>
            {email}
          </span>
        </div>
      </div>
    </AccordionWChildren>
  );
};

export default AccordionContactItem;
