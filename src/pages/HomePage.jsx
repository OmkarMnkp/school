import React from 'react';
import CarouselComponent from '../components/Carousel';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './HomePage.css'; 

const HomePage = () => (
  <div className="home-page">
    <CarouselComponent />
    <Container className="home-content">
      <Row className="mt-4">
        <Col className="text-center">
          <h1 className="home-heading">Welcome to Springdale Public School</h1>
          <p className="home-description">
            Welcome to Springdale Public School, where we nurture young minds for a brighter future.
          </p>
          <Button className="home-button" variant="primary" href="/about">Learn More About Us</Button>
        </Col>
      </Row>
    </Container>
  </div>
);

export default HomePage;
