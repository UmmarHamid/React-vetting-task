import React from "react";
import { Link } from "react-router-dom";
import "./BlogItem.css";
const BlogItem = ({ blog }) => {
  return (
    <Link className="blog-item" to={`/blog/${blog.id}`}>
      <li className="blog-item__text">{blog.title}</li>
    </Link>
  );
};

export default BlogItem;
