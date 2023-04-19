import React from "react";
import "../App.css";

function Card({ title, technologies, image, logo }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-line"></div>
      <div className="card-line"></div>
      <ul className="card-technologies">
        {technologies.map((technology) => (
          <img
            className="card-technology"
            key={technology}
            src={technology}
            alt="technology"
          />
        ))}
      </ul>
    </div>
  );
}

export default Card;
