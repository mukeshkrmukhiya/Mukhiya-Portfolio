import React from "react";
import Card from "react-bootstrap/Card";
import { FaCircleArrowRight } from "react-icons/fa6";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Mukesh Kumar Mukhiya </span>
            from <span className="purple"> Sitamarhi, Bihar, India.</span>
            <br />
            Passionate Web Developer Seeking Exciting Job Opportunities.
            <br />
            I have Pursuing BTECH from  Bharati Vidyapeeth College of Engineering, Pune.
            <br />
            <br />
            I completed a two-month internship as a MERN stack developer and Developed
          </p>
          <ul>
            <li className="about-activity">
              <FaCircleArrowRight  /> Quiz website
            </li>
            
            <li className="about-activity">
              <FaCircleArrowRight  /> Examination website
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
