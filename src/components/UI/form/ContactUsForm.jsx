import React, { useState } from "react";
import InputContact from "../input/contact-us/InputContact";
import TextAreaContact from "../input/contact-us/TextAreaContact";
import SubmitContact from "../input/contact-us/SubmitContact";
import { postData } from "../../../utils/fetch-data/postData";
import { useTranslation } from "react-i18next";

const ContactUsForm = () => {
  const { t, i18n } = useTranslation(["contacts"]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && text && email)
      await postData("https://fcit-cs-server.vercel.app/api/email/contacts-email",
        { name, text, email });
  }

  return (
    <form
      className={"h-[597px] w-[522px] rounded-[30px] bg-contactBlack pt-[17px] pb-[25px] pl-[28px] pr-[30px] font-semibold text-white smm:w-10/12"}
      onSubmit={handleSubmit}>
      <h1 className={`uppercase smm:text-3xl tracking-wider mb-[18px] ${i18n.language === "en-US" ? "text-4xl" : "text-3xl"}`}>
        {t("contactUsForm.title", { ns: "contacts" })}
      </h1>
      <span className={`tracking-wider smm:text-sm ${i18n.language === "en-US" ? "text-md" : "text-sm"}`}>
        {t("contactUsForm.description", { ns: "contacts" })}
      </span>
      <div className={"flex flex-col gap-2.5 mt-[14px] mb-[25px] smm:mb-[13px] smm:mt-[10px]"}>
        <InputContact
          placeholder={t("contactUsForm.fullName", { ns: "contacts" })}
          type={"text"} value={name}
          onChange={e => setName(e.target.value)}
        />
        <InputContact
          placeholder={t("contactUsForm.email", { ns: "contacts" })}
          type={"email"} value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextAreaContact
          placeholder={t("contactUsForm.text", { ns: "contacts" })}
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </div>
      <div className={"flex flex-col gap-[15px] smm:gap-[10px]"}>
        <span className={`font-Montserrat capitalize tracking-wider ${i18n.language === "en-US" ? "text-[12px]" : "text-[10px]"}`}>
          {t("contactUsForm.warning", { ns: "contacts" })}
        </span>
        <SubmitContact value={t("contactUsForm.send", { ns: "contacts" })} />
      </div>
    </form>
  );
};

export default ContactUsForm;
