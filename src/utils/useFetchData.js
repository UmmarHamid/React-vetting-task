import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setBlogs, setBlogsError } from "../reducers/blogsSlice";

const useFetchData = (url) => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.blogs.data);

  const isPending = useSelector((state) => state.blogs.isPending);

  const error = useSelector((state) => state.blogs.error);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        dispatch(setBlogs(data));
      })
      .catch((err) => {
        dispatch(setBlogsError(err.message));
      });
  }, [url]);

  return { data, isPending, error };
};

export default useFetchData;
