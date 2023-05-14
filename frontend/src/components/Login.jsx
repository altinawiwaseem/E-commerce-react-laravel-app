import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const inputFields = ["email", "password"];

  const [error, setError] = useState("");

  const { userAuth, setUserAuth, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (userAuth) {
      navigate("/add");
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email: formData.get("email"),
        password: formData.get("password"),
      });
      if (response.status) {
        localStorage.setItem("user", JSON.stringify(response.data.data));
        setUser(response.data.data);
        setUserAuth(true);
        navigate("/add");
      }
    } catch (error) {
      setError(error.response.data.error);
      console.log(error.response.data.error);
    }
  };

  return (
    <div>
      {" "}
      <>
        <p>{error}</p>
        <form onSubmit={handleLogin}>
          <h1 className="m-4"> Register Page</h1>
          <div className="col-sm-6 offset-sm-3 d-grid gap-3">
            {inputFields.map((input, i) => (
              <input
                key={i}
                id={i}
                required
                type={input}
                name={input}
                placeholder={input.charAt(0).toUpperCase() + input.slice(1)}
                className="form-control"
              />
            ))}
            <p>
              Create an account? <a href="register">Register</a>
            </p>

            <button className="btn btn-primary col-3 m-auto ">Log In</button>
          </div>
        </form>
      </>
    </div>
  );
};

export default Login;
