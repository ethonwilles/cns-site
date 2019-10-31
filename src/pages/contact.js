import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import NavBar from "./navbar";

const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [desc, setDesc] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://cns-site-api.herokuapp.com/log-submission", {
        name: name,
        email: email,
        number: number,
        desc: desc
      })
      .then(res => console.log(res.data));
    //   .then(data => console.log(data));
  };
  return (
    <div className="contact-wrapper">
      <div className="header">
        <NavBar />
      </div>
      <div className="header-content">
        <h1>Service Action Form</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid-container">
          <div className="hi">
            <div className="text-wrapper">
              <p>Enter Name</p>
              <div className="spacer"></div>
              <input
                className="Name"
                type="text"
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="text-wrapper">
              <p>Enter Email</p>
              <div className="spacer"></div>
              <input
                className="Name"
                type="text"
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="text-wrapper">
              <p>Enter Phone Number</p>
              <div className="spacer"></div>
              <input
                className="Name"
                type="text"
                onChange={e => setNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="hi">
            <div className="text-wrapper-textarea">
              <p>Enter Description of Service Needed</p>
              <div className="spacer"></div>
              <textarea
                className="Name"
                type="text"
                style={{ height: "45vh", width: "39vw" }}
                onChange={e => setDesc(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>

      <div className="footer">
        <div className="links">
          <Link className="home-link">Home</Link>
          <Link>Contact </Link>
          <Link>Windows</Link>
          <Link>Framing</Link>
          <Link>Home Building</Link>
        </div>
        <div className="info">
          <p>Chad Willes</p>
          <p>8017068523 </p>
        </div>
      </div>
    </div>
  );
};
export default Contact;
