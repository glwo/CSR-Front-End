import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../Users/usersSlice";

import "./VehicleSubscriptionsModal.css";

const VehicleSubscriptionsModal = ({ user, users, onClose }) => {
  const [selectedSubscription, setSelectedSubscription] = useState(null);
  const [newMake, setNewMake] = useState("");
  const [newModel, setNewModel] = useState("");
  const [newPlate, setNewPlate] = useState("");
  const [newStatus, setNewStatus] = useState("active");
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [makeError, setMakeError] = useState("");
  const [modelError, setModelError] = useState("");
  const [plateError, setPlateError] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    // Update the local state whenever the user prop changes
    if (user) {
      setSelectedSubscription(null); // Reset selected subscription when the modal is opened
      setSelectedUserId(null); // Clear selected user when the modal is opened
    }
  }, [user]);

  const validateInputs = () => {
    let isValid = true;
    setMakeError("");
    setModelError("");
    setPlateError("");

    // Validate make
    if (newMake.length > 30) {
      setMakeError("Make should not exceed 30 characters.");
      isValid = false;
    }

    // Validate model
    if (newModel.length > 30) {
      setModelError("Model should not exceed 30 characters.");
      isValid = false;
    }

    // Validate plate
    const plateRegex = /^[A-Za-z0-9]{6,8}$/;
    if (!newPlate.match(plateRegex)) {
      setPlateError("Invalid plate format. Plate should be 6, 7, or 8 characters alphanumeric.");
      isValid = false;
    }

    return isValid;
  };

  const handleSubscriptionClick = (subscription) => {
    setSelectedSubscription(subscription);
  };

  const handleAddSubscription = () => {
    if (newMake && newModel && newPlate && newStatus) {
      if (validateInputs()) {
        const defaultVehicle = {
          make: newMake,
          model: newModel,
          licensePlate: newPlate,
          status: newStatus,
        };

        const newSubscription = {
          id: Date.now(), // Generate a unique ID
          vehicle: defaultVehicle,
        };

        const updatedUser = {
          ...user,
          subscriptions: [...user.subscriptions, newSubscription],
        };

        dispatch(updateUser(updatedUser));

        // Reset input fields
        setNewMake("");
        setNewModel("");
        setNewPlate("");
        setNewStatus("active");
      }
    }
  };

  const handleRemoveSubscription = (subscriptionId) => {
    const updatedUser = {
      ...user,
      subscriptions: user.subscriptions.filter(
        (subscription) => subscription.id !== subscriptionId
      ),
    };

    dispatch(updateUser(updatedUser));

    // Clear selected subscription
    setSelectedSubscription(null);
  };

  const handleTransferSubscription = () => {
    if (selectedSubscription && selectedUserId) {
      const targetUser = users.find((u) => u.id === Number(selectedUserId));

      if (targetUser) {
        // If a user is selected, it's a user transfer
        const updatedUser = {
          ...user,
          subscriptions: user.subscriptions.filter(
            (subscription) => subscription.id !== selectedSubscription.id
          ),
        };

        const updatedTargetUser = {
          ...targetUser,
          subscriptions: [...targetUser.subscriptions, selectedSubscription],
        };

        dispatch(updateUser(updatedUser));
        dispatch(updateUser(updatedTargetUser));

        // Clear selected subscription and reset inputs
        setSelectedSubscription(null);
        setNewMake("");
        setNewModel("");
        setNewPlate("");
        setNewStatus("active");
        setSelectedUserId(null);
      }
    } else if (selectedSubscription && (newMake || newModel || newPlate)) {
      if (validateInputs()) {
        // If a new vehicle is provided, it's a vehicle transfer
        const updatedUser = {
          ...user,
          subscriptions: user.subscriptions.map((subscription) =>
            subscription.id === selectedSubscription.id
              ? {
                  ...subscription,
                  vehicle: {
                    make: newMake || subscription.vehicle.make,
                    model: newModel || subscription.vehicle.model,
                    licensePlate: newPlate || subscription.vehicle.licensePlate,
                    status: newStatus || subscription.vehicle.status,
                  },
                }
              : subscription
          ),
        };

        dispatch(updateUser(updatedUser));

        // Clear selected subscription and reset inputs
        setSelectedSubscription(null);
        setNewMake("");
        setNewModel("");
        setNewPlate("");
        setNewStatus("active");
        setSelectedUserId(null);
      }
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {user.subscriptions.length > 0 ? (
          <>
            <h3>Edit a Subscription</h3>
            <ul>
              {user.subscriptions.map((subscription) => (
                <li
                  key={subscription.id}
                  onClick={() => handleSubscriptionClick(subscription)}
                  className={
                    selectedSubscription === subscription ? "selected" : ""
                  }
                >
                  {subscription.vehicle.make} {subscription.vehicle.model}
                </li>
              ))}
            </ul>
          </>
        ) : null}

        {selectedSubscription === null && (
          <div>
            <h3>Add a Subscription</h3>
            {makeError && <div className="error">{makeError}</div>}
            {modelError && <div className="error">{modelError}</div>}
            {plateError && <div className="error">{plateError}</div>}
            <label>
              {" "}
              Make:
              <input
                type="text"
                placeholder="Make"
                value={newMake}
                onChange={(e) => setNewMake(e.target.value)}
              />
            </label>
            <label>
              {" "}
              Model:
              <input
                type="text"
                placeholder="Model"
                value={newModel}
                onChange={(e) => setNewModel(e.target.value)}
              />
            </label>
            <label>
              {" "}
              License Plate:
              <input
                type="text"
                placeholder="License Plate"
                value={newPlate}
                onChange={(e) => setNewPlate(e.target.value)}
              />
            </label>
            <label>
              {" "}
              Subscription Status:
              <select
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="overdue">Overdue</option>
              </select>
            </label>
            <div className="modal-buttons">
              <button onClick={handleAddSubscription}>Add Subscription</button>
            </div>
          </div>
        )}

        {selectedSubscription && (
          <>
          <div className="editSubRow">
            <div>
              <h4>Subscription Details</h4>
              <p>
                Vehicle: {selectedSubscription.vehicle.make}{" "}
                {selectedSubscription.vehicle.model}
              </p>
              <p>Plate: {selectedSubscription.vehicle.licensePlate}</p>
              <p>Status: {selectedSubscription.vehicle.status}</p>
              <div className="modal-buttons">
                <button
                  onClick={() =>
                    handleRemoveSubscription(selectedSubscription.id)
                  }
                >
                  Remove Subscription
                </button>
              </div>
            </div>
            <div className="transferSubDiv">
              <h4>Transfer Subscription</h4>
              <p>Select a user to transfer to:</p>
              <select
                value={selectedUserId || ""}
                onChange={(e) => {
                  setSelectedUserId(e.target.value || null);
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
              {(!selectedUserId || (newMake && newModel && newPlate)) && (
                <>
                <p>Or transfer to a new vehicle:</p>
                {makeError && <div className="error">{makeError}</div>}
                {modelError && <div className="error">{modelError}</div>}
                {plateError && <div className="error">{plateError}</div>}
                  <input
                    type="text"
                    placeholder="New Make"
                    value={newMake}
                    onChange={(e) => setNewMake(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="New Model"
                    value={newModel}
                    onChange={(e) => setNewModel(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="New License Plate"
                    value={newPlate}
                    onChange={(e) => setNewPlate(e.target.value)}
                  />
                  <label>
                    {" "}
                    New Subscription Status:
                    <select
                      value={newStatus}
                      onChange={(e) => setNewStatus(e.target.value)}
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                      <option value="overdue">Overdue</option>
                    </select>
                  </label>
                </>
              )}
              <button onClick={handleTransferSubscription}>
                    Transfer Subscription
                  </button>
            </div>
            </div>
          </>
        )}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default VehicleSubscriptionsModal;
