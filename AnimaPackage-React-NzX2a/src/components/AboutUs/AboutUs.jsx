/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const AboutUs = ({ className, text = "About Us" }) => {
  return (
    <div className={`about-us ${className}`}>
      <div className="text-wrapper">{text}</div>
    </div>
  );
};

AboutUs.propTypes = {
  text: PropTypes.string,
};
