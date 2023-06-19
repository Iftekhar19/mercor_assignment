import React from 'react'

const Navlist = ({text,icon}) => {
  return (
    <div className='flex gap-[15px] items-center hover:bg-[#e4e1e1a8] cursor-pointer mx-[11px] px-[11px]'>
        {icon}
      <p className='font-[24px] text-[#787486]'>{text}</p>
    </div>
  )
}

export default Navlist
