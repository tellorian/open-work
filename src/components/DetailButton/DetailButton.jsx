import React from "react";
import { Link } from "react-router-dom";
import "./DetailButton.css";

const DetailButton = ({ to = "/", title = "Details", imgSrc = "/view.svg" }) => (
    <Link to={to} className="details">
      <img
        src={imgSrc}
        alt="Back"
        
      />
      <span>{title}</span>
    </Link>
);

export default DetailButton;
