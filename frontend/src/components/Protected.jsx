import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const Protected = (props) => {
  const Cmp = props.Cmp;

  const navigate = useNavigate();
  const { userAuth } = useContext(UserContext);
  console.log("userAuthProtected", userAuth);

  useEffect(() => {
    if (!userAuth) {
      navigate("/register");
    }
  }, []);

  return (
    <div>
      <Cmp />
    </div>
  );
};

export default Protected;
