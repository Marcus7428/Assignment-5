import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Header.css";

function Header() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="navBar">
                <h1 className="navTitle">WebFlicks</h1>
                <button className="moviesLink" onClick={() => navigate("/movies")}>Movies View</button>
                <button className="LoginButton" onClick={() => navigate("/login")}>Login</button>
                <button className="RegisterButton" onClick={() => navigate("/register")}>Register</button>
            </div>
        </div>
    );
}

export default Header;