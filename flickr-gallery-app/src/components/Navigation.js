import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/beksinski">Beksinski</NavLink></li>
        <li><NavLink to="/magritte">Magritte</NavLink></li>
        <li><NavLink to="/kahlo">Kahlo</NavLink></li>
        <li><NavLink to="/chihuly">Chihuly</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
