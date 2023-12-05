import React, { useMemo } from "react";
import Orcid from "../../../../assets/ImgStaffLinks/orcid.svg"
import CLVT from "../../../../assets/ImgStaffLinks/CLVT.svg"
import Dspace from "../../../../assets/ImgStaffLinks/dspace.svg"
import Google from "../../../../assets/ImgStaffLinks/Google.svg"
import Wunu from "../../../../assets/ImgStaffLinks/wunu.svg"
import Scopus from "../../../../assets/ImgStaffLinks/Scopus.svg"


const StaffLinkCard = ({ links }) => {

  if (!links || links.length === 0) {
    return <div className="flex justify-center items-center border-2">test</div>;
  }
  const checLinksArray = useMemo(() => [
    { key: "orcid", value: Orcid },
    { key: "webofscience", value: CLVT },
    { key: "scopus", value: Scopus },
    { key: "google", value: Google },
    { key: "library.wunu", value: Wunu },
    { key: "dspace.wunu", value: Dspace },
  ], []);

  let newLinks = links.map(item => {
    const foundLink = checLinksArray.find(link => item.includes(link.key));
    return foundLink ? { key: foundLink.value, value: item } : false;
  });

  return (
    <div className="flex px-4 py-[35px] w-[960px] mdd:w-full smm:overflow-auto rounded-[15px] bg-[#ffffff0d] flex-wrap smm:flex-nowrap shadow-[0px_1px_4px_0px_#FFFFFF40_inset] justify-center smm:justify-start items-center gap-[30px]">
      {newLinks.map((item, id) => (
        item &&
        <a className="min-w-[70px] h-[70px]" target={"_blank"} key={id} href={item.value} rel="noreferrer">
          <img src={item.key} alt="" className={"w-full h-full"}/>
        </a>
      ))}
    </div>
  );
};

export default StaffLinkCard;
