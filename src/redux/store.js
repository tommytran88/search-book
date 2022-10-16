import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import booksReducer from "./booksSlice";

export default configureStore({
  reducer: {
    books: booksReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return [...getDefaultMiddleware(), thunk];
  },
});
