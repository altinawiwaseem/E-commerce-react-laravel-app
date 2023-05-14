import React, { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUserAuth(true);
    } else {
      navigate("/register");
    }
  }, []);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const isAddPage = location.pathname === "/add";

    if (user && isAddPage) {
      navigate("/add");
    } else if (!user && location.pathname !== "/register") {
      navigate("/register");
    }
  }, []);
  return (
    <UserContext.Provider value={{ userAuth, setUserAuth }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
