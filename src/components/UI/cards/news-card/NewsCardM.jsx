import React from "react"
import { Link } from "react-router-dom"

const NewsCardM = ({ img, title, descriptionText, id, text }) => {
  return (
    <div className="relative text-white w-[359px] h-[334px]">
      <img className="w-[359px] h-[213px] rounded-t-[10px] object-cover" src={img} alt="" />
      <Link
        to={`/${text}/${id}`}
        className="cursor-pointer">
        <div className="absolute w-full text-black font-Manrope not-italic bg-[#D9D9D9] rounded-b-[10px] px-5 h-[118px]">
          <h1 className="mt-[10px] text-2xl leading-[31px] truncate">{title}</h1>
          <p className="max-w-[319px] h-[70px] line-clamp-3">{descriptionText}</p>
        </div>
      </Link >
    </div >
  )
}

export default NewsCardM
