import React from "react";
import CardPersonPosition from "../../../../assets/CardPersonPosition.svg";

const StaffSingleCard = ({ data }) => {
  const { degree, position, img, phone, email, office, name, text, subjects, articleCount, scientific_degree, CV_link } = data?.staff;
  const keyValueArray = [
    { key: "Academic status:", value: degree },
    { key: "Scientific degree:", value: scientific_degree },
    { key: "Phone:", value: phone },
    { key: "E-mail:", value: email },
    { key: "Office:", value: office },
    { key: "Total articles:", value: articleCount },
  ];
  return (
    <div className="flex flex-col gap-5 w-[960px] mdd:w-full rounded-[15px] px-[34px] smm:px-4 py-12 bg-[#ffffff0d] shadow-[0px_1px_4px_0px_#FFFFFF40_inset]">
      <div className="flex smm:flex-col gap-[34px] ">
        <img className="rounded-[15px] w-[273px] smm:self-center h-[403px] mdd:h-[389px] smm:h-[400px] object-cover" src={img} alt="" />
        <div>
          <div className="mb-[33px]">
            <h1 className={"leading-trim-both text-capitalize tracking-wider font-bold leading-14 text-4xl mdd:text-[32px] mb-2.5"}>{name}</h1>
            <div className="flex gap-3 text-[#C0BFBD]">
              <img src={CardPersonPosition} alt="" />
              <h2 className={"leading-trim-both text-capitalize tracking-wider text-2xl mdd:text-lg"}>{position}</h2>
            </div>
          </div>
          <h3 className={"tracking-wider font-black text-[20px] mdd:text-sm mb-[30px] smm:mb-5"}>Contacts:</h3>
          <div className={"tracking-wider font-black grid gap-y-4 smm:gap-y-5"}>
            {keyValueArray.map((item, id) => (
              item.value &&
              <div className="flex smm:flex-col items-center smm:items-start gap-[60px] smm:gap-2.5" key={id}>
                <span className="w-[160px] mdd:w-[132px] mdd:text-sm">{item.key}</span>
                <span className="font-semibold mdd:text-sm">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {
        subjects
        &&
        <p className={"text-xl mdd:text-sm leading-[34px] tracking-wide"}>
        Викладає: {subjects.join(", ")}
        </p>
      }
      <p className={"text-xl mdd:text-sm leading-[34px] tracking-wide"}>
        {text}
      </p>
      <a href={CV_link} target="_blank"
        className={"cursor-pointer bg-coolYellow py-[15px] px-5 text-black font-semibold w-[194px] truncate tracking-wider rounded-[15px] leading-[11px] uppercase"} rel="noreferrer">
        CV {name}
      </a>
    </div>
  );
};

export default React.memo(StaffSingleCard);
