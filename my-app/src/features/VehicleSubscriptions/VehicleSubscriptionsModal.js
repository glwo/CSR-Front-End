import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../Users/usersSlice';

import './VehicleSubscriptionsModal.css';

const VehicleSubscriptionsModal = ({ user, users, onClose }) => {
  const [selectedSubscription, setSelectedSubscription] = useState(null);
  const [newVehicle, setNewVehicle] = useState('');
  const [newStatus, setNewStatus] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    // Update the local state whenever the user prop changes
    if (user) {
      setSelectedSubscription(null); // Reset selected subscription when the modal is opened
    }
  }, [user]);

  const handleSubscriptionClick = (subscription) => {
    setSelectedSubscription(subscription);
  };

  const handleAddSubscription = () => {
    if (newVehicle && newStatus) {
      const newSubscription = {
        id: Date.now(), // Generate a unique ID
        vehicle: newVehicle,
        status: newStatus,
      };

      const updatedUser = {
        ...user,
        subscriptions: [...user.subscriptions, newSubscription],
      };

      dispatch(updateUser(updatedUser));

      // Reset input fields
      setNewVehicle('');
      setNewStatus('');
    }
  };

  const handleRemoveSubscription = (subscriptionId) => {
    const updatedUser = {
      ...user,
      subscriptions: user.subscriptions.filter((subscription) => subscription.id !== subscriptionId),
    };

    dispatch(updateUser(updatedUser));

    // Clear selected subscription
    setSelectedSubscription(null);
  };

  const handleTransferSubscription = (newUser) => {
    const updatedUser = {
      ...user,
      subscriptions: user.subscriptions.filter((subscription) => subscription.id !== selectedSubscription.id),
    };

    const updatedNewUser = {
      ...newUser,
      subscriptions: [...newUser.subscriptions, selectedSubscription],
    };

    dispatch(updateUser(updatedUser));
    dispatch(updateUser(updatedNewUser));

    // Clear selected subscription
    setSelectedSubscription(null);
  };

  if (!user) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Vehicle Subscriptions</h3>
        <ul>
          {user.subscriptions.map((subscription) => (
            <li
              key={subscription.id}
              onClick={() => handleSubscriptionClick(subscription)}
              className={selectedSubscription === subscription ? 'selected' : ''}
            >
              {subscription.vehicle} - {subscription.status}
            </li>
          ))}
        </ul>

        {selectedSubscription === null && (
          <div>
            <h4>Add Subscription</h4>
            <input
              type="text"
              placeholder="Vehicle"
              value={newVehicle}
              onChange={(e) => setNewVehicle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Status"
              value={newStatus}
              onChange={(e) => setNewStatus(e.target.value)}
            />
            <button onClick={handleAddSubscription}>Add Subscription</button>
          </div>
        )}

        {selectedSubscription && (
          <>
            <div>
              <h4>Edit Subscription</h4>
              <p>Vehicle: {selectedSubscription.vehicle}</p>
              <p>Status: {selectedSubscription.status}</p>
              <button onClick={() => handleRemoveSubscription(selectedSubscription.id)}>
                Remove Subscription
              </button>
            </div>
            <div>
              <h4>Transfer Subscription</h4>
              <p>Select a user to transfer the subscription:</p>
              <select
                value=""
                onChange={(e) => {
                  const selectedUserId = e.target.value;
                  const newUser = users.find((user) => user.id === Number(selectedUserId));
                  handleTransferSubscription(newUser);
                }}
              >
                <option value="" disabled>
                  Select User
                </option>
                {users
                  .filter((u) => u.id !== user.id)
                  .map((u) => (
                    <option key={u.id} value={u.id}>
                      {u.name}
                    </option>
                  ))}
              </select>
            </div>
          </>
        )}

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default VehicleSubscriptionsModal;

