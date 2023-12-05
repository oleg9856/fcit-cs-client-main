import React, { useMemo } from "react";
import MainLayout from "../../layout/main/MainLayout";
import StaffCard from "./UI/StaffCard";
import StaffCardM from "./UI/StaffCardM";
import ShowMoreButton from "../../UI/button/ShowMoreButton";
import useSWRInfinite from "swr/infinite";
import Loader from "../../UI/loader/Loader";
import { useWindowSize } from "../../../hooks/useWindowSize"

const OurStaff = () => {
  const getKey = (pageIndex = 1, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null;
    return `${process.env.REACT_APP_SERVER_LINK}/api/data/staff?limit=10&page=${pageIndex + 1}`;
  }
  const fetcher = url => fetch(url).then(res => res.json())
  const { data, size, setSize, isLoading } = useSWRInfinite(getKey, fetcher, { parallel: true });
  const staffResult = data?.map(el => el.staff).flat();
  const [width] = useWindowSize();
  return (
    <MainLayout>
      <div className="flex flex-wrap items-center justify-center smm:gap-[30px]">
        {isLoading && <Loader />}
        {
          staffResult?.map((el) => (
            width >= 720 ? (
              <StaffCard
                key={el.id}
                id={el.id}
                name={el.name}
                position={el.position}
                img={el.img}
                phone={el.phone}
                email={el.email}
                office={el.office}
              />
            ) : (
              <StaffCardM
                name={el.name}
                img={el.img}
                position={el.position}
                id={el.id}
              />
            )
          ))}
      </div>
      <div className="mt-[20px] flex justify-center">
        {data && data[0].maxPages > size && <ShowMoreButton onClick={() => setSize(size + 1)} />}
      </div>
    </MainLayout>
  );
};

export default OurStaff;
