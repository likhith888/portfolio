import React from 'react'
import Logo from '../asset/images/logo.svg'

const Navbar = ({setDisp,disp}) => {
    const team=()=>{
        setDisp(!disp)
    }
  return (
    <div className='flex justify-between px-6 items-center bg-red-800 text-white fixed top-0 w-full'>
        <div className='flex justify-center items-center'>
            <img src={Logo} className='w-16 -mt-2.5 -ml-4'/>
            <div className='font-bold text-lg font-mono'>Likhith</div>
        </div>
        <div className='flex flex-col md:flex-row font-bold text-sm justify-between items-center space-x-3'>
            <div className='uppercase hover:bg-gray-200 hover:text-red-800 cursor-pointer p-2 rounded-md'>home</div>
            <div className='uppercase hover:bg-gray-200 hover:text-red-800 cursor-pointer p-2 rounded-md'>about me</div>
            <div className='uppercase hover:bg-gray-200 hover:text-red-800 cursor-pointer p-2 rounded-md'>work</div>
            <div className='uppercase hover:bg-gray-200 hover:text-red-800 cursor-pointer p-2 rounded-md'>education</div>
            <div className='uppercase hover:bg-gray-200 hover:text-red-800 cursor-pointer p-2 rounded-md' onClick={team}>hire me</div>
        </div>
    </div>
  )
}

export default Navbar