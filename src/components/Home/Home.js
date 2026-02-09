import { Col, Container, Row } from "react-bootstrap";
import homeLogo from "../../Assets/homemain.png";
import Home2 from "./Home2";
import Type from "./Type";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Container className="home-content  ">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> MUKESH KUMAR MUKHIYA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
          {/* <Row style={{ justifyContent: "left", position: "relative",  marginTop: "-5rem", marginLeft: "2rem"  }}>
          <Button
          className="custom-btn"
            variant="success"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
            onClick={()=>alert("CV Downloded")}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row> */}
        </Container>
      </Container>
      <Home2 />
    
    </section>
  );
}

export default Home;
