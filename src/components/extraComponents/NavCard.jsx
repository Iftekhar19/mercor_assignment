import React from 'react'

const NavCard = () => {
  return (
    <div className='w-[206px]  relative bg-[#e1ddddc7] rounded-[16px]  flex flex-col items-center mx-auto mt-[88px]'>
      <div className='w-[66px] h-[66px] rounded-full bg-[#C4C4C4] mt-[-33px] flex items-center justify-center'>
        <span className='w-[10px] h-[17px] bg-[#FBCB18] rounded-md'></span>
      </div>
      <div className='text-[14px] font-[500] leading-[17px] mt-[4px] text-[#000000]'>Thoughts Time</div>
      <span className='w-[166px] mx-auto mt-[12px] text-center leading-[15px] bold-[400] text-[12px] text-[#787486]'>We don’t have any notice for you, till then you can share your thoughts with your peers.</span>
      <button className='w-[166px] h-[40px] my-[14px] bg-[#FFFFFF] rounded-[4px]'>Write a message</button>
    </div>
  )
}

export default NavCard
