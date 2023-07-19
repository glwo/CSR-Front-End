import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EditAccount from '../EditAccount';
import { selectUser, updateUser } from './usersSlice';
import VehicleSubscriptions from '../VehicleSubscriptions';

const UserList = () => {
  const users = useSelector((state) => state.users.users);
  const selectedUser = useSelector((state) => state.users.selectedUser);
  const dispatch = useDispatch();

  const handleUserClick = (user) => {
    dispatch(selectUser(user));
  };

  const handleSaveAccount = (updatedUser) => {
    dispatch(updateUser(updatedUser));
  };

  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user.id} onClick={() => handleUserClick(user)}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone Number: {user.phoneNumber}</p>
          {selectedUser?.id === user.id && (
            <>
              <EditAccount user={user} onSave={handleSaveAccount} />
              <VehicleSubscriptions user={user} users={users} />
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
