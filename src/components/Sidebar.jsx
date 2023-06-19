import React from "react";
import { AiOutlineMacCommand } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { LuSettings } from "react-icons/lu";
import { RiMoreFill } from "react-icons/ri";
import Navlist from "./extraComponents/Navlist";
import NavCard from "./extraComponents/NavCard";

const Sidebar = ({toggle,setToggle}) => {
  const data = [
    { text: "Home", icon: <AiOutlineMacCommand className="text-[#787486]" /> },
    { text: "Tasks", icon: <BiTask className="text-[#787486]" /> },
    { text: "Members", icon: <AiOutlineUsergroupDelete  className="text-[#787486]"/> },
    { text: "Settings", icon: <LuSettings  className="text-[#787486]"/> },
  ];
  const data2 = [
    { text: "Mobile App", color: "#7AC555" },
    { text: "Website Redesign", color: "#FFA500" },
    { text: "Design System", color: "#E4CCFD" },
    { text: "Wireframes", color: "#76A5EA" },
  ];
  return (
    
     toggle && <div className=" bg-white w-[240px] h-auto border-r-[3px] py-[33px] mobile:absolute mobile:top-[70px] mobile:z-10 tablet:static tablet:top-[70px] tablet:z-10 tablet:left-0 laptop:static laptop:bg-[white]">
      <div className="flex flex-col gap-[28px] ">
        {data.map((e, i) => {
          return <Navlist key={i} text={e.text} icon={e.icon} />;
        })}
      </div>
      <hr className="mt-8 mx-2 border-b-[2px]" />
      <div className="pl-[22px] leading-[15px] mt-[30px] text-[12px] uppercase text-[#787486] font-[700]">
        My projects
      </div>
      <div className="flex flex-col gap-[28px] mt-[32px]">
        {data2.map((e, i) => {
          console.log(e.color);
          return (
            <div
              key={i + "xyz"}
              className=" myOwnClass flex justify-between items-center mx-[11px] px-[11px] hover:bg-[#cbc4c470] "
            >
              <div className="flex gap-[18px] items-center ">
                <span
                  style={{ backgroundColor: e.color }}
                  className={`h-[8px] w-[8px] rounded-full`}
                ></span>
                <p className="text-[16px] font-[400] text-[#787486] hover:text-[16px] hover:font-[600] hover:text-black ">
                  {e.text}
                </p>
              </div>
              <RiMoreFill className="custumSvg hidden" />
            </div>
          );
        })}
      </div>
      <NavCard />
    </div>
    
   
      
  );
};

export default Sidebar;
