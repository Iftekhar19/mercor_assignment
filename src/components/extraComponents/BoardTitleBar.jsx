import React from "react";
// import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";

const BoardTitleBar = ({ count, dotColor, text, borderColor, more, extra }) => {
  return (
    <div className="flex flex-col   gap-[11px]">
      {/* {more && (
        <div className="flex justify-end  mt-[11px]">
          <FiMoreHorizontal className="" />
        </div>
      )} */}
      <div
        className={`flex justify-between items-center mt-[15px] `}
      >
        <div className="flex  items-center content-center">
          <span
            className="h-[8px] w-[8px] rounded-full"
            style={{ backgroundColor: dotColor || "blue" }}
          ></span>
          <p className="text-[#0D062D] text-[16px] font-[500] leading-[19px] ml-[8px]  ">
            {text}
          </p>
          <span
            className={`h-[20px] w-[20px] rounded-full bg-[#E0E0E0] text-[12px] ml-[12px] text-[#625F6D] flex justify-center items-center  font-[500] `}
          >
            {count}
          </span>
        </div>
        {extra && <AiOutlinePlus className="h-[20px] w-[20px] bg-[#b3a8e2] rounded-md  text-[blue] text-[12px]" onClick={()=>alert("hello")} />}
      </div>
      <div style={{background:borderColor}} className={`h-[3px] mt-[15px]  w-full `}></div>
    </div>
  );
};

export default BoardTitleBar;
