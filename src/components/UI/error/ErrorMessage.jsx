import React from "react";
import ErrorIcon from "@mui/icons-material/Error";

const ErrorMessage = ({ message }) => (
  <div
    className={`flex gap-[10px] font-bold text-errorRed ${
      message ? "opacity-100" : "opacity-0"
    }`}
  >
    <ErrorIcon className={"h-[26px] w-[26px]"}/>
    <span className={"font-Manrope uppercase tracking-[0.05px]"}>
      {message}
    </span>
  </div>
);

export default ErrorMessage;
