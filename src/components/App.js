// src/components/App.js
import React, { useState, useEffect } from "react";
import Header from "./Header";
import QueryForm from "./QueryForm";
import Reports from "./Reports";
import Dashboard from "./Dashboard";
import Login from "./Login";
import "./App.css"; // Ensure the CSS file is correctly imported
import { auth, db } from "../services/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // Update the user's status to "online" when they are logged in
        await setDoc(
          doc(db, "users", currentUser.uid),
          {
            email: currentUser.email,
            status: "online",
            lastLogin: serverTimestamp(),
          },
          { merge: true }
        );
      }
    });

    return () => {
      if (user) {
        // Set the user's status to "offline" when they log out
        setDoc(
          doc(db, "users", user.uid),
          {
            status: "offline",
            lastLogin: serverTimestamp(),
          },
          { merge: true }
        );
      }
      unsubscribe();
    };
  }, [user]);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
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
