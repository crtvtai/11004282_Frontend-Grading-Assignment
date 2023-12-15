import React from 'react';
import "./LoginSignup.css";

const loginform = () => {
    return (
        <div className="cover">
            <h1>LOGIN</h1>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />

            <div className="login-btn">LOGIN</div>

            <p className="text">Or Login Using</p>

            <div className="alt-login">
                <div className="Facebook"></div>
                <div className="Google"></div>
            </div>
        </div>
    )
}
