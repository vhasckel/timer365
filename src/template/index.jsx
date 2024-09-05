import React from "react";
import Header from "../components/header";
import PropTypes from "prop-types";
import "./template.css";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="container--template">{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
