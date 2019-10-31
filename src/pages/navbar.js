import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const handleMoreClick = e => {
    const drop = document.querySelector(".dropdown");
    drop.style = {
      visibility: "visible"
    };
  };

  return (
    <div className="navPage">
      <div className="navbar">
        <Link to="/">
          <i class="fas fa-undo"></i>Home
        </Link>
        <Link to="/contact">
          <i class="fas fa-address-book"></i>Contact
        </Link>
        <Link onClick={handleMoreClick}>
          <i class="fas fa-bars"></i>More
        </Link>
        <div className="dropdown" style={{ visibility: "hidden" }}>
          <Link to="/">
            <i class="fas fa-border-all"></i>Windows
          </Link>
          <Link to="/">
            <i class="fas fa-cubes"></i>Framing
          </Link>
          <Link to="/">
            <i class="fas fa-home"></i>Home Building
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
