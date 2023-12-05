import React, { useState } from "react";
import ExpandIcon from "../../../UI/icons/ExpandIcon";
import { Collapse } from "react-collapse";

const StaffAccordion = ({ children, title, className, defaultOpen }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={className}>
      <div className={`flex items-center justify-between gap-2.5 py-[9px] ${open ? "": "h-[67px]"}`}
        onClick={() => setOpen(!open)}
      >
        <span className={`font-semibold text-white tracking-wider ${open ? "line-clamp-3": "line-clamp-2"}`}>
          {title}
        </span>
        <div>
          <ExpandIcon isOpen={open} size={"small"}/>
        </div>
      </div>
      <Collapse isOpened={open}>
        {children}
      </Collapse>
    </div>
  );
};

export default StaffAccordion;
