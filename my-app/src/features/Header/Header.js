import React, { useState } from "react";
import logo from "./header.png";
import "./Header.css";
import AboutModal from "../About/AboutModal";

const Header = () => {
  const [showAboutModal, setShowAboutModal] = useState(false);

  const handleAboutClick = () => {
    setShowAboutModal(true);
  };

  const handleCloseModal = () => {
    setShowAboutModal(false);
  };

  return (
    <header className="ampHeader">
      <div className="logo-container">
        <a href="/CSR-Front-End/">
          <img src={logo} alt="Logo" className="logo" />
        </a>
      </div>
      <h1 className="title">Customer Service Portal</h1>
      <div className="options-button">
        <button onClick={handleAboutClick}>About</button>
      </div>
      {showAboutModal && <AboutModal onClose={handleCloseModal} />}
    </header>
  );
};

export default Header;
