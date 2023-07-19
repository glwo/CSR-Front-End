import React, { useState } from 'react';

const EditAccount = ({ user, onSave }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);

  const handleSave = () => {
    const updatedUser = {
      ...user,
      name,
      email,
      phoneNumber,
    };
    onSave(updatedUser);
  };

  return (
    <div>
      <h2>Edit Account</h2>
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
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditAccount;
