import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EditAccountModal from '../EditAccount/EditAccountModal'; // Modal component for editing account
import VehicleSubscriptionsModal from '../VehicleSubscriptions/VehicleSubscriptionsModal'; // Modal component for managing subscriptions
import { selectUser, updateUser } from './usersSlice';
import './UsersList.css'; // Import the CSS file

const UserList = () => {
  const users = useSelector((state) => state.users.users);
  const selectedUser = useSelector((state) => state.users.selectedUser);
  const dispatch = useDispatch();

  const [editAccountModalOpen, setEditAccountModalOpen] = useState(false);
  const [vehicleSubscriptionsModalOpen, setVehicleSubscriptionsModalOpen] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null); // State to manage expanded cards

  const handleUserClick = (user, event) => {
    // Check if the click target is a button inside the card
    const isButtonClicked = event.target.tagName === 'BUTTON' || event.target.closest('button');

    // If the clicked card is already expanded and a button is clicked, don't collapse the card
    // Otherwise, select the user and expand/collapse the card
    if (expandedCard === user.id && isButtonClicked) {
      return;
    } else {
      setExpandedCard((prevExpandedCard) => (prevExpandedCard === user.id ? null : user.id));
      if (selectedUser?.id === user.id) {
        dispatch(selectUser(null));
      } else {
        dispatch(selectUser(user));
      }
    }
  };

  const handleSaveAccount = (updatedUser) => {
    dispatch(updateUser(updatedUser));
    setEditAccountModalOpen(false);
  };

  const handleManageSubscriptions = () => {
    setVehicleSubscriptionsModalOpen(true);
  };

  const handleVehicleSubscriptionsSave = (updatedUser) => {
    dispatch(updateUser(updatedUser));
    setVehicleSubscriptionsModalOpen(false);
  };

  return (
    <div>
      <h2 className="usersH2">Registered Users</h2>
      <div className="user-list-container">
        {users.map((user) => (
          <div
          key={user.id}
          className={`user-card ${selectedUser?.id === user.id ? 'selected' : ''} ${
            expandedCard === user.id ? 'expanded' : ''
          }`}
          onClick={(event) => handleUserClick(user, event)} // Pass the event object to the function
          style={{ maxHeight: expandedCard === user.id ? '24.5vh' : '15vh' }}
        >
            {selectedUser?.id === user.id ? (
              <>
                <div className="user-details">
                  <h3>{user.name}</h3>
                  <p>Email: {user.email}</p>
                  <p>Phone Number: {user.phoneNumber}</p>
                  <p>Subscriptions:</p>
                  <ul className="no-bullets"> {/* Add the "no-bullets" class to hide bullet points */}
                    {user.subscriptions.map((subscription) => (
                      <li key={subscription.id}>
                        Vehicle: {subscription.vehicle}, Status: {subscription.status}
                      </li>
                    ))}
                  </ul>
                  <p>Purchase History:</p>
                  <ul className="no-bullets"> {/* Add the "no-bullets" class to hide bullet points */}
                    {user.purchaseHistory.map((purchase) => (
                      <li key={purchase.id}>
                        Date: {purchase.date}, Amount: {purchase.amount}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="user-buttons">
                  <button onClick={() => setEditAccountModalOpen(true)}>Edit Account</button>
                  <button onClick={handleManageSubscriptions}>Manage Subscriptions</button>
                </div>
              </>
            ) : (
              <>
                <h3>{user.name}</h3>
                <p>Email: {user.email}</p>
                <p>Phone Number: {user.phoneNumber}</p>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Edit Account Modal */}
      {editAccountModalOpen && (
        <EditAccountModal user={selectedUser} onSave={handleSaveAccount} onClose={() => setEditAccountModalOpen(false)} />
      )}

      {/* Vehicle Subscriptions Modal */}
      {vehicleSubscriptionsModalOpen && (
        <VehicleSubscriptionsModal
          user={selectedUser}
          users={users}
          onSave={handleVehicleSubscriptionsSave}
          onClose={() => setVehicleSubscriptionsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default UserList;
