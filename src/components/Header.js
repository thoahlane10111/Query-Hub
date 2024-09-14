// src/components/Header.js
import React from "react";

function Header({ onToggleTheme, onSignOut, user }) {
  return (
    <header>
      <h1>Query Log System</h1>
      <button onClick={onToggleTheme}>{user ? "Switch Theme" : "Theme"}</button>
      {user ? (
        <div>
          <p>Welcome, {user.email}</p> {/* Display logged-in user's email */}
          <button onClick={onSignOut}>Sign Out</button>
        </div>
      ) : (
        <p>Please log in to access the system</p>
      )}
    </header>
  );
}

export default Header;
