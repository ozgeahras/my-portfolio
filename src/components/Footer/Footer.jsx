import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSquareTwitter,
  faLinkedinIn,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../Footer/Footer.css";

library.add(faGithubSquare, faSquareTwitter, faLinkedinIn, faEnvelope);

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__icons">
            <a
              href="https://github.com/ozgeahras"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
            <a href="mailto:ozgeahras@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              href="https://twitter.com/ozgeahras"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faSquareTwitter} />
            </a>
            <a
              href="https://www.linkedin.com/in/ozgeahras/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>
      <p>Copyright © {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
