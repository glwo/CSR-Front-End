import React, { useState, useEffect } from 'react';
import './EditAccountModal.css';

const EditAccountModal = ({ user, onSave, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  useEffect(() => {
    // Update the local state whenever the selectedUser prop changes
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setPhoneNumber(user.phoneNumber);
    }
  }, [user]);

  const validateInputs = () => {
    let isValid = true;
    setNameError('');
    setEmailError('');
    setPhoneError('');

    // Validate name
    if (name.length > 40) {
      setNameError('Name should not exceed 40 characters.');
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      setEmailError('Invalid email format.');
      isValid = false;
    }

    // Validate phone number
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (!phoneNumber.match(phoneRegex)) {
      setPhoneError('Invalid phone number. Format should be 123-456-7890.');
      isValid = false;
    }

    return isValid;
  };

  const handleSave = () => {
    if (validateInputs()) {
      const updatedUser = {
        ...user,
        name,
        email,
        phoneNumber,
      };
      onSave(updatedUser);
    }
  };

  // If user is not available, return null to prevent rendering the modal
  if (!user) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Account</h2>
        {nameError || emailError || phoneError ? (
          <div className="error-list">
            <ul>
              {nameError && <li>{nameError}</li>}
              {emailError && <li>{emailError}</li>}
              {phoneError && <li>{phoneError}</li>}
            </ul>
          </div>
        ) : null}
        <div>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Phone Number:
            <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </label>
        </div>
        <div className="modal-buttons">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditAccountModal;
