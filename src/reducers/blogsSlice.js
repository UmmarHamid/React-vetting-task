import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPending: true,
  data: [],
  error: false,
};

export const blogsSlice = createSlice({
  name: "blogsSlice",
  initialState,
  reducers: {
    setBlogs: (state, action) => {
      state.isPending = false;
      state.data = action.payload;
      state.error = null;
    },
    setBlogsError: (state, action) => {
      state.isPending = false;
      state.error = action.payload;
    },
  },
});

export const { setBlogs, setBlogsError } = blogsSlice.actions;

export default blogsSlice.reducer;
