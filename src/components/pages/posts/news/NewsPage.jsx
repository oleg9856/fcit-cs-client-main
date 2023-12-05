import React from "react";
import MainLayout from "../../../layout/main/MainLayout";
import useSWRInfinite from "swr/infinite";
import Loader from "../../../UI/loader/Loader";
import FirstPost from "../FirstPost";
import PostItem from "../PostItem";
import ShowMoreButton from "../../../UI/button/ShowMoreButton";
import { useWindowSize } from "../../../../hooks/useWindowSize"
import MiniPost from "../MiniPost";

const NewsPage = () => {
  const getKey = (pageIndex = 1, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null;
    return `${process.env.REACT_APP_SERVER_LINK}/api/data/news?limit=7&page=${pageIndex + 1}`;
  }
  const fetcher = url => fetch(url).then(res => res.json())
  const { data, size, setSize, isLoading } = useSWRInfinite(getKey, fetcher, { parallel: true });
  const newsResult = data?.map(el => el.news).flat();
  const [width] = useWindowSize();

  return (
    <MainLayout>
      <div className={"max-w-[1440px] my-[81px] px-12 flex flex-wrap gap-y-[70px] gap-x-[20px] mx-auto"}>

        {isLoading && <Loader />}
        {
          newsResult?.map((el, index) => {
            if (index === 0) {
              return (
                width >= 1030 ? (
                  <FirstPost
                    key={el.id}
                    img={el.img}
                    title={el.title}
                    description={el.description_text}
                    id={el.id}
                    timestamp={el.timestamp}
                  />
                ) : (width >= 440 ?
                  <PostItem
                    key={el.id}
                    img={el.img}
                    title={el.title}
                    description={el.description_text}
                    id={el.id}
                    timestamp={el.timestamp}
                  /> : <MiniPost
                    key={el.id}
                    img={el.img}
                    title={el.title}
                    description={el.description_text}
                    id={el.id}
                    timestamp={el.timestamp}
                  />

                )
              );
            }
            return (
              width >= 440 ? (
                <PostItem
                  key={el.id}
                  img={el.img}
                  title={el.title}
                  description={el.description_text}
                  id={el.id}
                  timestamp={el.timestamp}
                />
              ) : (
                <MiniPost
                  key={el.id}
                  img={el.img}
                  title={el.title}
                  description={el.description_text}
                  id={el.id}
                  timestamp={el.timestamp}
                />
              )
            );
          })
        }

        <div className="mt-[20px] flex justify-center w-full">
          {data && data[0].maxPages > size && <ShowMoreButton onClick={() => setSize(size + 1)} />}
        </div>
      </div>

    </MainLayout>

  );
};

export default NewsPage;
