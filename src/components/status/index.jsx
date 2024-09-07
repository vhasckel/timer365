import React from "react";
import PropTypes from "prop-types";

export function Status({ variant = "green", children }) {
  return <span className={`container--status ${variant}`}>{children}</span>;
}

Status.propTypes = {
  variant: PropTypes.oneOf(["green", "pink", "orange"]),
  children: PropTypes.string.isRequired,
};
