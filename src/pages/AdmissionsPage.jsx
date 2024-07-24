import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './AdmissionsPage.css';

const AdmissionsPage = () => (
  <Container className="admissions-container">
    <Row>
      <Col>
        <h2 className="admissions-heading">ADMISSIONS</h2>
        <div className="admissions-section">
          <h3>Admission Process</h3>
          <p>Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
        </div>
        <div className="admissions-section">
          <h3>Criteria</h3>
          <p>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
        </div>
        <div className="admissions-section">
          <h3>Important Dates</h3>
          <ul className="dates-list">
            <li className="date-item">
              <span>Admission Form Availability:</span>
              <strong>March 1st</strong>
            </li>
            <li className="date-item">
              <span>Last Date for Submission:</span>
              <strong>March 31st</strong>
            </li>
            <li className="date-item">
              <span>Entrance Test:</span>
              <strong>April 15th</strong>
            </li>
            <li className="date-item">
              <span>Announcement of Results:</span>
              <strong>April 30th</strong>
            </li>
          </ul>
        </div>
        <div className="admissions-button">
          <Button variant="primary" href="/download-form">Download Admission Form</Button>
        </div>
      </Col>
    </Row>
  </Container>
);

export default AdmissionsPage;
