import React from "react";
import axios from "axios";

import NavBar from "./navbar";
import FooterLinks from "./footerLinks";
// import { localApiKey } from "./secrets";

console.log(process.env.REACT_APP_API_KEY);

const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [desc, setDesc] = React.useState("");

  console.log("local: ", localApiKey);

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://cns-site-api.herokuapp.com/log-submission", {
        name: name,
        email: email,
        number: number,
        desc: desc,
        API_KEY: process.env.REACT_APP_API_KEY
      })
      .then(res => console.log(res.data));
    //   .then(data => console.log(data));

    document.querySelectorAll(".Name").forEach(elem => {
      elem.value = "";
    });
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
                onChange={e => setDesc(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>

      <div className="footer">
        <div className="links">
          <FooterLinks />
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
