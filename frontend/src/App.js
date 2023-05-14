import { Button } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import { Routes, Route, Navigate } from "react-router-dom";

import Protected from "./components/Protected";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/add" element={<Protected Cmp={AddProduct} />} />

        <Route path="/update" element={<Protected Cmp={UpdateProduct} />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
