import React from "react";
import axios from "axios";

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
      <form onSubmit={handleSubmit}>
        <div>
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
        <div className="text-wrapper-textarea">
          <p>Enter Description of Service Needed</p>
          <div className="spacer"></div>
          <textarea
            className="Name"
            type="text"
            style={{ height: "85%", width: "35vw" }}
            onChange={e => setDesc(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <div className="footer"></div>
    </div>
  );
};
export default Contact;