import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const Protected = (props) => {
  const Cmp = props.Cmp;

  const navigate = useNavigate();
  const { userAuth } = useContext(UserContext);
  useEffect(() => {
    if (userAuth) {
      navigate("/add");
    } else {
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
