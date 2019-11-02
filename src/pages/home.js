import React from "react";
import { Link } from "react-router-dom";

import NavBar from "./navbar";
import FooterLinks from "./footerLinks";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="header">
        <NavBar />
      </div>
      <div className="header-content">
        <h1>Information</h1>
      </div>
      <div className="content">
        <div className="grid-item-text">
          <h2>Windows</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum modi
            blanditiis, incidunt quibusdam repellendus natus iure ea aliquam
            cupiditate temporibus, et molestiae qui laboriosam quis recusandae,
            laudantium amet repudiandae atque.
          </p>
          <Link to="/windows">More Info</Link>
        </div>
        <img src="https://source.unsplash.com/random" alt="unsplash" />

        <img src="https://source.unsplash.com/random" alt="unsplash" />
        <div className="grid-item-text">
          <h2>Framing</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum modi
            blanditiis, incidunt quibusdam repellendus natus iure ea aliquam
            cupiditate temporibus, et molestiae qui laboriosam quis recusandae,
            laudantium amet repudiandae atque.
          </p>
          <Link to="/framing">More Info</Link>
        </div>
        <div className="grid-item-text">
          <h2>Altitude</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum modi
            blanditiis, incidunt quibusdam repellendus natus iure ea aliquam
            cupiditate temporibus, et molestiae qui laboriosam quis recusandae,
            laudantium amet repudiandae atque.
          </p>
          <Link to="/homebuilding">More Info</Link>
        </div>
        <img src="https://source.unsplash.com/random" alt="unsplash" />
      </div>

      <div className="footer">
        <div className="links">
          <FooterLinks />
        </div>
      </div>
    </div>
  );
};
export default Home;
