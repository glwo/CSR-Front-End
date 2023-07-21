import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>© 2023 AMP CSR Portal. All rights reserved.</p>
        <p>Developed by Glen Wojnar</p>
        <a
  href="https://github.com/glwo/CSR-Front-End"
  target="_blank"
  rel="noopener noreferrer"
>
  Visit Project Repository
</a>
      </div>
    </footer>
  );
};

export default Footer;
