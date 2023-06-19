import React from 'react'
import {VscFilter} from "react-icons/vsc"
import {TbCalendar} from "react-icons/tb"
import {AiOutlineUsergroupDelete} from "react-icons/ai"
import {CgLoadbar} from "react-icons/cg"
import {AiOutlineMacCommand} from "react-icons/ai"

const Filterbar = () => {
  return (
    <div className='flex items-center mt-[20px] justify-between'>
      {/* left */}
      <div className='flex items-center gap-[12px]'>
           <div className='flex justify-center items-center gap-[9px] border border-[#787486]  rounded-[6px] w-[122px] h-[40px]'>
             <VscFilter height={"13px"} width={"11px"}/>
             <select className='outline-none text-[16px]'>
                <option>Filter</option>
                <option>Filter</option>
                <option>Filter</option>
             </select>
           </div>
           <div className='flex justify-center items-center gap-[2px] border border-[#787486]  rounded-[6px] w-[122px] h-[40px]'>
             <TbCalendar height={"13px"} width={"11px"}/>
             <select className='outline-none text-[16px]'>
                <option>Today</option>
                <option>Today</option>
                <option>Filter</option>
             </select>
           </div>
           <div>

           </div>
      </div>
      {/* right */}
       <div className='flex items-center gap-[20px] mobile:hidden tablet:flex'>
           <div className='flex items-center gap-[7.5px] justify-center w-[97px] h-[40px] border-[1px] border-[#787486] rounded-[6px]'>
             <AiOutlineUsergroupDelete className='text-[#787486]'/>
             <span className='capitalize text-[16px] text-[#787486]'>share</span>
           </div>
           <div className='h-[28px] border-[1px] border-[#787486]'></div>
           <div className='h-[40px] w-[40px] bg-[#5030E5] rounded-[6px]  flex items-center justify-center flex-col gap-[2px]'>
             <CgLoadbar className="h-[6px] w-[15px] bg-[#fff] text-white"/>
             <CgLoadbar className="h-[6px] w-[15px] bg-[#fff] text-white"/>
             
           </div>
           <AiOutlineMacCommand className='text-[25px] '/>
       </div>
    </div>
  )
}

export default Filterbar
