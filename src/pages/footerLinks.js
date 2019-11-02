import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = () => {
  return (
    <div>
      <Link className="home-link" to="/">
        Home
      </Link>
      <Link to="/contact">Contact </Link>
      <Link to="/windows">Windows</Link>
      <Link to="/framing">Framing</Link>
      <Link to="/homebuilding">Build</Link>
    </div>
  );
};
export default FooterLinks;
