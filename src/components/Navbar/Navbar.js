import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar navbar-dark bg-dark">
    <a className="navbar-brand" href="/">
      Clicky Cat Quest
    </a>
    <nav className="navbar-brand">
      Click on a picture card to start the game!
    </nav>
    <nav className="navbar-brand">Score: {props.score} | Top Score: 0</nav>
  </nav>
);

export default Navbar;