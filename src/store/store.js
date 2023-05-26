import { configureStore } from '@reduxjs/toolkit'
import listSlice from "../store/listSlice"
export const store = configureStore({
  reducer: {
    list:listSlice.reducer,
  },
})