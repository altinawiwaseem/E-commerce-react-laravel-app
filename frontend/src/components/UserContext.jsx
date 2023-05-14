import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState(localStorage.getItem("user"));

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUserAuth(true);
    }
  }, []);

  return (
    <UserContext.Provider value={{ userAuth, setUserAuth }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
