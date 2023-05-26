import React from 'react'
import { CiWallet} from "react-icons/ci";
import { useSelector } from 'react-redux';
const Header = () => {
  const data=useSelector(state=>state.list)
  return (
    <header className=" body-font border-b-2 border-gray-400 ">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <nav className={`flex lg:w-2/5 flex-wrap items-center  ${!data.color?'text-slate-800':'text-white'}  text-2xl  md:ml-auto`}>
      <h2 className={`underline decoration-sky-500 underline-offset-8 cursor-pointer  `}>Section</h2>
      </nav>
    
      <div className="lg:w-auto bg-opacity-30 inline-flex items-center px-2 py-1 text-lg rounded-lg gap-x-5 bg-slate-500 lg:justify-end ml-5 lg:ml-0">
        {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
        </button> */}
        <CiWallet className=' text-indigo-600'/>
        <p className='text-white'>0.2 $XYZ</p>
        <div className=' bg-sky-400 rounded-lg px-1 text-sm text-blue-800 font-bold'>Tier 1</div>
      </div>
    </div>
  </header>
  )
}

export default Header