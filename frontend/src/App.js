import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home.js";
import BuyCoupon from "./pages/BuyCoupon";
import Cart from './components/Cart.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buycoupon" element={<BuyCoupon />} />
        <Route path="/cart" element={<Cart />} />
      </Routes> 
    </Router>
  );
}
 
export default App;
