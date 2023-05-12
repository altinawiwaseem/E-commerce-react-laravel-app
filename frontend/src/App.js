import { Button } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>E-Commerce project</h1>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/add" element={<AddProduct />} />

        <Route path="/update" element={<UpdateProduct />} />
      </Routes>
    </div>
  );
}

export default App;
