import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import style from "../../Assets/Projects/styleSpectrum.webp";
import groccery from "../../Assets/Projects/groccery.png";
import house from "../../Assets/Projects/house.jpeg";
import techbazaar from "../../Assets/Projects/tech.png";
import fashion from "../../Assets/Projects/fashion.avif";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={techbazaar}
              isBlog={false}
              title="TechBazaar Ecommerce"
              description="Using Material-UI and React.js, TechBazaar E-commerce is an online marketplace for gadgets and accessories. It provides real-time inventory management, secure login, customized product suggestions, and user registration. Customers are able to peruse merchandise, pick out colors and sizes, put things in their carts, safely finish their purchases, and rate and review items."
              ghLink="https://github.com/praneeethreddy/TechBazaar-E-commerece"
              demoLink="https://youtu.be/onhQ2Lm1nE0"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={style}
              isBlog={false}
              title="Style Spectrum"
              description="Style Spectrum E-commerce is an advanced platform for shopping clothes, shoes, and accessories, offering features like inventory management, delivery tracking, customer management, and personalized product selection."
              ghLink="https://github.com/praneeethreddy/StyleSpectrum"
              demoLink="https://drive.google.com/file/d/12t11-uD9SFK_1bk0rWWxF7paq9vpkbpW/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fashion}
              isBlog={false}
              title="Fashion Flex E-Commerce"
              description="FashionFlex E-commerce is a state-of-the-art online marketplace with features like safe payment and real-time order tracking that provide a seamless and pleasurable buying experience for stylish clothing. It uses cutting-edge web technologies that are personalized to satisfy user needs."
              ghLink="https://github.com/praneeethreddy/FashionFlex-webApp"
            demoLink="https://drive.google.com/file/d/1bphucoWawGdp4USvFuIC7vGBCxvJ-9vp/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={groccery}
              isBlog={false}
              title="Grocery Store "
              description="With automated inventory management and order processing, the Grocery Management System is a dynamic e-commerce platform for online grocery ordering. Customers can register, log in, personalize their shopping, select between pickup and delivery, and administrators can effectively control product listings and pricing."
              ghLink="https://github.com/praneeethreddy/grocercy-ecomerce"
              // demoLink="" 
            />
          </Col>
             <Col md={4} className="project-card">
            <ProjectCard
              imgPath={house}
              isBlog={false}
              title="House Rental Management "
              description="A cloud-based house rental management application leveraging AWS S3, EC2, and Lambda functions. Enables property owners to efficiently oversee their rentals remotely, providing real-time access to visitor logs and guest details, facilitating seamless management even in the owner's absence."
              ghLink=""
              // demoLink="" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
