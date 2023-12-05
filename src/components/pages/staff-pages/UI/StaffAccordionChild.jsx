import React from "react";

const StaffAccordionChild = ({ publicationName, publisher, coverDate, authors }) => {
  return (
    <div className={"flex flex-col gap-5 pb-[9px]"}>
      <div className={"flex flex-col gap-[7px]"}>
        <h3 className={"font-semibold text-sm"}>
          Publication Name:
        </h3>
        <p>
          {publicationName}
        </p>
      </div>
      <div className={"flex flex-col gap-[7px]"}>
        <h3 className={"font-semibold text-sm"}>
          Publisher:
        </h3>
        <p>
          {publisher}
        </p>
      </div>
      <div className={"flex flex-col gap-[7px]"}>
        <h3 className={"font-semibold text-sm"}>
          CoverDate:
        </h3>
        <p>
          {coverDate}
        </p>
      </div>
      <div className={"flex flex-col gap-[7px]"}>
        <h3 className={"font-semibold text-sm"}>
          Authors:
        </h3>
        <p>
          {authors.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default StaffAccordionChild;
