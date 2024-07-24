import React from 'react';
import './Footer.css'; 

const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} Springdale Public School. All rights reserved.</p>
    <div className="social-icons">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
  </footer>
);

export default Footer;
