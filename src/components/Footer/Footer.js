import React from "react";
import "./Footer.css";

const Footer = props => (
  <footer className="footer">
    <div className="container">
      <span className="text-muted">
        <img className='react-icon' alt='react-icon' title='made w/ react' src='../../../favicon.ico'/>
        <a
          href="https://github.com/jfcurat/hw15-react-clicky-game"
          target="_blank"
        >
          visit the repo
        </a>
      </span>
    </div>
  </footer>
);

export default Footer;