import React from "react";
import { Collapse } from "react-collapse";
import ExpandIcon from "../icons/ExpandIcon";

const AccordionItem = ({ isOpen, toggle, title, desc, lastindex }) => (
  <div className={`max-w-[732px] whitespace-pre-wrap border-t-2 text-left font-Manrope font-bold text-white ${lastindex === 4 ? "border-b-2" : ""}`}>
    <div
      className={`flex max-w-[732px] cursor-pointer items-center justify-between duration-500 ${isOpen ? "pt-[30px] xss:pt-[10px]" : "py-[13px] xss:py-[5px]"}`}
      onClick={toggle}
    >
      <p
        className={`flex items-center text-[32px] text-3xl uppercase ${isOpen ? "text-yellow-600" : ""} xss:text-[20px]`}
      >
        {title}
      </p>

      <div className="flex-shrink-0">
        <ExpandIcon isOpen={isOpen} size={"big"}/>
      </div>

    </div>

    <Collapse isOpened={isOpen}>
      <div className="py-[30px] text-left text-xl leading-7 xss:text-[14px] xss:pb-[20px] xss:pt-[10px]">
        {desc}
      </div>
    </Collapse>
  </div>
);

export default AccordionItem;
