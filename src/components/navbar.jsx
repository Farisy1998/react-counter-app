import React, { Component } from "react";

// Stateless Functional Component
const Navbar = ({ totalCounters }) => {
  return (
    <div className="navbar navbar-light bg-light navbar-expand">
      Counter App{" "}
      <span className="badge badge-pill badge-secondary m-2">
        {totalCounters}
      </span>
    </div>
  );
};

export default Navbar;
