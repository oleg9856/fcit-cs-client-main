import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import English from "./english/English.json";
import Ukrainian from "./ukrainian/Ukrainian.json";

const resources = {
  "en-US": {
    header: English.header,
    main: English.main,
    footer: English.footer,
    ourStaff: English.ourStaff,
    adminLogin: English.adminLogin,
    contacts: English.contacts,
    errors: English.errors,
    aboutus: English.aboutus

  },
  "uk-UA": {
    header: Ukrainian.header,
    main: Ukrainian.main,
    footer: Ukrainian.footer,
    ourStaff: Ukrainian.ourStaff,
    adminLogin: Ukrainian.adminLogin,
    contacts: Ukrainian.contacts,
    errors: Ukrainian.errors,
    aboutus: Ukrainian.aboutus

  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "uk-UA", // Default language
});

export default i18next;
