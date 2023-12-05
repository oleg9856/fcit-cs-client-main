import React from "react";
import CardPersonPosition from "../../../../assets/CardPersonPosition.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const StaffCard = ({ id, name, position, img, phone, email, office }) => {
  const { t } = useTranslation(["ourStaff"]);
  const keyValueArray = [
    { key: "Phone:", value: phone },
    { key: "E-mail:", value: email },
    { key: "Office:", value: office }
  ];

  return (
    <div className="m-[20px] w-[662px] rounded-[15px] p-[2px] text-white bg-white bg-opacity-20 shadow-md backdrop-blur-2xl">
      <div className="box-border flex h-[346px] w-full">
        <img
          src={img}
          alt=""
          className="h-full w-[272px] rounded-[15px] object-cover"
        />

        <div className="w-full px-[35px] pt-[46px]">
          <h2 className="max-w-[270px] truncate pb-[12px] text-lg font-semibold capitalize not-italic leading-5 tracking-widest">
            {name}
          </h2>

          <div className="mb-[35px] flex">
            <img src={CardPersonPosition} alt="" className="mr-2" />
            <p className="max-w-[270px] truncate text-[#a1a1a1]">{position}</p>
          </div>
          <div className="mb-[36px] h-px w-full bg-white"></div>
          <div className="grid gap-y-[15px]">
            {keyValueArray.map((item, id) => (
              item.value &&
              <div className="flex gap-[50px]" key={id}>
                <span className="w-[65px]">{item.key}</span>
                <span className="flex-nowrap overflow-hidden max-w-[160px] h-[20px] line-clamp-1"> {item.value}</span>
              </div>
            ))}
          </div>
          <div className="ml-auto mt-[25px] w-fit rounded-[15px] bg-[#ffb902]">
            <Link
              to={`/our-staff/${id}`}
              className="font-Montserrat flex h-[38px] w-[176px] items-center justify-center font-medium tracking-widest text-black"
            >
              {t("more", { ns: "ourStaff" })}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
