import React from 'react';
import logo from "./header.png"
import "./Header.css"

const Header = () => {
  return (
    <header className='ampHeader'>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <h1 className="title">Customer Service Portal</h1>
      <div className="options-button">
        <button>Options</button>
      </div>
    </header>
  );
};

export default Header;
