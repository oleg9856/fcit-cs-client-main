import React from 'react'
import { Link } from "react-router-dom";
import ExpandIcon from "../../../UI/icons/ExpandIcon"


const StaffCardM = ({ name, img, position, id }) => {
	return (
		<div class="relative w-fit font-Montserrat font-semibold text-white">
			<div class="absolute right-0 top-0 flex h-[40px] w-[112px] items-center justify-center rounded-bl-[15px] rounded-tr-[15px] bg-[#FFB902] text-[14px]">
				{position.split(" ").splice(0, 1).join(" ").replace(/,$/, "")}
			</div>
			<img src={img} alt="Staff member " className="rounded-[15px] w-[322px] h-[397px]" />
			<div class="absolute bottom-0 flex h-[87px] w-full items-center justify-between rounded-b-[15px] border-[1px] border-white/10 bg-[#D9D9D9]/10 px-[10px] text-[24px]  backdrop-blur-sm">
				{name.split(" ").splice(0, 2).join(" ")}
				<Link
					to={`/our-staff/${id}`}
				>
					<div className='w-[35px] h-[35spx] rotate-[-90deg]'><ExpandIcon /></div>
				</Link>
			</div>
		</div>
	)
}

export default StaffCardM