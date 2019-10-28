import React from "react";

import NavBar from "./navbar";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="header">
        <NavBar />
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

      <div className="footer"></div>
    </div>
  );
};
export default Home;
