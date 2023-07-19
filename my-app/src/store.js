import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

import usersReducer from './features/Users/usersSlice'
const logger = createLogger();

const store = configureStore({
  reducer: {
    users: usersReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
