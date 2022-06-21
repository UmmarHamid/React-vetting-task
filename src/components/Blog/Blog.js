import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import BackLink from "../BackLink/BackLink";
import "./Blog.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentBlog,
  setCommentsError,
  setCommentsPending,
} from "../../reducers/blogsSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const API_URL = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
  const storeData = useSelector((state) => state.blogs);
  const currentBlog = storeData.data.filter((item) => item.id == id)[0];
  useEffect(() => {
    if (!currentBlog) return navigate("/");
    dispatch(setCommentsPending(true));
    axios
      .get(API_URL)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        dispatch(
          setCurrentBlog({
            id: id,
            comments: data,
            error: false,
            isPending: false,
          })
        );
      })
      .catch((err) => {
        dispatch(setCommentsError(err.message));
      });
  }, [dispatch, API_URL, id, currentBlog, navigate]);
  const currentBlogComments = storeData.currentBlog.comments;
  return (
    <>
      <div className="blog-container">
        <BackLink text={"Back to  blogs"} />
        {currentBlog && (
          <div className="blog">
            <div className="blog__title">{currentBlog.title}</div>
            <div className="blog__body">{currentBlog.body}</div>
          </div>
        )}
        {storeData.currentBlog.isPending ? (
          <div>Loading...</div>
        ) : currentBlogComments.length > 0 ? (
          <aside className="blog__comments">
            {currentBlogComments.map((comment) => {
              return (
                <div key={comment.id} className="comment">
                  <h3 className="comment__author">{`Comment from ${comment.email}`}</h3>
                  <p className="comment__text">{comment.body}</p>
                </div>
              );
            })}
          </aside>
        ) : (
          `Comments failed to load : ${storeData.currentBlog.error}`
        )}
      </div>
    </>
  );
};

export default Blog;
