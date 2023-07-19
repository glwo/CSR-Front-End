import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './features/Users/UsersList';
import Header from './features/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
        <UserList />
    </div>
  );
}

export default App;
