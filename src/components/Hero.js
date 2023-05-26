import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import Card from './Card'
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { addData, createMain, deleteList } from '@/store/listSlice';
const Hero = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit, reset } = useForm();
  const [maintodo, setmaintodo] = useState(false)
  const [subtodo, setsubtodo] = useState(false)
  const data = useSelector(state => state.list)

  const onSubmit = (data, uid) => {
    if(data.title!=="" && data.description!==""){
    dispatch(addData({ title: data.title, description: data.description, uid: uid }));}
    setsubtodo(false)
    reset()


  }
  const submitMain = (data) => {
    dispatch(createMain(data.main))
    setmaintodo(false)
    reset()
  }
  const [selectedMainTodo, setSelectedMainTodo] = useState(null);

  const handleMainTodoClick = (mainId) => {
    if (selectedMainTodo === mainId) {
      setSelectedMainTodo(null); // Close the "Add Todo" section if it's already open
    } else {
      setSelectedMainTodo(mainId); // Open the "Add Todo" section corresponding to the clicked main todo
    }
  };
  return (
    <div className='flex flex-wrap h-auto '>   {data.arr.map(val => <div key={val.main} >
      {/* Main Todo */}

      <div className={`${!data.color ? 'text-slate-800' : 'text-white'} inline-flex text-xl bg-opacity-30 p-2 m-3 w-56 rounded-md  bg-slate-500 items-center`}>
        {maintodo && selectedMainTodo === val.main ?
          <div className=' flex-col'>
            <input
              {...register("main")}
              placeholder="Add Todo List"
              className={`border-b border-gray-600 bg-transparent pt-4 pb-1.5 font-sans text-base w-2/3 md:w-auto font-normal`}
            />
            <button className={`bg-slate-500 p-2 mt-1 rounded-md  $ text-base font-medium hover:bg-slate-800`} type='submit' onClick={handleSubmit(submitMain)}>Done</button>
          </div> :
          <div className={`bg-transparent py-2 font-sans ${!data.color ? 'text-slate-800' : 'text-white'} text-lg font-bold w-56 `} >{val.main !== " " ? val.main : "Add Todo List"}</div>

        }
        {val.main === " " ? <span className={` font-extrabold text-3xl cursor-pointer ${!data.color ? 'text-slate-800' : 'text-white'}  bg-slate-500 bg-opacity-40 rounded-full w-9 h-8  p-1 inline-flex items-center justify-center`} onClick={() => { setmaintodo(true); handleMainTodoClick(val.main) }}>
          +</span> :
          <span className={`font-bold text-xl cursor-pointer ${!data.color ? 'text-slate-800' : 'text-white'} bg-slate-500 bg-opacity-40 rounded-full w-9 h-8  p-1 inline-flex items-center justify-center`} onClick={() => dispatch(deleteList(val.main))}>
            <AiFillDelete /></span>
        } </div>

      {/* Card Todo        */}

      <div className={`max-w-sm rounded overflow-hidden  w-52 md:w-auto m-3 bg-opacity-30 bg-slate-500 ${val.main !== " " ? 'block' : 'hidden'}`}>
        {subtodo && selectedMainTodo === val.main ?
          <div className="px-6 py-4">
            <input
              {...register("title")}
              placeholder="Add Todo List"
              className={`border-2 border-gray-300 font-medium  ${!data.color ? 'text-gray-700' : 'text-white'} bg-transparent pt-4 pb-1.5 font-sans text-xl w-auto mb-1 font-normal`}
            /> :
            <textarea id="message" rows="4" className="block p-2.5 w-full text-base  text-white bg-slate-400 bg-opacity-40 rounded-lg border border-gray-300" placeholder="Add todo description" {...register("description")}></textarea>
            <button className='bg-slate-500 py-1 px-2 rounded-md mt-2 text-white text-base font-medium hover:bg-slate-800' type='submit' onClick={handleSubmit((data) => onSubmit(data, val.main))}>Done</button>
          </div>
          :
          <div className={`px-6 py-4 ${!data.color ? 'text-gray-700' : 'text-white'}`}>
            <div className={`font-bold text-xl mb-2 `}>Add Todo
              <span className='ml-32 font-extrabold text-3xl cursor-pointer text-white  bg-slate-500 bg-opacity-40 rounded-full w-9 h-9   inline-flex items-center justify-center' onClick={() => { setsubtodo(true); handleMainTodoClick(val.main) }}> +</span>
            </div>
            <p className='text-base font-medium  text-gray-500'>Add description.....</p>
          </div>
        }
      </div>
      <Card mainId={val.main} array={val.todo} />

    </div>)
    }</div>

  )
}

export default Hero