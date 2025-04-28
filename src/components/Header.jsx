import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Header.css";

function Header() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="navBar">
                <button className="LoginButton" onClick={() => navigate("/login")}>Login</button>
                <button className="RegisterButton" onClick={() => navigate("/register")}>Register</button>
            </div>
            <div className="header">
                <h1>Welcome to Our Website</h1>
                <p>Your one-stop solution for all your needs</p>
        </div>
        </div>
    );
}

export default Header;

{/* <div class="navBar"></div>
<button class="signInButton">Sign in</button>
<button class="signUpButton">Sign up</button>
<select class="LanguageDropdown">
    <option value="English">English</option>
    <option value="French">French</option>
</select> */}