import React from 'react';
import { useForm } from 'react-hook-form';
import './Login.css';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (authenticateUser(username, password)) {
            navigate('/region');
        } else {
            alert('Login failed. Please try again.');
        }
    };

    const authenticateUser = (username, password) => {
        return username === 'user' && password === 'password';
    };

    return (
        <div className="login-container">
            <div className="login-box mx-auto">
                <h1>Login</h1>
                <form onSubmit={handleSubmit(handleLogin)} className="login-form rounded">
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            type="text"
                            id="username"
                            {...register('username', { required: true })}
                            className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        {errors.username?.type === 'required' && <p className="error-text">Username required</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            {...register('password', { required: true })}
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password?.type === 'required' && <p className="error-text">Password required</p>}
                    </div>
                    <div className="button-container">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
