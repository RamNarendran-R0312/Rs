import React, { useState } from "react";
import "./styles.css";

const products = [
  { id: 1, title: "E-Book 1", price: 9.99 },
  { id: 2, title: "E-Book 2", price: 12.99 },
  { id: 3, title: "E-Book 3", price: 7.99 },
];

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const checkout = () => {
    alert("Redirecting to payment gateway...");
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="container">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">Digital Store</div>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Signup</a></li>
          </ul>
        </div>
      </nav>
      
      <h1>Digital Downloads Store</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">${product.price}</p>
            <button className="add-to-cart" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      
      <div className="cart-section">
        <h2 className="cart-title">Cart</h2>
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <ul className="cart-list">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                {item.title} - ${item.price}
              </li>
            ))}
          </ul>
        )}
        <h3>Total: ${totalAmount}</h3>
        <button className="checkout-btn" onClick={checkout}>
          Checkout
        </button>
      </div>
    </div>
  );
}
