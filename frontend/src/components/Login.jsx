import React, { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { userAuth } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (userAuth) {
      navigate("/add");
    }
  }, []);

  return <div>Login</div>;
};

export default Login;
