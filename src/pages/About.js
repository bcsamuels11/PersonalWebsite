import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import * as constants from "../Constants.js";

export default class About extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Container
        style={{
          paddingTop: "10vh",
          minHeight: `calc(100vh - ${constants.NAVBAR_HEIGHT}px)`,
          height: `100%`,
        }}
      >
        <Row
          style={
            document.documentElement.clientWidth >= constants.DESKTOP_VIEWPORT
              ? { display: "none" }
              : { margin: "auto" }
          }
        >
          <img alt="Alt" src={"/assets/propic.jpg"} style={{width: "70vw", height: "70vw", margin: "auto"}} className="profileImage"/>
        </Row>
        <Row>
          <Col style={{ marginTop: "5vh", marginBottom: "5vh"}}>
            <h1>About Me</h1>
            <p>
              Hi, my name is <b>Brent Samuels</b>. I graduated from The
              Massachusetts Institute of Technology (MIT) in 2020 with my
              Bachelor of Science Degree in Computer Science and Engineering
              (Course 6-3). During, my time at MIT I developed a passion for
              Human Computer Interactions (HCI) and particularly full-stack web
              development.
            </p>

            <p>
              I have a passion for computer science because it allows me to take
              daunting tasks, break them down into smaller components, and build
              them back up in code and logic to create them in reality. I feel
              that HCI encapsulates these challenges with the additional twist
              of the psychology behind making your system user-friendly and
              intuitive.
            </p>

            <p></p>

            <h1 style={{ marginTop: "5vh" }}>About This Site</h1>
            <p>
              I created this website from scratch through use of React.js and
              React Bootstrap as an independent project. I created this website
              for the dual purpose of the technical exercise and the personal
              documentation. More specifically, I treated the creation of this
              site as an independent exercise to relearn and deepen my knowledge
              of React. At the same time I created the site to document my work
              experiences, projects, and personal enjoyment.
            </p>
          </Col>
          <Col
            style={
              document.documentElement.clientWidth < constants.DESKTOP_VIEWPORT
                ? { display: "none" }
                : { marginTop: "5vh" }
            }
          >
            <img alt="Alt" src={"/assets/propic.jpg"} className="profileImage" />
          </Col>
        </Row>
        <div className="divider"></div>
      </Container>
    );
  }
}
