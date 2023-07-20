// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import EditAccount from '../EditAccount';
// import { selectUser, updateUser } from './usersSlice';
// import VehicleSubscriptions from '../VehicleSubscriptions';
// import './UsersList.css'; // Import the CSS file

// const UserList = () => {
//   const users = useSelector((state) => state.users.users);
//   const selectedUser = useSelector((state) => state.users.selectedUser);
//   const dispatch = useDispatch();

//   const handleUserClick = (user) => {
//     dispatch(selectUser(user));
//   };

//   const handleSaveAccount = (updatedUser) => {
//     dispatch(updateUser(updatedUser));
//   };

//   return (
//   <div>
//     <h2 className='usersH2'>Registered Users</h2>
//     <div className="user-list-container">
//       {users.map((user) => (
//         <div
//           key={user.id}
//           className={`user-card ${selectedUser?.id === user.id ? 'selected' : ''}`}
//           onClick={() => handleUserClick(user)}
//         >
//           <h3>{user.name}</h3>
//           <p>Email: {user.email}</p>
//           <p>Phone Number: {user.phoneNumber}</p>
//           {selectedUser?.id === user.id && (
//             <>
//               <EditAccount user={user} onSave={handleSaveAccount} />
//               <VehicleSubscriptions user={user} users={users} />
//               <p>Subscriptions:</p>
//               <ul>
//                 {user.subscriptions.map((subscription) => (
//                   <li key={subscription.id}>
//                     Vehicle: {subscription.vehicle}, Status: {subscription.status}
//                   </li>
//                 ))}
//               </ul>
//               <p>Purchase History:</p>
//               <ul>
//                 {user.purchaseHistory.map((purchase) => (
//                   <li key={purchase.id}>
//                     Date: {purchase.date}, Amount: {purchase.amount}
//                   </li>
//                 ))}
//               </ul>
//             </>
//           )}
//         </div>
//       ))}
//     </div>
//     </div>
//   );
// };

// export default UserList;

// UserList.js
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

  const handleUserClick = (user) => {
    dispatch(selectUser(user));
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
            className={`user-card ${selectedUser?.id === user.id ? 'selected' : ''}`}
            onClick={() => handleUserClick(user)}
          >
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Phone Number: {user.phoneNumber}</p>
            {selectedUser?.id === user.id && (
              <>
                <button onClick={() => setEditAccountModalOpen(true)}>Edit Account</button>
                <button onClick={handleManageSubscriptions}>Manage Subscriptions</button>
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
