// src/components/UserInfo.js
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const UserInfo = () => {
  const { user, logout } = useContext(AuthContext);

  return user ? (
    <div>
      <h2>Welcome, {user.email}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>
      <h2>Please log in</h2>
    </div>
  );
};

export default UserInfo;
