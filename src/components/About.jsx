import React from "react";
import "../App.css";
import profilePicture from "../../public/assets/me.png";
import VerticalTimeline from "../components/VerticalTimeline";

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Me</h1>
        <div className="about-section">
          <div className="about-section-p">
            <p>
              My name is Özge and I'm currently living in Istanbul. I work as a
              frontend developer and I'm passionate about building engaging user
              interfaces. Currently, I'm focusing on building ReactJS and
              improving my skills with this popular JavaScript library. At work,
              I also use AngularJS and Java to develop web applications. I love
              learning and staying up-to-date with the latest technologies and
              trends in the frontend development world, and I strive to improve
              myself every day.
            </p>
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
