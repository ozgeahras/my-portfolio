import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faCode);

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <FontAwesomeIcon icon={faCode} size="lg" />
      </div>
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to="/" className="navbar__link">
            Home
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/react" className="navbar__link">
            React Projects
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/javascript" className="navbar__link">
            JavaScript Projects
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/about" className="navbar__link">
            About Me
          </Link>
        </li>
        <li className="navbar__item">
          <a
            href="/assets/OzgeAhrasCV.pdf"
            download
            className="navbar__link resume"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
