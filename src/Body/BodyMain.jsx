import React from "react";
import '../Body/Body.css'; // Assuming you have a CSS file for styling
import farmVideo from '../assets/farm.mp4';
import Login from './Login/Login';
import Crops from "../Crops/Crops";

export default function BodyMain() {
    return (
        <>
        <div id="body-main">
            <div className="content-container">
            <div className="video-content">
                <video
                    src={farmVideo}
                    autoPlay
                    loop
                    muted
                    className="background-video"
                />
            </div>
            <div className="text-content">
                <h1>Welcome to KisaanKart</h1>
                <p>Your one-stop solution for all agricultural needs.</p>
                <div className="login-section">
                <Login />   
                </div>
            </div>
            </div>
        </div>
        </>
    )
}