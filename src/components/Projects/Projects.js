import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import jscalc from "../../Assets/Projects/jscalc.png";
import mwfunda from "../../Assets/Projects/mwfunda.png";
import simpleweb from "../../Assets/Projects/simpleweb.png";
import quiz from "../../Assets/Projects/quiz.png";
import weather from "../../Assets/Projects/weather.png";
import facerecog from "../../Assets/Projects/facerecog.png";
import alexaimg from "../../Assets/Projects/alexaimg.jpg";
import motherKitchen from "../../Assets/Projects/motherKitchen.png";
import PlayStation from "../../Assets/Projects/PlayStation.png";
import chessplay from "../../Assets/Projects/chessplay.png";
import mybuilding from "../../Assets/Projects/mybuilding.png";
import onlinedocs from "../../Assets/Projects/onlinedocs.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          This is what i have  <strong className="purple">worked on. </strong>
        </h1>
        <p style={{ color: "white" }}>
          basic and significant projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quiz & Examinaton Web"
              description="Exams and quizzes are used in the Practice and Enhance initiative to provide a platform for improving programming skills. It offers a complete toolkit for interactive programming learning and skill evaluation, having been developed with the MERN stack. Also i it have admin pannel for question and user management."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={facerecog}
              isBlog={false}
              title="face-recog-attend-sys."
              description="The Face Recognition Attendance System automates attendance recording using facial recognition technology. It replaces manual methods like card swiping with computer vision and machine learning techniques. It accurately identifies individuals in schools, colleges, offices, and other organizations, streamlining the attendance process."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chessplay}
              isBlog={false}
              title="Chess Game"
              description="The Chess Game is a web-based application that allows users to play chess against an friends or online opponent. It features a responsive user interface, move validation, and a clean design. The game supports standard chess rules and provides an engaging experience for both beginners and experienced players."
              ghLink="https://github.com/mukeshkrmukhiya/Chess-Client"
              demoLink="https://mukhiyachessapp.netlify.app/"
              
            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jscalc}
              isBlog={false}
              title="JavaScript Calc"
              description="The JavaScript Calculator is a simple web application that performs basic mathematical operations. Users can add, subtract, multiply, and divide numbers using an intuitive user interface. This calculator provides a convenient tool for performing arithmetic calculations in a web browser."
              ghLink="https://github.com/mukeshkrmukhiya/javaScriptCalc"
              demoLink="https://mukeshkrmukhiya.github.io/javaScriptCalc/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Get Weather"
              description="The Simple Weather web application allows users to retrieve basic weather details for different cities using the OpenWeather API. Users can search for a city and view its current weather conditions, including temperature, humidity, wind speed, and weather description. This application provides a convenient tool for quickly checking the weather in various locations."
              ghLink="https://github.com/mukeshkrmukhiya/LiveWeather"
              demoLink="https://mukeshkrmukhiya.github.io/LiveWeather/"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simpleweb}
              isBlog={false}
              title="Simple SignIn/Up web"
              description="The MERN (MongoDB, Express.js, React.js, Node.js) project is a web application that implements a user authentication system. Users can register new accounts, log in securely using JWT (JSON Web Tokens), and access protected resources. This project provides a robust foundation for building secure and scalable web applications."
              ghLink="https://github.com/mukeshkrmukhiya/frontendMERN"
              demoLink="https://mymernweb.netlify.app/"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alexaimg}
              isBlog={false}
              title="Simple alexa clone"
              description="The Simple Alexa project is an innovative voice-controlled assistant built with Python. It not only handles basic tasks like playing YouTube videos, sending WhatsApp messages, and performing Google searches but also offers additional functionalities through voice commands. This project demonstrates the versatility of Python in creating personalized voice-activated systems for various tasks."
              ghLink="https://github.com/mukeshkrmukhiya/alexa-"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mwfunda}
              isBlog={false}
              title="MWfunda web"
              description="The Yaguuda Antenna Parameter Calculator is a specialized tool for designing Yagi-Uda antennas. Users input parameters such as the frequency, reflector length, dipole length, director lengths, and spacing between directors. The calculator then computes the optimal antenna dimensions in megahertz (MHz) for efficient antenna performance. This project streamlines the antenna design process, facilitating the creation of high-performance Yagi-Uda antennas for various applications."
              ghLink="https://github.com/mukeshkrmukhiya/MWFunda"
              demoLink="https://mukeshkrmukhiya.github.io/MWFunda/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PlayStation}
              isBlog={false}
              title="PlayStation web"
              description="The Basic PlayStation website design is a simple web page created using HTML and CSS. It showcases information about PlayStation products, features, and services in a visually appealing layout. With minimalistic design elements and intuitive navigation, the website provides users with an overview of PlayStation offerings in an engaging manner."
              ghLink="https://github.com/mukeshkrmukhiya/PlayStation"
            demoLink="https://mukeshkrmukhiya.github.io/PlayStation/"  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={motherKitchen}
              isBlog={false}
              title="Mother-Kitchen web"
              description="The Mother Kitchen website design is a simple yet elegant representation of a restaurant's online presence, crafted with HTML and CSS. It features a visually appealing layout that highlights the restaurant's ambiance, menu offerings, and contact details. With intuitive navigation and tasteful design elements, the website invites visitors to explore the culinary delights offered by Mother Kitchen in a welcoming virtual environment."
              ghLink="https://github.com/mukeshkrmukhiya/Mother_Kitchen.com"
            demoLink="https://mukeshkrmukhiya.github.io/Mother_Kitchen.com/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mybuilding}
              isBlog={false}
              title="My Building web"
              description="This HTML and CSS project is a responsive building services website featuring a clean navigation bar, hero section, call-to-action button, and service cards. It focuses on layout design, styling, and user-friendly structure, demonstrating fundamental front-end development skills using pure HTML and CSS."  ghLink="https://github.com/mukeshkrmukhiya/MyBuilding/"
            demoLink="https://mukeshkrmukhiya.github.io/MyBuilding/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onlinedocs}
              isBlog={false}
              title="Online Docs web"
              description="OnlineDocs is a web-based productivity platform developed using Next.js, focused on delivering fast, scalable, and modern web experiences. The project currently features a fully functional Online To-Do application for efficient task management. Other services, including Online Word and Online Spreadsheet, are under active development, demonstrating a structured and extensible approach to building a complete online productivity suite." ghLink="https://github.com/mukeshkrmukhiya/onlinedocs"
            demoLink="https://onlinedocs.vercel.app/" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
