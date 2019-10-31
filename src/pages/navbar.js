import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const handleMoreClick = e => {
    const drop = document.querySelector(".dropdown");
    drop.style = {
      visibility: "visible"
    };
  };
  const handleClose = () => {
    const close = document.querySelector(".dropdown");
    console.log(close);
    close.style = {
      visibility: "hidden"
    };
  };
  return (
    <div className="navPage">
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link onClick={handleMoreClick}>More</Link>
        <div className="dropdown" style={{ visibility: "hidden" }}>
          <Link to="/">Windows</Link>
          <Link to="/">Framing</Link>
          <Link to="/">Home Building</Link>
          <button onClick={handleClose}>Close</button>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
