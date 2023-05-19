import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './GetStartedBtn.css';

function GetStartedBtn() {
    const location = useLocation();

  return (
    <Link to="/databasefundamentals" className={`gradient-button ${location.pathname === '/databasefundamentals' ? 'active' : ''}`}>
      Get Started
    </Link>
  );
}

export default GetStartedBtn;
