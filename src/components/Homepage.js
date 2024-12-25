import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-container">
      <h1>Welcome to Finance Management</h1>
      <p>Manage your finances easily with our platform.</p>
      <p>Track your expenses, set budgets, and more!</p>
      <div className="home-buttons">
        <Link to="/login">
          <button className="home-btn">Login</button>
        </Link>
        <Link to="/signup">
          <button className="home-btn">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
