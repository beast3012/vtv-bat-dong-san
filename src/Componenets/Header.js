import React from 'react';
import '../Styles/Header.css';

const Header = () => {
  return (
      <header className="header">
      <div></div>
      <div className="button-container">
        <button className="button">
          <i className="fas fa-video icon"></i> Video
        </button>
        <button className="button">
          <i className="fas fa-book icon"></i> eMagazine
        </button>
        <button className="button">
          <i className="fab fa-facebook-f" style={{ color: 'white' }}></i>
        </button>
        <button className="button">
          <i className="fas fa-search" style={{ color: 'white' }}></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
