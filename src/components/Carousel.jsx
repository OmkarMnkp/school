import React from 'react';
import { Carousel } from 'react-bootstrap';
import sportsDay from '../assets/images/sports_day.jpg';
import scienceExhibition from '../assets/images/science_exhibition.jpg';
import culturalFest from '../assets/images/cultural_fest.jpg';

const CarouselComponent = () => (
  <Carousel>
    <Carousel.Item>
      <img className="d-block w-100" src={sportsDay} alt="Sports Day" />
      <Carousel.Caption>
        <h3>Annual Sports Day - Celebrating Excellence in Sports</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={scienceExhibition} alt="Science Exhibition" />
      <Carousel.Caption>
        <h3>Science Exhibition - Showcasing Student Innovations</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={culturalFest} alt="Cultural Fest" />
      <Carousel.Caption>
        <h3>Cultural Fest - Embracing Diversity and Creativity</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default CarouselComponent;
