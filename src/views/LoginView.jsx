import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

function LoginView() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/");
    }

    return (
            <div>
                <h1>Login</h1>
                <form onSubmit={(e) => { e.preventDefault(); navigate("/"); } }>
                    <div>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required />
                    </div>
                    <div>
                        <label htmlFor="password">
                            Password
                        </label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required />
                    </div>
                    <button type="submit">
                        Login
                    </button>
                </form>
                <p> Don't have an account? <span onClick={() => navigate("/register")}>
                    Register here
                </span>
                </p>
            </div>
    );
}

export default LoginView;