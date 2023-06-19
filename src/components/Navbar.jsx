import React from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { BsCalendar3Week } from "react-icons/bs";
import { BiMessageError } from "react-icons/bi";
import { VscBellDot } from "react-icons/vsc";
const Navbar = ({toggle ,setToggle}) => {
  return (
    <div className="w- flex h-[68px]  border-gray  border-b-[3px] ">
      {/* left */}
      <div className="  tablet:min-w-[240px] w-auto px-[22px]   flex items-center   border border-r-[3px] ">
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-3 items-center">
            <p className="w-[12px] h-[12px] rounded-full bg-[#5030E5]"></p>
            <p className="text-[20px] font-[600]">Project M.</p>
          </div>
          {
            toggle ?<MdKeyboardDoubleArrowLeft
            className="text-[gray] "
            width="7.16px"
            height="14.45px"
            onClick={()=>setToggle(!toggle)}
          />:<MdKeyboardDoubleArrowRight
          className="text-[gray] "
          width="7.16px"
          height="14.45px"
          onClick={()=>setToggle(!toggle)}
        />
          }
          
          
        </div>
      </div>
      {/* right */}
      <div className="flex-1 desktop:px-[35.5px] flex desktop:justify-between laptop:justify-between tablet:justify-between items-center mobile:justify-end">
        <div className="  hidden pl-[8px]   bg-[#F5F5F5] rounded-lg  tablet:flex  items-center max-w-[417px] h-[34px] gap-1 ">
          <BiSearch width="17px" height="17px" className="text-[#787486] pt-[2px] " />
          <input
            type="text"
            className="flex-1 outline-0 font-[14px] bg-[#F5F5F5]"
            placeholder="Search for anything..."
          />
        </div>

        <div className="flex items-center gap-[53px] ">
          {/* icons */}
          <div className=" hidden laptop:flex gap-[37px] items-center justify-center">
            <BsCalendar3Week width="15px" height="15px" />
            <BiMessageError width="18px" height="18px" />
            <VscBellDot width="18px" height="18px" />
          </div>
          <div className="flex gap-[18px] ">
            <div className="w-[113px] flex flex-col justify-center text-right">
              <span className="text-[16px] text-[#0D062D] leading-[19px]">
                Aman Agrawal
              </span>
              <span className="text-[14px] text-[#787486] font-[400] leading-[17px]">
                U.P, India
              </span>
            </div>
            <img
              src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg?size=626&ext=jpg"
              className="w-[40px] h-[40px] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
