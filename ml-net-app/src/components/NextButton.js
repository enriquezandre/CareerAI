import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./GetStartedBtn.css";

export const NextButton = (props) => {
  const {link} = props
  const location = useLocation();
  return (
    <div>
      <Link
        to={link}
        className={`gradient-button ${
          location.pathname === {link} ? "active" : ""
        }`}
      >
        Next
      </Link>
    </div>
  );
};
