import React, { useState } from "react";
import CloseIcon from "../../UI/icons/CloseIcon";
import { useNavigate } from "react-router-dom";
import InputEmailLog from "../../UI/input/login-reg/InputEmailLog";
import InputPasswordLog from "../../UI/input/login-reg/InputPasswordLog";
import ErrorMessage from "../../UI/error/ErrorMessage";
import InputSubmitLog from "../../UI/input/login-reg/InputSubmitLog";
import { postData } from "../../../utils/fetch-data/postData";
import AdminLayout from "../../layout/admin/AdminLayout";
import { useTranslation } from "react-i18next";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { t, i18n } = useTranslation(["adminLogin", "errors"]);

  const handleSubmit = () => {
    const data = { email, password };
    postData(`${process.env.REACT_APP_SERVER_LINK}/api/admin/login`, data)
      .then(() => navigate("/admin-panel"))
      .catch((err) => setError(err));
  };

  return (
    <AdminLayout withHeader={false}>
      <div
        className={
          "relative h-screen w-screen bg-[url('assets/background.png')] bg-cover mdd:flex mdd:justify-center"
        }
      >
        <CloseIcon
          className={"absolute right-[48px] top-[48px] cursor-pointer"}
          onClick={() => navigate("/")}
        />

        <form
          className={
            "ml-[110px] flex h-full w-[500px] flex-col justify-center gap-[70px] mdd:ml-0 mdd:w-[330px] mdd:items-center"
          }
        >
          <h1
            className="bg-gradient-to-r from-white to-[#ffb902] bg-clip-text font-PostNoBills text-[64px] font-semibold uppercase tracking-[0.2em] [-webkit-text-stroke:2px_transparent]">
            Welcome
          </h1>
          <div className={"flex w-full flex-col gap-3"}>
            <div className={"flex w-full flex-col gap-[32px]"}>
              <InputEmailLog
                onChange={(e) => setEmail(e.target.value)}
                text={t("email", { ns: "adminLogin" })}
                className={""}
              />
              <InputPasswordLog
                onChange={(e) => setPassword(e.target.value)}
                text={t("password", { ns: "adminLogin" })}
              />
            </div>
            <ErrorMessage message={t(error, { ns: "errors" })}/>
          </div>
          <InputSubmitLog
            onClick={handleSubmit}
            text={t("logIn", { ns: "adminLogin" })}
            className={"w-full"}
          />
        </form>
      </div>
    </AdminLayout>
  );
};

export default AdminLogin;
