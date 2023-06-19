import React from 'react'

const MainBar = (props) => {
  return (
    <div className='flex-1 w-full h-auto flex flex-col gap-[40px] px-[48.5px] laptop:px-[30px] mobile:px-[8px] '>
      {props.children}
    </div>
  )
}

export default MainBar
