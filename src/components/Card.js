import { openUpdate } from '@/store/listSlice';
import React from 'react'
import { BsPencilFill} from "react-icons/bs";

import { TbMoneybag} from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
const Card = ({array,mainId}) => {
 const data= useSelector(state=>state.list)
const dispatch=useDispatch();

    
  return (
    <div >{ array.map(item=>
         <div className='text-gray-400 text-xl bg-opacity-30 p-2 m-3 w-auto md:w-80 rounded-md  bg-slate-500 items-center' key={item.title}>
            
         <div className={`font-bold text-xl ml-4 mb-2 ${!data.color?'text-gray-700':'text-white'} flex items-center`}>
  <span className='mr-2 bg-violet-300    bg-opacity-40 rounded-full w-9 h-8  inline-flex items-center justify-center'><TbMoneybag/></span>
  <span className='flex-1'>{item.title}</span>
  <span className=" font-extrabold text-xl cursor-pointer  bg-slate-500 bg-opacity-40 rounded-full w-9 h-8 p-1 inline-flex items-center justify-center"
      onClick={()=>dispatch(openUpdate({uid:mainId,cardId:item.title}))}   >
    <BsPencilFill/>
  </span>
</div>
    <p className={`${!data.color?'text-gray-700':'text-white'}`}>{item.description}</p>
  </div>)}
    </div>
  )
}

export default Card