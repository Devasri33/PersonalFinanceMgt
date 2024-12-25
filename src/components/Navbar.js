import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ isAuthenticated, setIsAuthenticated }) {
  const handleLogout = () => {
    // Clear any stored auth data (e.g., token) and set authenticated state to false
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {!isAuthenticated ? (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </>
        ) : (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
