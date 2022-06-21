import React from "react";
import { Link } from "react-router-dom";
import "./BackLink.css";

const BackLink = ({ text }) => {
  return (
    <Link className="back-link" to={`/`}>
      <>&#8592; {text}</>
    </Link>
  );
};

export default BackLink;
