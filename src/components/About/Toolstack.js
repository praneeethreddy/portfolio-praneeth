import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGithubactions,
  SiSublimetext,
  SiIntellijidea,
  SiAmazonaws,
  SiGradle,
  SiJenkins,
  SiApachemaven
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>      
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithubactions />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSublimetext />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <SiGradle/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachemaven/>
      </Col>
    </Row>
  );
}

export default Toolstack;
