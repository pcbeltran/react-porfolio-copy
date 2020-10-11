import React from "react";
import Profile from "../images/profile.png";
import "../pages/about-me.css";

function AboutMe() {
  return (
    <main className="row">
      <h1>Paula Beltran Design</h1>
      <img src={Profile} alt="profile" className="column" />
      <p className="column" className="p1">
        I am a Chicago-based Industrial Designer with a passion for creating and
        designing user-centered products and services by applying my knowledge
        in user research tools, usability tests, wireframing, layout and
        prototyping. I am a marketing and branding experienced designer skillful
        in Illustrator, Photoshop, corporate image design and social media
        advertising design.{" "}
      </p>
    </main>
  );
}

export default AboutMe;
