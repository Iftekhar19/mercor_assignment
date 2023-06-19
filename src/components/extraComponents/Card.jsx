import React from "react";
import { LuMoreHorizontal } from "react-icons/lu";
import { TfiCommentAlt } from "react-icons/tfi";
import { LuFileSignature } from "react-icons/lu";

const Card = ({avatar,chipText,title,description,commentCount,filesCount,boardId,cardId,handleDragEnd,handleDragEnter}) => {
  return (
    <div className="flex flex-col p-[20px] bg-[#fff] rounded-[20px]" draggable={true}
    onDragEnd={()=>{handleDragEnd(cardId,boardId)}}
    onDragEnter={()=>{handleDragEnter(cardId,boardId)}}
    >
      <div className="flex justify-between items-center">
        <span style={{color:chipText.color,backgroundColor:chipText.bgColor}} className="text-[#D58D49] bg-[#DFA874] rounded-sm px-[2px] text-[12px] font-[500] leading-[15px]">
          {chipText.text}
        </span>
        <LuMoreHorizontal />
      </div>
      <h3 className="text-[18px] leading-[22px] text-[#0D062D] font-[600] mt-[8px]">
        {title}
      </h3>
      <div className="text-[12px] leading-[15px] font-[400] text-[#787486] mt-[6px]">
       {description}
      </div>
      <div className="flex items-center mt-[28px] gap-[43px] justify-between">
        {/* avatar groups container */}
        <div class="flex  -space-x-1 ">
            {avatar.map((e,i)=><img key={i}
            className="w-[24px] h-[24px]  rounded-full"
            src={e}
            alt=""
          />)}
          
         
        </div>
        {/* comment and likes container */}
        <div className="flex items-center gap-[20px]">
            <div className="flex items-center gap-[5.5px] ">
                <TfiCommentAlt className="h-[14px] w-[14px] pt-[1px] text-[#787486]"/>
                <span className="text-[12px] text-[#787486] leading-[15px] fornt-[500]">{commentCount} Comments</span>
            </div>
            <div className="flex items-center gap-[6px]">
               <LuFileSignature className="h-[14px] w-[14px] pt-[1px] text-[#787486]"/>
               <span className="text-[12px] text-[#787486] leading-[15px] fornt-[500]">{filesCount} Files</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
