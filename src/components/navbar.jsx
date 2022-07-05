import React, { Component } from "react";

// Stateless functional components - sfc
const NavBar = ({ totalCounters }) => {
  console.log("NavBar - rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        Counter App {"      "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </span>
    </nav>
  );
};

export default NavBar;
