import React, { useState } from "react";
import LentaDecor from "./LentaDecor";
import CheckBoxSection from "../button/CheckBoxSection";
import NewsCard from "../cards/news-card/NewsCard";
import NewsCardM from "../cards/news-card/NewsCardM";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import useSWR from "swr";
import { useWindowSize } from "../../../hooks/useWindowSize";
import Loader from "../loader/Loader";

const MainLenta = () => {
  const { t } = useTranslation(["main"]);
  const [section, setSection] = useState("News");
  const [width] = useWindowSize();
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `${process.env.REACT_APP_SERVER_LINK
    }/api/data/${section.toLowerCase()}?limit=6&page=1`,
    fetcher
  );
  console.log(data);
  const settings = {
    focusOnSelect: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
  };

  return (
    <div className={"isolate mt-[60px] mb-[100px] h-fit smm:h-fit"}>
      <div className="relative mx-auto max-w-[534px] h-fit uppercase">
        <div className="flex flex-wrap justify-center gap-[36px] smm:gap-[22px] smm:px-4">
          <CheckBoxSection
            text={t("news", { ns: "main" })}
            sectionName={"news"}
            isChecked={true}
            onChange={() => setSection("News")}
          />
          <CheckBoxSection
            text={t("events", { ns: "main" })}
            sectionName={"events"}
            onChange={() => setSection("Events")}
          />
        </div>
      </div>
      <div className="max-w-[1362px] relative mx-auto h-fit w-full">
        <div className="absolute inset-0 z-10 mt-[132px] smm:mt-[50px]">
          {isLoading && <Loader />}
          {data &&
            (width <= 768 ? (
              <div className="w-[564px] h-full mx-auto sss:w-[360px]">
                <Slider {...settings}>
                  {data[section.toLowerCase()].map((item) => (
                    width <= 560 ?
                      < NewsCardM
                        text={section}
                        id={item.id}
                        key={item.id}
                        img={item.img}
                        title={item.title}
                        descriptionText={item.description_text}
                      /> :
                      < NewsCard
                        text={section}
                        id={item.id}
                        key={item.id}
                        img={item.img}
                        title={item.title}
                        descriptionText={item.description_text}
                      />
                  ))}
                </Slider>
              </div>
            ) : (
              <div className="flex flex-wrap gap-[30px] justify-center
              ">
                {data[section.toLowerCase()].map((item, index) =>
                  ((index === 0 || index === 5) && width >= 1345) ? (
                    <NewsCard
                      text={section}
                      id={item.id}
                      key={item.id}
                      img={item.img}
                      title={item.title}
                      descriptionText={item.description_text}
                    />
                  ) : (
                    <NewsCardM
                      text={section}
                      id={item.id}
                      key={item.id}
                      img={item.img}
                      title={item.title}
                      descriptionText={item.description_text}
                    />
                  )
                )}
              </div>
            )
            )}
        </div>
        <div className="relative smm:bottom-[70px]">
          <LentaDecor text={section} />
        </div>
      </div>
    </div>
  );
};

export default MainLenta;
