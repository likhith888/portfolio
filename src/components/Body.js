import React from 'react'
import lookma from '../asset/images/lookma.gif'

const Body = ({disp}) => {
  return (
    <div className='min-h-screen bg-stone-900'>
        {disp&&<img src={lookma} className='w-1/4 m-auto pt-28'/>}

    </div>
  )
}

export default Body