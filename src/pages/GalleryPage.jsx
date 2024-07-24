import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import sportsDay from '../assets/images/sports_day.jpg';
import scienceExhibition from '../assets/images/science_exhibition.jpg';
import culturalFest from '../assets/images/cultural_fest.jpg';
import classroom from '../assets/images/classroom.jpg';
import library from '../assets/images/library.jpg';
import './Gallery.css';

const GalleryPage = () => (
  <Container className="gallery-container">
    <Row className="mt-4">
      <Col>
        <h2 className="gallery-heading">GALLERY</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={sportsDay} />
              <Card.Body>
                <Card.Title>Sports Day</Card.Title>
                <Card.Text>Students participating in various sports events.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={scienceExhibition} />
              <Card.Body>
                <Card.Title>Science Exhibition</Card.Title>
                <Card.Text>Students presenting their science projects.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={culturalFest} />
              <Card.Body>
                <Card.Title>Cultural Fest</Card.Title>
                <Card.Text>Students performing in the cultural fest.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={classroom} />
              <Card.Body>
                <Card.Title>Classroom</Card.Title>
                <Card.Text>A glimpse of our interactive classrooms.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={library} />
              <Card.Body>
                <Card.Title>Library</Card.Title>
                <Card.Text>Students reading and studying in the school library.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default GalleryPage;
