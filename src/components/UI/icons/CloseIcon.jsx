import React from "react";
import ClearIcon from "@mui/icons-material/Clear";

const CloseIcon = ({ className, onClick }) => (
  <ClearIcon
    fontSize={"large"}
    className={`rounded-xl bg-transparent p-1.5 border-[3px] border-whites text-white ${className}`}
    onClick={onClick}
  />
);

export default CloseIcon;
