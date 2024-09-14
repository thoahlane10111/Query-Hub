// src/components/App.js
import React, { useState, useEffect } from "react";
import Header from "./Header";
import QueryForm from "./QueryForm";
import Reports from "./Reports";
import Dashboard from "./Dashboard";
import Login from "./Login";
import "./App.css"; // Ensure the CSS file is correctly imported
import { auth } from "../services/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Signed out successfully
        setUser(null); // Clear the user state when signed out
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Header
        onToggleTheme={toggleTheme}
        onSignOut={handleSignOut}
        user={user} // Pass the user information to the Header component
      />
      {user ? (
        <>
          <Dashboard />
          <QueryForm />
          <Reports />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;

