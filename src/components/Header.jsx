import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'; 
import './Header.css'; 

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Search query:', searchQuery);
  };

  return (
    <Navbar className="custom-navbar" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img src={logo} alt="School Logo" className="logo-image" />
        <span className="navbar-title"></span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About Us</Nav.Link>
          <Nav.Link as={Link} to="/academics">Academics</Nav.Link>
          <Nav.Link as={Link} to="/admissions">Admissions</Nav.Link>
          <Nav.Link as={Link} to="/faculty">Faculty</Nav.Link>
          <Nav.Link as={Link} to="/students">Students</Nav.Link>
          <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
        </Nav>
        <Form inline onSubmit={handleSearch} className="ml-3">
          <FormControl 
            type="text" 
            placeholder="Search" 
            className="mr-sm-2 search-input" 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
          {/* <Button type="submit" variant="outline-light" className="search-button">Search</Button> */}
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
