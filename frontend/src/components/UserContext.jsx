import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState(localStorage.getItem("user"));

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUserAuth(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUserAuth(false);
    navigate("/login");
  };

  return (
    <UserContext.Provider value={{ userAuth, setUserAuth, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
