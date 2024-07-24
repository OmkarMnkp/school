import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './ContactPage.css';

const ContactPage = () => (
  <Container className="contact-container">
    <Row className="mt-4">
      <Col md={6}>
        <h2 className="contact-heading">CONTACT US</h2>
        <Form className="contact-form">
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
      <Col md={6}>
        <div className="map-section">
          <h2>Our Location</h2>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.933052418132!2d-122.08881368467626!3d37.38605177982528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb72fd1ae0549%3A0xe8e9b5297e52b4c1!2sGoogleplex!5e0!3m2!1sen!2sus!4v1550843735366"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default ContactPage;
