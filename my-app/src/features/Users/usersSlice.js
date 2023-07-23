import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  users: [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      phoneNumber: '123-456-7890',
      subscriptions: [
        {
          id: 1,
          vehicle: {
            make: 'Toyota',
            model: 'Corolla',
            licensePlate: 'ABC123',
            status: 'active',
          },
        },
        // Other subscriptions...
      ],
      purchaseHistory: [
        {
          id: 1,
          date: '2023-07-01',
          amount: 10.99,
          // Other purchase details...
        },
        // Other purchase history...
      ],
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@hotmail.com',
      phoneNumber: '987-654-3210',
      subscriptions: [
        {
          id: 2,
          vehicle: {
            make: 'Honda',
            model: 'Civic',
            licensePlate: 'XYZ789',
            status: 'active',
          },
        },
      ],
      purchaseHistory: [
        {
          id: 2,
          date: '2023-07-02',
          amount: 9.99,
        },
      ],
    },
    // Additional users with refactored data...
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice.johnson123@gmail.com',
      phoneNumber: '555-123-4567',
      subscriptions: [],
      purchaseHistory: [],
    },
    {
      id: 4,
      name: 'Bob Anderson',
      email: 'bob.anderson@example.net',
      phoneNumber: '888-999-7777',
      subscriptions: [
        {
          id: 3,
          vehicle: {
            make: 'Ford',
            model: 'F-150',
            licensePlate: 'DEF456',
            status: 'active',
          },
        },
      ],
      purchaseHistory: [],
    },
    {
      id: 5,
      name: 'Emily Brown',
      email: 'emily.brown34@yahoo.com',
      phoneNumber: '222-333-4444',
      subscriptions: [
        {
          id: 4,
          vehicle: {
            make: 'Harley-Davidson',
            model: 'Softail',
            licensePlate: 'GHI789',
            status: 'active',
          },
        },
      ],
      purchaseHistory: [
        {
          id: 3,
          date: '2023-07-03',
          amount: 7.99,
        },
      ],
    },
    {
      id: 6,
      name: 'Michael Johnson',
      email: 'michael.johnson1980@gmail.com',
      phoneNumber: '555-111-2222',
      subscriptions: [
        {
          id: 5,
          vehicle: {
            make: 'Chevrolet',
            model: 'Malibu',
            licensePlate: 'JKL012',
            status: 'active',
          },
        },
      ],
      purchaseHistory: [
        {
          id: 4,
          date: '2023-07-04',
          amount: 12.99,
        },
      ],
    },
    {
      id: 7,
      name: 'Sophia Lee',
      email: 'sophia.lee_1995@yahoo.com',
      phoneNumber: '444-555-6666',
      subscriptions: [],
      purchaseHistory: [
        {
          id: 5,
          date: '2023-07-05',
          amount: 8.99,
        },
      ],
    },
    {
      id: 8,
      name: 'William Davis',
      email: 'wdavis1987@hotmail.com',
      phoneNumber: '777-888-9999',
      subscriptions: [
        {
          id: 6,
          vehicle: {
            make: 'GMC',
            model: 'Sierra',
            licensePlate: 'MNO345',
            status: 'active',
          },
        },
      ],
      purchaseHistory: [],
    },
    {
      id: 9,
      name: 'Olivia Martinez',
      email: 'olivia_martinez@example.net',
      phoneNumber: '111-222-3333',
      subscriptions: [],
      purchaseHistory: [],
    },
    {
      id: 10,
      name: 'James Taylor',
      email: 'james.taylor1984@yahoo.com',
      phoneNumber: '444-555-6666',
      subscriptions: [],
      purchaseHistory: [],
    },
    {
      id: 11,
      name: 'Emma Clark',
      email: 'emma_clark82@gmail.com',
      phoneNumber: '777-888-9999',
      subscriptions: [
        {
          id: 7,
          vehicle: {
            make: 'Nissan',
            model: 'Altima',
            licensePlate: 'PQR678',
            status: 'active',
          },
        },
      ],
      purchaseHistory: [],
    },
    {
      id: 12,
      name: 'Liam Lewis',
      email: 'liam.lewis79@hotmail.com',
      phoneNumber: '111-222-3333',
      subscriptions: [
        {
          id: 8,
          vehicle: {
            make: 'Harley-Davidson',
            model: 'Sportster',
            licensePlate: 'STU901',
            status: 'active',
          },
        },
      ],
      purchaseHistory: [
        {
          id: 6,
          date: '2023-07-06',
          amount: 9.99,
        },
      ],
    },
    {
      id: 13,
      name: 'Ava Adams',
      email: 'ava.adams2000@yahoo.com',
      phoneNumber: '444-555-6666',
      subscriptions: [],
      purchaseHistory: [],
    },
    {
      id: 14,
      name: 'Noah Wright',
      email: 'noah_wright1989@gmail.com',
      phoneNumber: '777-888-9999',
      subscriptions: [
        {
          id: 9,
          vehicle: {
            make: 'Ford',
            model: 'Mustang',
            licensePlate: 'VWX234',
            status: 'active',
          },
        },
      ],
      purchaseHistory: [
        {
          id: 7,
          date: '2023-07-07',
          amount: 15.99,
        },
      ],
    },
    {
      id: 15,
      name: 'Isabella Hill',
      email: 'isabella_hill1996@example.net',
      phoneNumber: '111-222-3333',
      subscriptions: [],
      purchaseHistory: [],
    },
    {
      id: 16,
      name: 'Mason Turner',
      email: 'mason.turner45@gmail.com',
      phoneNumber: '444-555-6666',
      subscriptions: [
        {
          id: 10,
          vehicle: {
            make: 'Chevrolet',
            model: 'Equinox',
            licensePlate: 'YZA345',
            status: 'active',
          },
        },
      ],
      purchaseHistory: [
        {
          id: 8,
          date: '2023-07-08',
          amount: 11.99,
        },
      ],
    },
    {
      id: 17,
      name: 'Ella Hernandez',
      email: 'ella.hernandez@yahoo.com',
      phoneNumber: '777-888-9999',
      subscriptions: [],
      purchaseHistory: [],
    },
    {
      id: 18,
      name: 'Elijah Moore',
      email: 'elijah_moore1988@hotmail.com',
      phoneNumber: '111-222-3333',
      subscriptions: [
        {
          id: 11,
          vehicle: {
            make: 'Toyota',
            model: 'Camry',
            licensePlate: 'BZA678',
            status: 'active',
          },
        },
      ],
      purchaseHistory: [],
    },
    {
      id: 19,
      name: 'Avery Parker',
      email: 'aparker2023@example.net',
      phoneNumber: '444-555-6666',
      subscriptions: [
        {
          id: 12,
          vehicle: {
            make: 'Harley-Davidson',
            model: 'Road King',
            licensePlate: 'CZA789',
            status: 'active',
          },
        },
      ],
      purchaseHistory: [],
    },
    {
      id: 20,
      name: 'Mia Simmons',
      email: 'mia.simmons32@yahoo.com',
      phoneNumber: '777-888-9999',
      subscriptions: [],
      purchaseHistory: [
        {
          id: 9,
          date: '2023-07-09',
          amount: 13.99,
        },
      ],
    },
  ],
  selectedUser: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loadAllUsers: (state, action) => {
        console.log(current(state));
      state.users = action.payload;
    },
    selectUser: (state, action) => {
        console.log(current(state));
      state.selectedUser = action.payload;
    },
    updateUser: (state, action) => {
        console.log(current(state));
      const { id } = action.payload;
      const userIndex = state.users.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        state.users[userIndex] = action.payload;
        if (state.selectedUser?.id === id) {
          state.selectedUser = action.payload;
        }
      }
    },
  },
});

// Action creators
export const { loadAllUsers, selectUser, updateUser } = usersSlice.actions;

export default usersSlice.reducer;
