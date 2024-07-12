import React from 'react';
import '../Styles/Header.css';
import NewspaperIcon from '../Assets/newspaper.png';

const Header = () => {
  return (
      <header className="header">
      <div></div>
      <div className="button-container">
        <button className="video button">
          <i class="fas fa-play-circle icon"></i> Video
        </button>
        <button className="eMagazine button">
          <i src={NewspaperIcon} alt="Icon"></i> eMagazine
        </button>
        <button className="facebook button">
          <i className="fab fa-facebook-f" style={{ color: 'white' }}></i>
        </button>
        <button className="search button">
          <i className="fas fa-search" style={{ color: 'white' }}></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
