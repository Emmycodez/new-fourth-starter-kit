"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the UserContext
const UserContext = createContext(null);

// Custom hook to access the user context
export const useUser = () => useContext(UserContext);

// UserProvider component to wrap the app and provide user data
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // Fetch or initialize user data here
    // For now, we'll hardcode the user data for demonstration purposes
    const fetchUser = async () => {
      const userData = { connectedWhatsapp:true }; // Set initial status here
      setUser(userData);
      setLoading(false);
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{user, loading}}>
      {children}
    </UserContext.Provider>
  );
};
