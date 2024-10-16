import { createSlice } from "@reduxjs/toolkit";

export const BookSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
  },
  reducers: {
    Add: (state, action) => {
      state.books.push(action.payload); 
    },
    deleteBook: (state, action) => {
     
      state.books = state.books.filter(book => book.title !== action.payload);
    },
    editBook: (state, action) => {
    
      const index = state.books.findIndex(book => book.title === action.payload.title);
      if (index !== -1) {
        state.books[index] = action.payload; 
      }
    }
  }
});


export const { Add, deleteBook, editBook } = BookSlice.actions;
export default BookSlice.reducer;
