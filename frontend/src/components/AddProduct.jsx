import axios from "axios";
import { useState } from "react";

const AddProduct = () => {
  const inputFields = ["name", "file", "description", "price"];

  const handleAddProduct = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/addproduct",
        formData // pass formData directly as request body
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleAddProduct}>
        <h1 className="m-4"> Register Page</h1>
        <div className="col-sm-6 offset-sm-3 d-grid gap-3">
          {inputFields.map((input, i) => (
            <input
              key={i}
              id={i}
              type={input}
              name={input}
              placeholder={input.charAt(0).toUpperCase() + input.slice(1)}
              className="form-control"
            />
          ))}

          <button className="btn btn-primary col-3 m-auto ">Add Product</button>
        </div>
      </form>
    </>
  );
};

export default AddProduct;
