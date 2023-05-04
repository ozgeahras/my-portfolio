import React from "react";
import "../VerticalTimeline/VerticalTimeline.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

const VerticalTimeline = () => {
  return (
    <div className="timeline">
      <div className="container left">
        <div className="date">Jan 2020 - Present</div>
        <FontAwesomeIcon icon={faBriefcase} size="xs" className="icon" />
        <div className="content">
          <h2>Yapı Kredi Bank</h2>
          <h3>Frontend Developer</h3>
          <ul>
            <li>
              Developing and maintaining product with java and Angularjs using
              RESTful APIs.
            </li>
            <li>Using GIT and Bitbucket for versioning.</li>
            <li>Working in an agile environment.</li>
            <li>Self learning React.js</li>
          </ul>
        </div>
      </div>
      <div className="container right">
        <div className="date">Mar 2017 - Jan 2020</div>
        <FontAwesomeIcon icon={faBriefcase} size="xs" className="icon" />
        <div className="content">
          <h2>Yapı Kredi Bank</h2>
          <h3>Software Developer(ITSM Consultant)</h3>
          <ul>
            <li>
              Created backend processes using automation and workflow
              third-party tools with pure Javascript, HTML/CSS, powershell, SQL,
              SOAP/REST API
            </li>
            <li>Created frontend forms with third-party tools for customers</li>
            <li>
              Maintained third-party tools, created reports, analyzed customer's
              need and developed workflows
            </li>
          </ul>
        </div>
      </div>
      <div className="container left">
        <div className="date">Mar 2016 - Mar 2017</div>
        <FontAwesomeIcon icon={faBriefcase} size="xs" className="icon" />
        <div className="content">
          <h2>BT Bilgi Technology</h2>
          <h3>Software Developer(ITSM Consultant)</h3>
          <ul>
            <li>
              Created backend processes using automation and workflow
              third-party tools with pure Javascript, HTML/CSS, powershell, SQL,
              SOAP/REST API
            </li>
            <li>Created frontend forms with third-party tools for customers</li>
            <li>
              Maintained third-party tools, created reports, analyzed customer's
              need and developed workflows
            </li>
          </ul>
        </div>
      </div>
      <div className="container right">
        <div className="date">Aug 2012 - Mar 2016</div>
        <FontAwesomeIcon icon={faBriefcase} size="xs" className="icon" />
        <div className="content">
          <h2>Odya Technology</h2>
          <h3>Software Developer(ITSM Consultant)</h3>
          <ul>
            <li>
              Created backend processes using automation and workflow
              third-party tools with pure Javascript, HTML/CSS, powershell, SQL,
              SOAP/REST API
            </li>
            <li>Created frontend forms with third-party tools for customers</li>
            <li>
              Maintained third-party tools, created reports, analyzed customer's
              need and developed workflows
            </li>
          </ul>
        </div>
      </div>
      <div className="container left">
        <div className="date">Sep 2008 - Jun 2012 </div>
        <FontAwesomeIcon icon={faGraduationCap} size="xs" className="icon" />
        <div className="content">
          <h2>Mustafa Kemal University</h2>
          <h3>Computer Engineering</h3>
        </div>
      </div>
    </div>
  );
};

export default VerticalTimeline;
