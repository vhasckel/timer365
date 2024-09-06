import React from "react";
import PropTypes from "prop-types";
import "./button.css";

export default function Button({ variant = "primary", ...rest }) {
  return <button className={`container--button ${variant}`} {...rest} />;
}

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
};
