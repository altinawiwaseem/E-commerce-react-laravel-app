import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const Register = () => {
  const inputFields = ["name", "email", "password"];
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { setUserAuth, userAuth, setUser } = useContext(UserContext);

  useEffect(() => {
    if (userAuth) {
      navigate("/add");
    }
  }, []);

  const handleRegister = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register", {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
      });

      if (response.status) {
        setUser(response.data.data);
        localStorage.setItem("user", JSON.stringify(response.data.data));
        setUserAuth(true);
        navigate("/add");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <p>{error}</p>
      <form onSubmit={handleRegister}>
        <h1 className="m-4"> Register Page</h1>
        <div className="col-sm-6 offset-sm-3 d-grid gap-3">
          {inputFields.map((input, i) => (
            <input
              key={i}
              required
              id={i}
              type={input}
              name={input}
              placeholder={input.charAt(0).toUpperCase() + input.slice(1)}
              className="form-control"
            />
          ))}
          <p>
            Have an account? <a href="login">Login</a>
          </p>

          <button className="btn btn-primary col-3 m-auto ">Sign Up</button>
        </div>
      </form>
    </>
  );
};

export default Register;
