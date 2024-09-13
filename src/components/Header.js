import React from "react";

function Header({ onToggleTheme, onSignOut }) {
  return (
    <header>
      <button onClick={onToggleTheme}>Toggle Theme</button>
      <button onClick={onSignOut}>Sign Out</button>
    </header>
  );
}

export default Header;
