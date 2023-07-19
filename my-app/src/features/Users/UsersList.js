import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const UserList = () => {
  const users = useSelector((state) => state.users.users);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleUserClick = (userId) => {
    setSelectedUserId(userId);
  };

  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user.id} onClick={() => handleUserClick(user.id)}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone Number: {user.phoneNumber}</p>
          {selectedUserId === user.id && (
            <>
              <p>Subscriptions:</p>
              <ul>
                {user.subscriptions.map((subscription) => (
                  <li key={subscription.id}>
                    Vehicle: {subscription.vehicle}, Status: {subscription.status}
                  </li>
                ))}
              </ul>
              <p>Purchase History:</p>
              <ul>
                {user.purchaseHistory.map((purchase) => (
                  <li key={purchase.id}>
                    Date: {purchase.date}, Amount: {purchase.amount}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserList;
