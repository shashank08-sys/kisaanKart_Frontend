    import React, { createContext, useState, useContext, useEffect } from "react";

    const CartContext = createContext();

    export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);


    // Add to cart
    const addToCart = async (item) => {
        try {
        const token = localStorage.getItem("token");
        console.log("This is cart item:", item);
        console.log("This is token : " + "Bearer " + token);
        const response = await fetch("http://localhost:8080/addToCart", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(item),
        });
        
        if (response.ok) {
            const updatedCart = await response.json(); // let backend return full cart
            setCartItems(updatedCart);
        }
        console.log("Add to cart response:", response);
        } catch (err) {
        console.error("Error adding to cart:", err);
        }
    };

    // Remove from cart
    const removeFromCart = async (itemId) => {
        try {
        const token = localStorage.getItem("token");
        console.log("token is " + token);
        console.log("http://localhost:8080/removeFromCart/" + itemId)
        const response = await fetch(`http://localhost:8080/removeFromCart/${itemId}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` },
        });

        if (response.ok) {
            const updatedCart = await response.json(); // backend returns updated cart
            setCartItems(updatedCart);
        }
        } catch (err) {
        console.error("Error removing from cart:", err);
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, addToCart, removeFromCart }}>
        {children}
        </CartContext.Provider>
    );
    }

    export function useCart() {
    return useContext(CartContext);
    }
