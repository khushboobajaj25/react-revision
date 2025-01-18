import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider, useUser } from "./context/UserContext";
import { AuthProvider } from "./context/AuthContext";
import Home from "./components/Home";
import Login from "./components/Login";

function UserProfile() {
  const { user, setUser } = useUser();

  return (
    <UserProvider>
      <div>
        <h2>User Profile</h2>
        {user ? <p>Welcome, {user.name}!</p> : <p>No user logged in.</p>}
        <button onClick={() => setUser({ name: "John Doe" })}>Log In</button>
      </div>
    </UserProvider>
  );
}

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </Router>
      </AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
