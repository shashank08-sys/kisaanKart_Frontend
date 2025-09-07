import React, { useEffect } from 'react';
import { useCart } from './CartContext';
import './CartPage.css';

export default function CartPage() {
  const { cartItems, setCartItems, removeFromCart } = useCart();

  useEffect(() => {
    async function fetchCart() {
      try {
        const token = localStorage.getItem("token");
        console.log("Cartcontext is mounted");
        console.log("token is " + token);
        const res = await fetch("http://localhost:8080/getCart", {
          method: "GET",
          headers: { 
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
        });
        if (res.ok) {
          const data = await res.json();
          setCartItems(data); 
        }
      } catch (err) {
        console.error("Error fetching cart:", err);
      }
    }
    fetchCart();
  }, [setCartItems]);

  return (
    <div>
      <h1>Your Bag</h1>
      {cartItems.length === 0 ? (
        <p>No items in bag.</p>
      ) : (
        cartItems.map((data) => (
          <div key={data.id} className="flex justify-between p-2 border-b">
            <img src={data.imagesURL} alt={data.crop} className="cart-products" />
            <span>{data.crop} - Qty: {data.quantity}</span>
            <button onClick={() => removeFromCart(data.crop)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}
