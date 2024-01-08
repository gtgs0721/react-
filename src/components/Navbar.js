// src/components/Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar" style={{zIndex:'1550'}}>
      <Link to="/page1" className={location.pathname === '/page1' ? 'active' : ''}>
        <FontAwesomeIcon icon={faSearch} className="icon" />
        <span>校际通勤</span>
      </Link>
      <Link to="/page2" className={location.pathname === '/page2' ? 'active' : ''}>
        <FontAwesomeIcon icon={faBus} className="icon" />
        <span>校内班车</span>
      </Link>
      <Link to="/page3" className={location.pathname === '/page3' ? 'active' : ''}>
        <FontAwesomeIcon icon={faHome} className="icon" />
        <span>我的主页</span>
      </Link>
    </div>
  );
};

export default Navbar;
