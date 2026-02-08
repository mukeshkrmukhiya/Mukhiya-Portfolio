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
            I am a Software Engineer at TCS, working with Spring Boot and trained in Java Full Stack development (Java, Spring Boot, Angular).
            <br />
            I hold a B.Tech in Electronics and Telecommunication Engineering from Bharati Vidyapeeth College of Engineering, Pune. I have prior experience as a MERN Stack Developer intern, where I built a Quiz Website and an Online Examination Platform.
            <br />
            <br />
            I am continuously learning and focused on building scalable, real-world applications.
          </p>
          <ul>
            <li className="about-activity">
              <FaCircleArrowRight  /> Online Chess Website
            </li>
            
            <li className="about-activity">
              <FaCircleArrowRight  /> Quiz Website
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
