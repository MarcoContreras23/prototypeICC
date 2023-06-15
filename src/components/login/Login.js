import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);

    const handleLogin = () => {
        // Aquí puedes realizar la lógica de autenticación y verificar el rol del usuario
        // Dependiendo del rol, llamas a la función onLogin con el rol correspondiente
        // Por ejemplo:
        if (username === 'contratacion' && password === '123') {
            onLogin('user');
        } else if (username === 'coordinador' && password === '123') {
            onLogin('admin');
        } else if (username === 'tarifa' && password === '123') {
            onLogin('user2');
        }
        else {
            // Mostrar la notificación de error
            setShowError(true);
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {showError && <div className="error-notification">Usuario o contraseña incorrectos</div>}
            <form>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="button" onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
};

export default Login;
