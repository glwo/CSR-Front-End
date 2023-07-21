import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './features/Users/UsersList';
import Header from './features/Header/Header';
import Footer from './features/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
        <UserList />
        <Footer />
    </div>
  );
}

export default App;
