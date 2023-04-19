import React from "react";
import "../components/VerticalTimeline.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const VerticalTimeline = () => {
  return (
    <div className="timeline">
      <div className="container left">
        <div className="date">15 Dec</div>
        <FontAwesomeIcon icon={faBriefcase} size="xs" className="icon" />
        <div className="content">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat
            sagittis non. Ut blandit semper pretium.
          </p>
        </div>
      </div>
      <div className="container right">
        <div className="date">22 Oct</div>
        <i className="icon fa fa-gift"></i>
        <div className="content">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat
            sagittis non. Ut blandit semper pretium.
          </p>
        </div>
      </div>
      <div className="container left">
        <div className="date">10 Jul</div>
        <i className="icon fa fa-user"></i>
        <div className="content">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat
            sagittis non. Ut blandit semper pretium.
          </p>
        </div>
      </div>
      <div className="container right">
        <div className="date">18 May</div>
        <i className="icon fa fa-running"></i>
        <div className="content">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat
            sagittis non. Ut blandit semper pretium.
          </p>
        </div>
      </div>
      <div className="container left">
        <div className="date">10 Feb</div>
        <i className="icon fa fa-cog"></i>
        <div className="content">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat
            sagittis non. Ut blandit semper pretium.
          </p>
        </div>
      </div>
      <div className="container right">
        <div className="date">01 Jan</div>
        <i className="icon fa fa-certificate"></i>
        <div className="content">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat
            sagittis non. Ut blandit semper pretium.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerticalTimeline;
