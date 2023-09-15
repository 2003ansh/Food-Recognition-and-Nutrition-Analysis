import React from 'react';
import { Button } from 'react-bootstrap';

const LogoutButton = ({ setLoginStatus }) => {
  const handleLogout = () => {
    // Clear the authentication token (implement this function)
    clearToken();
    
    // Update the login status to false
    setLoginStatus(false);
  };

  return (
    <Button variant="danger" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
