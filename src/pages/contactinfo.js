import React from "react";

function Contact() {
  return (
    <main className="row">
      <h1>Contact information</h1>
      <div className="column">
        {" "}
        <h3>Paula Beltran</h3>{" "}
        <ul>
          <li>p.cbeltran02@gmail.com</li>
          <li>M 541-801-8997</li>
        </ul>
      </div>
      <div className="column">
        {" "}
        <h2>Let's talk!</h2>
        <h4>Name</h4>
        <div>
          <input></input>
        </div>
        <h4>Email</h4>
        <div>
          <input></input>
        </div>
        <h4>Message</h4>
        <div>
          <input></input>
        </div>
        <br />
        <button className="button">Send Message</button>
      </div>
    </main>
  );
}

export default Contact;
