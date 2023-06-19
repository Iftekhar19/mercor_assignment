import React from 'react'

const MainPage = (props) => {
  return (
    <div className='flex w-full  '>
      {props.children}
    </div>
  )
}

export default MainPage
