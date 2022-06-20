import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../reducers/blogsSlice";

export default configureStore({
  reducer: {
    blogs: blogsReducer,
  },
});
