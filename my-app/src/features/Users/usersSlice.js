import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  users: [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
      phoneNumber: '123-456-7890',
      subscriptions: [
        {
          id: 1,
          vehicle: 'Car A',
          status: 'active',
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
      email: 'janesmith@example.com',
      phoneNumber: '987-654-3210',
      subscriptions: [
        {
          id: 2,
          vehicle: 'Car B',
          status: 'active',
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
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alicejohnson@example.com',
      phoneNumber: '555-123-4567',
      subscriptions: [],
      purchaseHistory: [],
    },
    {
      id: 4,
      name: 'Bob Anderson',
      email: 'bobanderson@example.com',
      phoneNumber: '888-999-7777',
      subscriptions: [
        {
          id: 3,
          vehicle: 'Truck A',
          status: 'active',
        },
      ],
      purchaseHistory: [],
    },
    {
      id: 5,
      name: 'Emily Brown',
      email: 'emilybrown@example.com',
      phoneNumber: '222-333-4444',
      subscriptions: [
        {
          id: 4,
          vehicle: 'Motorcycle A',
          status: 'active',
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
    // Additional 15 users...
    {
      id: 6,
      name: 'Michael Johnson',
      email: 'michaeljohnson@example.com',
      phoneNumber: '111-222-3333',
      subscriptions: [
        {
          id: 5,
          vehicle: 'Car C',
          status: 'active',
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
      email: 'sophialee@example.com',
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
      email: 'williamdavis@example.com',
      phoneNumber: '777-888-9999',
      subscriptions: [
        {
          id: 6,
          vehicle: 'Truck B',
          status: 'active',
        },
      ],
      purchaseHistory: [],
    },
    {
      id: 9,
      name: 'Olivia Martinez',
      email: 'oliviamartinez@example.com',
      phoneNumber: '111-222-3333',
      subscriptions: [],
      purchaseHistory: [],
    },
    {
      id: 10,
      name: 'James Taylor',
      email: 'jamestaylor@example.com',
      phoneNumber: '444-555-6666',
      subscriptions: [],
      purchaseHistory: [],
    },
    {
      id: 11,
      name: 'Emma Clark',
      email: 'emmaclark@example.com',
      phoneNumber: '777-888-9999',
      subscriptions: [
        {
          id: 7,
          vehicle: 'Car D',
          status: 'active',
        },
      ],
      purchaseHistory: [],
    },
    {
      id: 12,
      name: 'Liam Lewis',
      email: 'liamlewis@example.com',
      phoneNumber: '111-222-3333',
      subscriptions: [
        {
          id: 8,
          vehicle: 'Motorcycle B',
          status: 'active',
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
      email: 'avaadams@example.com',
      phoneNumber: '444-555-6666',
      subscriptions: [],
      purchaseHistory: [],
    },
    {
      id: 14,
      name: 'Noah Wright',
      email: 'noahwright@example.com',
      phoneNumber: '777-888-9999',
      subscriptions: [
        {
          id: 9,
          vehicle: 'Car E',
          status: 'active',
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
      email: 'isabellahill@example.com',
      phoneNumber: '111-222-3333',
      subscriptions: [],
      purchaseHistory: [],
    },
    {
      id: 16,
      name: 'Mason Turner',
      email: 'masonturner@example.com',
      phoneNumber: '444-555-6666',
      subscriptions: [
        {
          id: 10,
          vehicle: 'Truck C',
          status: 'active',
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
      email: 'ellahernandez@example.com',
      phoneNumber: '777-888-9999',
      subscriptions: [],
      purchaseHistory: [],
    },
    {
      id: 18,
      name: 'Elijah Moore',
      email: 'elijahmoore@example.com',
      phoneNumber: '111-222-3333',
      subscriptions: [
        {
          id: 11,
          vehicle: 'Car F',
          status: 'active',
        },
      ],
      purchaseHistory: [],
    },
    {
      id: 19,
      name: 'Avery Parker',
      email: 'averyparker@example.com',
      phoneNumber: '444-555-6666',
      subscriptions: [
        {
          id: 12,
          vehicle: 'Motorcycle C',
          status: 'active',
        },
      ],
      purchaseHistory: [],
    },
    {
      id: 20,
      name: 'Mia Simmons',
      email: 'miasimmons@example.com',
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
