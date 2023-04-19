import React, { useState } from "react";
import "../App.css";

function Card({ title, image, logo, source, demo }) {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  function goToSource(source) {
    window.open(source, "_blank");
  }

  function gotToDemo(demo) {
    window.open(demo, "_blank");
  }

  return (
    <div
      className={`card ${hovered ? "card-hover" : ""}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className="card-flex">
        <img className="card-flag" src={logo} alt="logo" />
        <h3 className="card-heading">{title}</h3>
      </div>
      <img className="card-image-cover" src={image} alt="project-photo" />
      <div className="card-buttons">
        <button onClick={() => goToSource(source)}>SOURCE</button>
        <button onClick={() => gotToDemo(demo)}>DEMO</button>
      </div>
    </div>
  );
}

export default Card;
