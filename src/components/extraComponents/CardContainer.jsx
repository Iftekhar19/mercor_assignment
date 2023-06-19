import React, { Children } from 'react'

const CardContainer = ({children}) => {
  return (
    <div className='flex flex-col mt-[28px] gap-[20px]'>
      {children}
    </div>
  )
}

export default CardContainer
