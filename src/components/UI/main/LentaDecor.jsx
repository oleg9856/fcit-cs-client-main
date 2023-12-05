import React from "react";
import { useWindowSize } from "../../../hooks/useWindowSize";

const LentaDecor = props => {

  const [width] = useWindowSize()
  const count = (width <= 1342 && width > 1140 && 5) || (width <= 1139 && width > 768 && 7) || (width <= 768 && 4) || 5
  return (
    <div className="w-full  smm:h-[490px]">
      {Array.from({ length: count }).map((_, i) => (
        <div
          className={`flex h-[175px] w-[100%] smm:h-[100px] ${i % 2 ? "animate-wright" : "animate-wleft"
            } ${i === 4 && ""}`}
          key={i}
        >
          {Array.from({ length: 10 }).map((_, j) => (
            <h1 className="custom smm:text-[128px]" key={`${i}-${j}`}>
              {props.text}
            </h1>
          ))}
        </div>
      ))}
    </div>
  )
};

export default LentaDecor;
