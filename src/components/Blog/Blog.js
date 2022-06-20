import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

const Blog = ({ blog }) => {
  return (
    <>
      <div>{`Blog page ${blog}`}</div>
      <Link className="back-link" to={`/`}>
        Back
      </Link>
    </>
  );
};

export default Blog;
