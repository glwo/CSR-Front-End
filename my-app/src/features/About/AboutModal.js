import React from 'react';
import './AboutModal.css';

const AboutModal = ({ onClose }) => {
  return (
    <div className="about-modal-overlay">
      <div className="about-modal-content">
        <h2>About Customer Service Portal</h2>
        <p>
          // Describe the site's functions here...
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AboutModal;
