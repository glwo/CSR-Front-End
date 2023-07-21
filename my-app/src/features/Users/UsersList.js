import React, { useState, useRef } from 'react';
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
  const cardRef = useRef(null); // Reference to the card element

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

  // Helper function to calculate the total height of subscriptions section
  const calculateSubscriptionsHeight = (user) => {
    const singleSubscriptionHeight = 25; // Height of each individual subscription item in pixels
    return (user.subscriptions.length || 1) * singleSubscriptionHeight;
  };

  // Helper function to calculate the total height of purchases section
  const calculatePurchasesHeight = (user) => {
    const singlePurchaseHeight = 25; // Height of each individual purchase item in pixels
    return (user.purchaseHistory.length || 1) * singlePurchaseHeight;
  };

  // Calculate the total height needed for the card based on subscriptions and purchases
  const calculateCardHeight = (user) => {
    const baseHeight = 190; // Height of the card without subscriptions and purchases in pixels
    const subscriptionsHeight = calculateSubscriptionsHeight(user);
    const purchasesHeight = calculatePurchasesHeight(user);
    return baseHeight + subscriptionsHeight + purchasesHeight;
  };

  return (
    <div>
      <h2 className="usersH2">Registered Users</h2>
      <div className="user-list-container">
        {users.map((user) => (
          <div
            key={user.id}
            ref={user.id === expandedCard ? cardRef : null} // Set the ref to the card element when expanded
            className={`user-card ${selectedUser?.id === user.id ? 'selected' : ''} ${
              expandedCard === user.id ? 'expanded' : ''
            }`}
            onClick={(event) => handleUserClick(user, event)} // Pass the event object to the function
            style={{ height: expandedCard === user.id ? calculateCardHeight(user) : '15vh' }}
          >
            {selectedUser?.id === user.id ? (
              <div className="user-details">
                <h3>{user.name}</h3>
                <p>Email: {user.email}</p>
                <p>Phone Number: {user.phoneNumber}</p>
                {user.subscriptions.length > 0 ? (
                  <>
                    <p>Subscriptions:</p>
                    <ul className="no-bullets">
                      {user.subscriptions.map((subscription) => (
                        <li key={subscription.id}>
                          Vehicle: {subscription.vehicle}, Status: {subscription.status}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <>
                    <p>Subscriptions:</p>
                    <p>User does not have any subscriptions.</p>
                  </>
                )}
                {user.purchaseHistory.length > 0 ? (
                  <>
                    <p>Purchase History:</p>
                    <ul className="no-bullets">
                      {user.purchaseHistory.map((purchase) => (
                        <li key={purchase.id}>
                          Date: {purchase.date}, Amount: {purchase.amount}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <>
                    <p>Purchase History:</p>
                    <p>User has not made any purchases.</p>
                  </>
                )}
                <div className="user-buttons">
                  <button onClick={() => setEditAccountModalOpen(true)}>Edit Account</button>
                  <button onClick={handleManageSubscriptions}>Manage Subscriptions</button>
                </div>
              </div>
            ) : (
              <div>
                <h3>{user.name}</h3>
                <p>Email: {user.email}</p>
                <p>Phone Number: {user.phoneNumber}</p>
              </div>
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
