import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AcademicsPage.css';

const AcademicsPage = () => (
  <Container className="academics-container">
    <Row>
      <Col>
        <h2 className="academics-heading">ACADEMICS</h2>
        <div className="academics-section">
          <h3>Curriculum</h3>
          <h4>Primary (Grades 1-5)</h4>
          <ul className="curriculum-list">
            <li>English</li>
            <li>Mathematics</li>
            <li>Science</li>
            <li>Social Studies</li>
            <li>Art</li>
            <li>Physical Education</li>
          </ul>
          <h4>Secondary (Grades 6-10)</h4>
          <ul className="curriculum-list">
            <li>English</li>
            <li>Mathematics</li>
            <li>Science (Physics, Chemistry, Biology)</li>
            <li>Social Studies</li>
            <li>Computer Science</li>
            <li>Physical Education</li>
            <li>Art</li>
          </ul>
          <h4>Senior Secondary (Grades 11-12)</h4>
          <ul className="curriculum-list">
            <li>Science Stream: Physics, Chemistry, Biology, Mathematics, Computer Science, English</li>
            <li>Commerce Stream: Accountancy, Business Studies, Economics, Mathematics, English</li>
          </ul>
        </div>
        <div className="academics-section teaching-methods">
          <h3>Teaching Methodologies</h3>
          <p>We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
        </div>
        <div className="academics-section">
          <h3>Educational Resources</h3>
          <p>Digital classrooms, interactive learning modules, and access to online educational platforms.</p>
        </div>
      </Col>
    </Row>
  </Container>
);

export default AcademicsPage;
