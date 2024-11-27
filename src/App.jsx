// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/home';
import Cart from './pages/Cart/cart';
import Login from './pages/Login/login';
import Register from './pages/Register/register';
import Products from './pages/Products/products';


function App() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/payment" element={<Payment />} />
        </Routes>
      </Router>
    )
  }
  

export default App;