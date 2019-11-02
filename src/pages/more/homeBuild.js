import React from "react";

import NavBar from "../navbar";
import FooterLinks from "../footerLinks";

const HomeBuild = () => {
  return (
    <div className="home-wrapper">
      <div className="header">
        <NavBar />
      </div>
      <div className="header-content">
        <h1>Altitude Homes</h1>
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
export default HomeBuild;
