import React, { useEffect, useState } from "react";
import StaffAccordion from "./StaffAccordion";
import ShowMoreButton from "../../../UI/button/ShowMoreButton";
import StaffAccordionChild from "./StaffAccordionChild";
import Loader from "../../../UI/loader/Loader";

const StaffDocs = ({ id }) => {
  const [docStart, setDocStart] = useState(0);
  const [docsObj, setDocs] = useState({ docs: [], totalCount: 0 });
  const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch(`${process.env.REACT_APP_SERVER_LINK}/api/data/staff/${id}/docs?count=8&start=${docStart}`)
  //     .then(res => res.json())
  //     .then(res => console.log(res))
  //     .then(res => {
  //       setDocs({ docs: [...docsObj.docs, ...res.docs], totalCount: res.totalCount });
  //       setIsLoading(false);
  //     })
  // }, [docStart]);

  const allDocs = docsObj?.docs;
  const fakeDocs = [1, 2,3,4,5,6,7,8].fill(
    {
      title: "Application of Global Optimization Toolbox for Identification of Parameters of Interval Nonlinear Models of Static Systems",
      publicationName: "2023 IEEE 17th International Conference on the Experience of Designing and Application of CAD Systems, CADSM 2023 - Proceedings",
      authors: ["Dyvak M.", "Dyvak M.", "Dyvak M.", "Dyvak M.", "Dyvak M."],
      publisher: "Institute of Electrical and Electronics Engineers Inc.",
      coverDate: "2023-01-01"
    }
  );
  return (
    <section className={"flex flex-col gap-[30px]"}>
      <div className={"w-full text-center font-black text-[32px] uppercase tracking-wider"}>
        Articles
      </div>
      <div className={"max-w-[960px] mdd:w-screen mdd:max-w-max mdd:px-10 flex flex-wrap justify-center mx-auto gap-[41px]"}>
        <div className={"flex flex-col gap-[30px]"}>
          {fakeDocs.slice(0, Math.ceil(fakeDocs.length / 2)).map((doc, index) =>
            <StaffAccordion
              key={index}
              title={doc.title}
              className={"w-[445px] mdd:w-full rounded-[15px] bg-[#ffffff0d] shadow-[0px_1px_4px_0px_#FFFFFF40_inset] px-[15px]"}
            >
              <StaffAccordionChild authors={doc.authors} coverDate={doc.coverDate}
                publicationName={doc.publicationName} publisher={doc.publisher}/>
            </StaffAccordion>
          )}
        </div>
        <div className={"flex flex-col gap-[30px]"}>
          {fakeDocs.slice(Math.ceil(fakeDocs.length / 2)).map((doc, index) =>
            <StaffAccordion
              key={index}
              title={doc.title}
              className={"w-[445px] mdd:w-full rounded-[15px] bg-[#ffffff0d] shadow-[0px_1px_4px_0px_#FFFFFF40_inset] px-[15px]"}
            >
              <StaffAccordionChild authors={doc.authors} coverDate={doc.coverDate}
                publicationName={doc.publicationName} publisher={doc.publisher}/>
            </StaffAccordion>
          )}
        </div>
      </div>
      {
        isLoading
          ?
          <Loader/>
          :
          docsObj.totalCount > docsObj.docs.length
          &&
          <div className={"flex justify-center w-full"}>
            <ShowMoreButton onClick={() => setDocStart(docStart + 8)}/>
          </div>
      }
    </section>
  );
};

export default StaffDocs;
