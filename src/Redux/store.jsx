import { configureStore } from "@reduxjs/toolkit";
import BookReducer from "./Slice/BookSlice"; 


export const store = configureStore({
  reducer: {
    BookReducer: BookReducer 
  }
});

export default store;
