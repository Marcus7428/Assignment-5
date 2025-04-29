import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Header.css";

function Header() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        console.log("Search feature has not been implemented yet.");
    }

    return (
        <div>
            <div className="navBar">
                <h1 className="navTitle">WebFlicks</h1>
                <input
                    type="text"
                    className="searchBar"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="searchButton" onClick={handleSearch}>Search</button>
                <button className="moviesLink" onClick={() => navigate("/movies")}>Movies View</button>
                <button className="LoginButton" onClick={() => navigate("/login")}>Login</button>
                <button className="RegisterButton" onClick={() => navigate("/register")}>Register</button>
            </div>
        </div>
    );
}

export default Header;