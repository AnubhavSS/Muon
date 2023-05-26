import React from 'react'
import { BsArrowRight} from "react-icons/bs";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { closeUpdate, updateData } from '@/store/listSlice';

const UpdateBar = () => {
  const { register, handleSubmit,reset } = useForm();
  const dispatch=useDispatch()
const val=useSelector(state=>state.list)


const onSubmit=(data)=>{
  dispatch(updateData({title:data.title,description:data.description}))
reset()
}
  return (
    <div >
     <div className={` ${val.update?' w-60':'w-0 overflow-hidden'} duration-300 h-[82vh] ${val.color?'bg-black':'bg-white'} border-l-2  border-l-gray-400`}>
     <h2 className={`text-center text-xl ${!val.color?'text-gray-700':'text-white'}`}>
  <span className=' inline-block items-center justify-center mr-5  cursor-pointer ' onClick={()=>dispatch(closeUpdate())} >
    <BsArrowRight />
  </span>
 {"  "} Edit Todo
</h2>
      <div className={`font-medium  ${!val.color?'text-gray-700':'text-white'} inline-flex text-xl bg-opacity-30 p-2 m-3 w-auto rounded-md  bg-slate-500 items-center`}>
     <input
     {...register('title')}
     defaultValue={val.id || ''}
   
          placeholder="Add Todo List"
          className="border-b border-gray-600 bg-transparent pt-4 pb-1.5 font-sans text-base w-auto font-normal"
        /></div>

<textarea id="message" rows="4" className={`block p-2.5 ml-4 w-auto text-base font-medium  ${!val.color?'text-gray-700':'text-white'} bg-slate-400 bg-opacity-40 rounded-lg border border-gray-300`} placeholder="Add todo description" {...register("description")}></textarea>
            <button className='bg-blue-500 py-1 ml-4 px-2 rounded-md mt-2 text-white w-2/3 text-base font-medium hover:bg-blue-800' type='submit' onClick={handleSubmit(onSubmit)} >Save</button>
     </div>


    </div>
  )
}

export default UpdateBar