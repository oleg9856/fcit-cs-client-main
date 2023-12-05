import React from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../../layout/main/MainLayout";
import StaffSingleCard from "./UI/StaffSingleCard";
import StaffLinkCard from "./UI/StaffLinkCard";
import useSWR from "swr";
import StaffDocs from "./UI/StaffDocs";
import Loader from "../../UI/loader/Loader";

const StaffISingle = () => {
  const { id } = useParams();
  //TODO: Connect to API instead of fake-db
  const fetcher = url => fetch(url).then(res => res.json());
  const { data, error, isLoading } = useSWR(`${process.env.REACT_APP_SERVER_LINK}/api/data/staff/${id}`, fetcher);
  console.log(isLoading);
  console.log(data);

  return (
    <MainLayout>
      {isLoading
        ?
        <Loader/>
        :
        <div className="flex flex-col items-center gap-10 text-white font-Roboto py-10 mdd:px-8">
          <StaffSingleCard
            data={data}
          />
          <StaffLinkCard links={data?.staff.link_array} />
          <StaffDocs id={id} />
        </div>
      }

    </MainLayout >
  );
};

export default StaffISingle;
