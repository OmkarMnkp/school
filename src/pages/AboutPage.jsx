import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutPage.css';

const AboutPage = () => (
  <Container className="about-container">
    <Row>
      <Col>
        <h2 className="about-heading">ABOUT US</h2>
        <div className="about-content">
          <section className="about-section">
            <h3>History</h3>
            <p>Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.</p>
          </section>
          <section className="about-section">
            <h3>Vision</h3>
            <p>To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
          </section>
          <section className="about-section">
            <h3>Mission</h3>
            <p>To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
          </section>
          <section className="message-box">
            <h4>Message from the Principal</h4>
            <p>At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.</p>
          </section>
          <section className="about-section">
            <h3>Infrastructure and Facilities</h3>
            <ul className="infrastructure-list">
              <li>State-of-the-art science and computer labs</li>
              <li>Spacious and well-equipped classrooms</li>
              <li>Library with a vast collection of books and digital resources</li>
              <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
            </ul>
          </section>
        </div>
      </Col>
    </Row>
  </Container>
);

export default AboutPage;
