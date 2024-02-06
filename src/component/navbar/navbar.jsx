/* eslint-disable no-unused-vars */
import React from 'react';
import './navbar.css'; // Importa tu archivo de estilos CSS
import SearchBar from '../searchbar/searchbar';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <SearchBar />
      <div className="navbar-brand">
</div>

      <ul className="navbar-links">
        <Link className='navbar-link' to="/home">
        <li className="navbar-link">home</li>
        </Link>
        <Link className='navbar-link' to="/abaut">
        <li className="navbar-link">About</li>
        </Link>
        <li className="navbar-link">Servicios</li>
        <li className="navbar-link">Contacto</li>
      </ul>



    </nav>
  );
}



