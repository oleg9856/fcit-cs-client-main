import React, { Component, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import useSWR from "swr";

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return (
      <div {...props}>
        <div className={"test relative mx-[7.5px] my-[19px] max-h-[414px] max-w-[322px]"}>
          <img
            className={"imgclass mx-auto h-[420px] w-[320px] rounded-2xl object-cover brightness-90"}
            src={props.img}
            alt=""
          />
          <Link to={`/our-staff/${props.id}`}
            className="cursor-pointer">
            <div className="absolute bottom-0 left-3 mx-auto mb-[14px] ml-[10px] font-Manrope text-white pr-[16px]">
              <h1 className="text-4xl">{props.fio}</h1>
              <h2 className="bottom-3 hidden leading-5">{props.text}</h2>
            </div>
          </Link>
        </div>
      </div >
    );
  }
}

const MainSlider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const settings = {
    variableWidth: true,
    className: "center",
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    dots: true,
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    afterChange: setSliderIndex,
    appendDots: (dots) => (
      <div
        style={{
          position: "relative",
          padding: "30px",
        }}
      >
        <div className="relatives bottom-0 left-0 mx-auto h-0 w-full max-w-[510px] border-[2px] border-solid border-[#B6B6B6]">
          <div
            className="relative -left-1 bottom-1 h-full border-[#FFFFFF] border-[4px] border-solid mb-[4px] border-r-8 rounded-2xl"
            style={{
              width: `${((sliderIndex + 1) / data?.staff.length) * 102}%`,
              transition: "width 0.5s ease-in-out",
            }}
          />
        </div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          variableWidth: false,
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { t } = useTranslation(["main"]);
  const fetcher = url => fetch(url).then(res => res.json())
  const { data, error, isLoading } = useSWR(`${process.env.REACT_APP_SERVER_LINK}/api/data/staff`, fetcher);

  return (
    <div className="h-[665px] min-w-[320px]">
      <h1 className="mx-auto mb-[76px] flex w-fit items-center text-center text-6xl font-bold uppercase text-white">
        {t("facultyStaff", { ns: "main" })}
      </h1>
      <Slider {...settings}>
        {data?.staff.map((item) => (
          <CustomSlide
            id={item.id}
            key={item.id}
            currIndex={sliderIndex}
            index={item.id}
            img={item.img}
            fio={item.name}
            text={item.position}
          />
        ))}
      </Slider>
    </div>
  );
};

export default React.memo(MainSlider);
