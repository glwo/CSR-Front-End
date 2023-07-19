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
    // Other users...
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
