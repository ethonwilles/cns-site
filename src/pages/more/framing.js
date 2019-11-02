import React from "react";

import NavBar from "../navbar";
import FooterLinks from "../footerLinks";

const Framing = () => {
  return (
    <div className="home-wrapper">
      <div className="header">
        <NavBar />
      </div>
      <div className="header-content">
        <h1>Framing</h1>
      </div>
      <div className="content"></div>

      <div className="footer">
        <div className="links">
          <FooterLinks />
        </div>
      </div>
    </div>
  );
};
export default Framing;
