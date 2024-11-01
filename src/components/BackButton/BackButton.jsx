import React from "react";
import { Link } from "react-router-dom";
import "./BackButton.css";

const BackButton = ({ to = "/", title = "Back", imgSrc = "/back.svg" }) => (
  <div className="form-navigationDC">
    <Link to={to} className="backButtonDC">
      <img
        src={imgSrc}
        alt="Back"
        className="backIconDC"
        style={{ width: "45px", height: "45px" }}
      />
    </Link>
    <div className="formTitleDC">{title}</div>
  </div>
);

export default BackButton;
