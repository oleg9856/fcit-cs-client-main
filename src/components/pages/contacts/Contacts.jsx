import React from "react";
import MainLayout from "../../layout/main/MainLayout";
import ContactUsForm from "../../UI/form/ContactUsForm";
import Map from "../../UI/map/Map";
import AccordionContactItem from "./AccordionContactItem";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t, i18n } = useTranslation(["contacts"]);
  const accordionItems = ["admission", "education", "hostel", "documents", "collaboration"];

  return (
    <MainLayout withFooter={false}>
      <div className={`flex gap-10 smm:gap-[15px] flex-wrap py-[65px] justify-center
      ${i18n.language === "en-US" && "font-PostNoBills"}`}>
        <div className={"flex flex-col gap-[19px] items-center"}>
          <Map
            lat={49.56079099978532}
            lng={25.59591599904853}
            zoom={15}
            className={"w-[636px] h-[280px] rounded-[30px] smm:w-10/12 smm:h-[200px]"}/>
          <div className={"flex smm:flex-wrap justify-center gap-9 smm:gap-[15px]"}>
            <div className={"flex flex-col gap-[15px]"}>
              {accordionItems.slice(0, 2).map((item, index) =>
                <AccordionContactItem
                  className={"w-[300px]"}
                  defaultOpen={index === 0}
                  key={index}
                  title={t(`accordionItems.${item}.title`, { ns: "contacts" })}
                  name={t(`accordionItems.${item}.fullName`, { ns: "contacts" })}
                  phone={t(`accordionItems.${item}.phone`, { ns: "contacts" })}
                  email={t(`accordionItems.${item}.email`, { ns: "contacts" })}
                />
              )}
            </div>
            <div className={"flex flex-col gap-[15px]"}>
              {accordionItems.slice(2, 4).map((item, index) =>
                <AccordionContactItem
                  className={"w-[300px]"}
                  defaultOpen={index === 1}
                  key={index}
                  title={t(`accordionItems.${item}.title`, { ns: "contacts" })}
                  name={t(`accordionItems.${item}.fullName`, { ns: "contacts" })}
                  phone={t(`accordionItems.${item}.phone`, { ns: "contacts" })}
                  email={t(`accordionItems.${item}.email`, { ns: "contacts" })}
                />
              )}
            </div>
          </div>
        </div>
        <div className={"flex flex-col smm:flex-col-reverse items-center gap-[21px]"}>
          <ContactUsForm />
          {accordionItems.slice(-1).map((item, index) =>
            <AccordionContactItem
              className={"w-[522px] smm:w-[300px]"}
              defaultOpen={index === 1}
              key={index}
              title={t(`accordionItems.${item}.title`, { ns: "contacts" })}
              name={t(`accordionItems.${item}.fullName`, { ns: "contacts" })}
              phone={t(`accordionItems.${item}.phone`, { ns: "contacts" })}
              email={t(`accordionItems.${item}.email`, { ns: "contacts" })}
            />
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Contacts;
