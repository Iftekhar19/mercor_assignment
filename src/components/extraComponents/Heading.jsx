import React from 'react'
import { TfiPencil } from "react-icons/tfi";
import { MdOutlineAttachment } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

const Heading = () => {
  return (
    <div className="flex justify-between items-center mt-[25px]">
            {/* left */}
            <div className="flex gap-[21.5px] items-center">
              <h1 className="leading-[56px] text-[#0D062D] mobile:text-[26px] tablet:text-[36px] desktop:text-[46px] laptop:text-[46px] bold-[600] capitalize ">
                Mobile App
              </h1>
              <span className="flex items-center gap-[17px] mt-[10px]">
                <TfiPencil className="p-[5px] rounded-[7px] h-[25px] w-[25px] bg-[#5030E533] text-[#5030E5] text-[12px]" />
                <MdOutlineAttachment className="p-[5px] rounded-[7px] h-[25px] w-[25px] bg-[#5030E533] text-[#5030E5] text-[12px]" />
              </span>
            </div>
            {/* right */}
            <div className="flex items-center gap-[10px]">
              <AiOutlinePlus className="h-[25px] w-[25px] bg-[#5030E533] text-[#5030E5] p-[4px]" />
              <span className="text-[#5030E5] leading-[19px] text-[16px] font-[500] capitalize">
                Invite
              </span>
              {/* avatar groups */}

              <div className="flex -space-x-2 mobile:hidden tablet:flex">
                <img
                  className="w-[38px] h-[38px]  rounded-full dark:border-gray-800"
                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt=""
                />
                <img
                  className="w-[38px] h-[38px]  rounded-full dark:border-gray-800"
                  src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                  alt=""
                />
                <img
                  className="w-[38px] h-[38px]  rounded-full dark:border-gray-800"
                  src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                  alt=""
                />
                <img
                  className="w-[38px] h-[38px]  rounded-full dark:border-gray-800"
                  src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                  alt=""
                />
                <a
                  className="flex items-center justify-center w-[38px] h-[38px] text-xs font-medium text-[#D25B68] bg-[#f0c6cb]  rounded-full "
                  href="#"
                >
                  +2
                </a>
              </div>
            </div>
          </div>
  )
}

export default Heading
