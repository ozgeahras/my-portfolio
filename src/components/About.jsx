import React from "react";
import "../App.css";
import profilePicture from "../assets/me.png";
import VerticalTimeline from "../components/VerticalTimeline";

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Me</h1>
        <div className="about-section">
          <div className="about-section-p">
            <p>Lorem ipsum dolor sit amet, consectetur . </p>
            <p>Vestibulum in augue vitae ante efficitur mattis. </p>
            <p>Fusce sodales ultrices tortor, sit amet hendrerit. </p>
            <p>Quisque eu odio ut enim bibendum mollis in</p>
          </div>
          <div className="about-image">
            <img src={profilePicture} alt="Profile" />
          </div>
        </div>
      </div>

      <VerticalTimeline />
    </div>
  );
}

export default About;
