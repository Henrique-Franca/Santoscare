import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Implemente a lógica de autenticação aqui
        console.log('Username:', username);
        console.log('Password:', password);
    };

    const navigate = useNavigate();
    const goToHomePage = () => {
        navigate('home');
    }

    return (
        <div className="container" >

            <div className="login-form-wrapper">
                <h2>Login</h2>
                <div className="login-form">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <br />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <button onClick={goToHomePage}>Login</button>
                </div>
            </div>

        </div>
    );
};

export default LoginForm;

