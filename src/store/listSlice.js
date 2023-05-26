import { createSlice } from '@reduxjs/toolkit'

import produce from 'immer';

export const listSlice = createSlice({
  name: 'counter',
  initialState:{
    color:true,
    mainId:"",
    id:"",
    update:false,
    arr:[{main:" ",todo:[ ]}]
  },
  reducers: {
    addData(state, action) {
      return produce(state, draft => {
        draft.arr.forEach(val => {
          if (val.main === action.payload.uid) {
            val.todo.push({ title: action.payload.title, description: action.payload.description });
          }
        });
      });
    },
   openUpdate(state,action)
   { state.id=action.payload.cardId;
    state.mainId=action.payload.uid;
      state.update=true;
      
   },
   closeUpdate(state,action){
    state.update=false;
   },
   updateData(state, action) {
    const updatedArray = state.arr.map(val => {
      if (val.main === state.mainId) {
        const updatedTodo = val.todo.map(item => {
          if (item.title === state.id) {
            return {
              ...item,
              title: action.payload.title,
              description: action.payload.description
            };
          }
          return item;
        });
  
        return {
          ...val,
          todo: updatedTodo
        };
      }
      return val;
    });
  
    return { ...state, arr: updatedArray };
  },
  createMain(state,action)
  {console.log(action)
    if(action.payload.trim() !== ''){
    state.arr.push({main:action.payload,todo:[]})}
  },
  changeColor(state,action){
state.color=action.payload
  },
  deleteList(state,action){
    const updatedArray = state.arr.filter(item => item.main !== action.payload);
    return { ...state, arr: updatedArray };
  }

  },
})

// Action creators are generated for each case reducer function
export const { addData,updateData,closeUpdate,openUpdate,createMain,changeColor,deleteList } = listSlice.actions

export default listSlice