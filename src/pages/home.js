import React from "react";
import { Link } from "react-router-dom";

import NavBar from "./navbar";

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
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum modi
            blanditiis, incidunt quibusdam repellendus natus iure ea aliquam
            cupiditate temporibus, et molestiae qui laboriosam quis recusandae,
            laudantium amet repudiandae atque.
          </p>
        </div>
        <img src="https://source.unsplash.com/random" alt="unsplash" />

        <img src="https://source.unsplash.com/random" alt="unsplash" />
        <div className="grid-item-text">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum modi
            blanditiis, incidunt quibusdam repellendus natus iure ea aliquam
            cupiditate temporibus, et molestiae qui laboriosam quis recusandae,
            laudantium amet repudiandae atque.
          </p>
        </div>
      </div>

      <div className="footer">
        <div className="links">
          <Link className="home-link" to="/">
            Home
          </Link>
          <Link to="/">Contact </Link>
          <Link to="/">Windows</Link>
          <Link to="/">Framing</Link>
          <Link to="/">Home Building</Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
