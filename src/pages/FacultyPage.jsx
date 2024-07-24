import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './FacultyPage.css';

// Example icons - replace these paths with actual icon paths or URLs
import principalIcon from '../assets/images/teacher_10618288.png';
import vicePrincipalIcon from '../assets/images/teacher_10618288.png';
import teacherIcon from '../assets/images/teacher_10618288.png';

const FacultyPage = () => (
  <Container className="faculty-container">
    <Row>
      <Col>
        <h2 className="faculty-heading">FACULTY</h2>
        <div className="faculty-profile">
          <img src={principalIcon} alt="Principal Icon" className="faculty-icon" />
          <div className="faculty-info">
            <h3>John Doe</h3>
            <p>Principal, M.Ed, 20 years of experience in educational administration.</p>
          </div>
        </div>
        <div className="faculty-profile">
          <img src={vicePrincipalIcon} alt="Vice Principal Icon" className="faculty-icon" />
          <div className="faculty-info">
            <h3>Jane Smith</h3>
            <p>Vice Principal, M.Sc. in Physics, 15 years of teaching experience.</p>
          </div>
        </div>
        <div className="faculty-profile">
          <img src={teacherIcon} alt="Teacher Icon" className="faculty-icon" />
          <div className="faculty-info">
            <h3>Emily Johnson</h3>
            <p>English Teacher, M.A. in English, 10 years of teaching experience.</p>
          </div>
        </div>
        <div className="faculty-profile">
          <img src={teacherIcon} alt="Teacher Icon" className="faculty-icon" />
          <div className="faculty-info">
            <h3>Michael Brown</h3>
            <p>Mathematics Teacher, M.Sc. in Mathematics, 8 years of teaching experience.</p>
          </div>
        </div>
        <div className="faculty-profile">
          <img src={teacherIcon} alt="Teacher Icon" className="faculty-icon" />
          <div className="faculty-info">
            <h3>Sophia Davis</h3>
            <p>Science Teacher, M.Sc. in Chemistry, 12 years of teaching experience.</p>
          </div>
        </div>
        <div className="faculty-profile">
          <img src={teacherIcon} alt="Teacher Icon" className="faculty-icon" />
          <div className="faculty-info">
            <h3>William Wilson</h3>
            <p>Physical Education Teacher, B.P.Ed, 5 years of experience in sports coaching.</p>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default FacultyPage;
