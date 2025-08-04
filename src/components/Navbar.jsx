import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
    <Link className="navbar-brand" to="/">Pokédex</Link>
  </nav>
);

export default Navbar;