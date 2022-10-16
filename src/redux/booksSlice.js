import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import booksApi from "../APIs/booksApi";

export const getBooksWithTitle = createAsyncThunk(
  "books/getBooksWithTitle",
  async (_, thunkAPI) => {
    const title = thunkAPI.getState().books.searchText;
    if (title === "") return [];
    const response = await booksApi(title);
    const booksData = [];
    response.items.forEach((book) => {
      booksData.push({
        id: book.id,
        title: book.volumeInfo.title || "N/A",
        image: book.volumeInfo.imageLinks?.smallThumbnail || "N/A",
        publisher: book.volumeInfo.publisher || "N/A",
        publishedDate: book.volumeInfo.publishedData || "N/A",
        description: book.volumeInfo.description || "N/A",
      });
    });
    return booksData;
  }
);

export const booksSlice = createSlice({
  name: "books",
  initialState: {
    searchText: "",
    isLoading: false,
    wishlist: [],
    booksData: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      if (!state.wishlist.includes(action.payload)) {
        const updatedWishlist = [...state.wishlist];
        updatedWishlist.unshift(action.payload);
        state.wishlist = updatedWishlist;
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (title) => title !== action.payload
      );
    },
    editSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
  extraReducers: {
    [getBooksWithTitle.pending]: (state) => {
      state.isLoading = true;
    },
    [getBooksWithTitle.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.booksData = action.payload;
    },
  },
});

export const { addToWishlist, removeFromWishlist, editSearchText } =
  booksSlice.actions;

export default booksSlice.reducer;
