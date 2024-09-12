import React, { useState, useEffect } from "react";
import Header from "./Header";
import QueryForm from "./QueryForm";
import Reports from "./Reports";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { auth } from "../services/firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      {user ? (
        <>
          <Header />
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
