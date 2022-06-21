import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPending: true,
  data: [],
  error: false,
  currentBlog: {
    id: null,
    comments: [],
    error: false,
    isPending: true,
  },
};

export const blogsSlice = createSlice({
  name: "blogsSlice",
  initialState,
  reducers: {
    setBlogs: (state, action) => {
      state.data = action.payload;
    },
    setIsPending: (state, action) => {
      state.isPending = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setCurrentBlog: (state, action) => {
      state.currentBlog = action.payload;
    },
    setCommentsError: (state, action) => {
      state.currentBlog.error = action.payload;
    },
    setCommentsPending: (state, action) => {
      state.currentBlog.isPending = action.payload;
    },
  },
});

export const {
  setBlogs,
  setIsPending,
  setError,
  setCurrentBlog,
  setCommentsError,
  setCommentsPending,
} = blogsSlice.actions;

export default blogsSlice.reducer;
