import React from 'react';
import { Gallery } from 'react-bootstrap';
import sportsDay from '../assets/images/sports_day.jpg';
import scienceExhibition from '../assets/images/science_exhibition.jpg';
import culturalFest from '../assets/images/cultural_fest.jpg';
import classroom from '../assets/images/classroom.jpg';
import library from '../assets/images/library.jpg';
import './gallery.css';
const GalleryComponent = () => (
  <div className="gallery">
    <h2 className='heading' >GALLER</h2>
    <Gallery>
      <Gallery.Item>
        <img src={sportsDay} alt="Sports Day" />
      </Gallery.Item>
      <Gallery.Item>
        <img src={scienceExhibition} alt="Science Exhibition" />
      </Gallery.Item>
      <Gallery.Item>
        <img src={culturalFest} alt="Cultural Fest" />
      </Gallery.Item>
      <Gallery.Item>
        <img src={classroom} alt="Classroom" />
      </Gallery.Item>
      <Gallery.Item>
        <img src={library} alt="Library" />
      </Gallery.Item>
    </Gallery>
  </div>
);

export default GalleryComponent;
