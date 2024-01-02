import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

function Auth() {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  const handleAdminLogin = () => {
    setIsAdmin(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsAdmin(false);
  };

  return (
    <div className="Auth">
      {user ? (
        <div>
          <h1>Welcome, {user.username}!</h1>
          <button onClick={handleLogout}>Logout</button>
          {isAdmin && (
            <div>
              <h2>Admin Dashboard</h2>
              {/* Add admin-specific content here */}
            </div>
          )}
        </div>
      ) : (
        <div>
          <Login onLogin={handleLogin} onAdminLogin={handleAdminLogin} />
          <Register />
        </div>
      )}
    </div>
  );
}

export default Auth;
