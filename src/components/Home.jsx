import React from 'react';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import banner1 from '../assets/images/ball.jpg';
import banner2 from '../assets/images/science_exhibition.jpg';
import banner3 from '../assets/images/cultural_fest.jpg';
import { Link } from 'react-router-dom';
import './Home.css';

const HomePage = () => (
  <Container>
    <Carousel className="mt-4 custom-carousel">
      <Carousel.Item>
        <img 
          className="d-block w-100 carousel-img" 
          src={banner1} 
          alt="Annual Sports Day" 
        />
        <Carousel.Caption className="carousel-caption">
          <h3>Annual Sports Day</h3>
          <p>Celebrating Excellence in Sports</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100 carousel-img" 
          src={banner2} 
          alt="Science Exhibition" 
        />
        <Carousel.Caption className="carousel-caption">
          <h3>Science Exhibition</h3>
          <p>Showcasing Student Innovations</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100 carousel-img" 
          src={banner3} 
          alt="Cultural Fest" 
        />
        <Carousel.Caption className="carousel-caption">
          <h3>Cultural Fest</h3>
          <p>Embracing Diversity and Creativity</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Row className="mt-4 text-center">
      <Col>
        <h2 className="home-heading">Welcome to Springdale Public School</h2>
        <p className="home-description">Welcome to Springdale Public School, where we nurture young minds for a brighter future.</p>
        <Button className="home-button" variant="primary" as={Link} to="/about">Learn More About Us</Button>
      </Col>
    </Row>
  </Container>
);

export default HomePage;
