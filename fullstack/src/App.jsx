import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Cart from "./Cart";
import Contact from "./Contact";
import Checkout from "./Checkout";

function App() {

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find(item => item.id === product.id);

      if (existing) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, qty: 1 }];
      }
    });
  };


  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.filter(item => item.id !== id)
    );
  };

  const updateQty = (id, amount) => {
  setCart((prevCart) =>
    prevCart
      .map((item) =>
        item.id === id
          ? { ...item, qty: item.qty + amount }
          : item
      )
      .filter((item) => item.qty > 0) // 0 hone pe remove
  );
};

  return (
    <>

      <nav className="navbar">
        <h2 className="logo">
          <Link to="/">ShopEasy</Link>
        </h2>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Cart ({cart.length})</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>


      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
        <Route path="/cart"element={<Cart cart={cart}removeFromCart={removeFromCart}updateQty={updateQty}/>}/>
      </Routes>
    </>
  );
}

export default App;