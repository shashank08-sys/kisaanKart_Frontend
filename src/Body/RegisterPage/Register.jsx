import React from "react";
import { useNavigate } from "react-router-dom"; 

export default function Register() {  
    return (
        <div className="register-container">
            <h2>Register for KisaanKart</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <button type="submit">Register</button>
            </form>
            <div className="login-section">
                Already have an account? <a href="/" >Login here</a>
            </div>
        </div>
    );
}