import React, { useState } from "react";
import { Collapse } from "react-collapse";
import ExpandIcon from "../icons/ExpandIcon";

const AccordionWChildren = ({ children, title, className, titleClassName, defaultOpen }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={className}>
      <div className={`text-white tracking-wider flex items-center justify-between ${titleClassName}`}
        onClick={() => setOpen(!open)}
      >
        {title}
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

export default AccordionWChildren;
