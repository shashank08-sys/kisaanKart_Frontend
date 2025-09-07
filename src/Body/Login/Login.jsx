import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'; // Assuming you have a CSS file for styling

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    async function login(event) {
        event.preventDefault();
        // Handle login logic here
        console.log("Username:", username);
        console.log("Password:", password);    
        try{
            const response = await fetch("http://localhost:8080/customer/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ 
                    "name" : username, 
                    "password" : password })
            });
            if(!response.ok) {
                console.log("Login failed");
                alert("Login failed. Please check your credentials.");
                return
            }
            const token = await response.text();
            console.log("Login successful, token:", token);
            localStorage.setItem("token", token);
            navigate('/home')
        }catch (error) {
            console.error("Error during login:", error);
            alert("An error occurred during login. Please try again."); 
        }
    }
    return (
        <div className="login-container">
            <h2>Login to KisaanKart</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required onChange={(e) =>setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit" onClick={login}>Login</button>
            </form>
            <div className="register-section">
                New Customer? <a href="/register" onClick={useNavigate('/register')}>Register here</a>
            </div>
        </div>
    );
}