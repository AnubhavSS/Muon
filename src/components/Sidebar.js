import React,{useState} from 'react'
import { BsArrowLeft,BsGlobe } from "react-icons/bs";
import { AiFillAppstore } from "react-icons/ai";
import { RiTodoLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { changeColor } from '@/store/listSlice';

const Sidebar = () => {
  const dispatch=useDispatch();

    const [open, setopen] = useState(true)
const data=useSelector(state=>state.list)
console.log(data)
  return (
    
    <div className={` ${open?' w-52  md:w-72':'w-28' } duration-300 h-screen p-5 pt-8 border-r-2  border-r-gray-400 ${data.color?'bg-black':'bg-white'} relative`}>
        <div className={`absolute cursor-pointer  top-9 w-7 right-3  text-2xl ${data.color?' text-gray-300':' text-gray-700'} ${!open && 'rotate-180'}`}><BsArrowLeft onClick={()=>setopen(!open)} />
        </div>
        {/* Name & icon */}
        <div className='flex gap-x-4 items-center'>
        <div className={`text-white text-3xl bg-blue-700 w-10 text-center border-2 rounded-full cursor-pointer`}>N</div>
        <h1 className={`${data.color?' text-gray-300':' text-gray-700'} origin-left font-medium text-xl duration-300 ${!open && 'scale-0'}`}>Name</h1>
        </div>
        <ul className='pt-6'>
           <li className={` ${data.color?' text-gray-300':' text-gray-700'} text-base flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-400 mt-5 rounded-md `} ><AiFillAppstore/><span className={`${!open && 'hidden'} origin-left duration-200`}>Home</span></li>
           <li className={` ${data.color?' text-gray-300':' text-gray-700'} text-base flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-400 mt-5 rounded-md `}><RiTodoLine/><span className={`${!open && 'hidden'} origin-left duration-200`}>Section 1</span></li>
           <li className={` ${data.color?' text-gray-300':' text-gray-700'} text-base flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-400 mt-5 rounded-md `}><RiTodoLine/><span className={`${!open && 'hidden'} origin-left duration-200`}>Section 2</span></li>
           <li className={` ${data.color?' text-gray-300':' text-gray-700'} text-base flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-400 mt-5 rounded-md `}><RiTodoLine/><span className={`${!open && 'hidden'} origin-left duration-200`}>Section 8</span></li> 
        </ul>
        <div className={`flex mt-[26vh] sm:mt-[35vh] md:mt-[48vh] my-3 ${!open && 'scale-0'} `}>
        <div className=' bg-slate-400 rounded-lg p-2 text-center w-auto mx-1 text-lg text-white font-bold '><span className='text-xs bg-blue-800 rounded-full p-1 '>N</span> $0.90</div>
        <div className=' bg-sky-300 rounded-lg p-2 text-center w-auto text-lg mx-1 text-blue-800 font-bold '>Buy $XYZ</div>
    </div>
    <div className={`flex ${!open && 'scale-0'} `}>
        <div className=' text-slate-400  p-2 mx-1 text-xl  font-bold '> <BsGlobe/></div>
       <div> <label className="relative inline-flex items-center mt-2 cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer" onClick={()=>dispatch(changeColor(!data.color))}/>
  <div className="w-11 h-6 bg-white  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-sky-400  after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black border-2 border-gray-400"></div>
  </label>
  </div>  </div>
    
    </div>
   
  )
}

export default Sidebar