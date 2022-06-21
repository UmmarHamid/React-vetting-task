import React from "react";
import BlogItem from "../BlogItem/BlogItem";
import "./BlogList.css";

const BlogList = ({ error, blogs, isPending }) => {
  return (
    <div className="blogs-container">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs &&
        blogs.map((blog) => {
          return <BlogItem key={blog.id} blog={blog} />;
        })}
    </div>
  );
};

export default BlogList;
