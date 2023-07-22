import React from 'react';
import './AboutModal.css';

const AboutModal = ({ onClose }) => {
  return (
    <div className="about-modal-overlay">
      <div className="about-modal-content">
        <h2>About the Customer Service Portal</h2>
        <p>
          The Customer Service Portal is a web application designed to provide excellent customer service to our users. It allows our support staff to manage user accounts, subscriptions, and purchase history effectively.
        </p>
        <h3>
          Key Features:
        </h3>
        <ol>
          <li>Account Management: View and edit user account details, such as name, email, and phone number.</li>
          <li>Subscription Management: Manage user subscriptions, including adding, removing, and transferring subscriptions between users or vehicles.</li>
          <li>Purchase History: Access and review the purchase history of users to provide better support.</li>
          <li>Search Functionality: Easily search and find users based on their names, email addresses, or phone numbers.</li>
        </ol>
        <p>
          The Customer Service Portal is a powerful tool that streamlines customer support operations and ensures a seamless experience for our valued users.
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AboutModal;

