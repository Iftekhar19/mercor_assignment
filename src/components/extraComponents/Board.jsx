import React from 'react'

const Board = ({children}) => {
  return (
    <div className='min-h-[200px] px-[10px] laptop:px-[20px] bg-[#F5F5F5] rounded-[16px] pb-[20px]'>
      {children}
    </div>
  )
}

export default Board
