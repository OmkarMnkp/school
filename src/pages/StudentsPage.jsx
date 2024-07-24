import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './StudentsPage.css';

const StudentsPage = () => (
  <Container className="students-container">
    <Row>
      <Col>
        <h2 className="students-heading">STUDENTS</h2>
        <div className="students-section">
          <h3>Student Achievements</h3>
          <ul className="student-achievements">
            <li className="achievement-item">John Doe won the National Science Olympiad 2023.</li>
            <li className="achievement-item">Jane Smith was awarded Best Debater at the Inter-School Debate Competition.</li>
            <li className="achievement-item">Emily Johnson secured first place in the State-Level Math Quiz.</li>
          </ul>
        </div>
        <div className="students-section">
          <h3>Student Life</h3>
          <p>Our students engage in a variety of extracurricular activities including sports, arts, and leadership programs.</p>
        </div>
      </Col>
    </Row>
  </Container>
);

export default StudentsPage;
