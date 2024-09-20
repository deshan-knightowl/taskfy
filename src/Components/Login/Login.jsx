import React, { useState } from 'react';
import './Login.css';
import { MdOutlineVisibilityOff, MdOutlineVisibility } from 'react-icons/md';
import { Link } from 'react-router-dom'; // Import Link for navigation

function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className='wrapper'>
            <div className='main-form'>
            <header className='header'>
                <img src="./taskfy.png" alt="Taskfy Logo" />
                <h2>Login</h2>
            </header>
            <form className='login-form'>
                <div className='input-group'>
                    <label>Email</label>
                    <input type='email' />
                </div>
                <div className='input-group'>
                    <label>Password</label>
                    <div className='password-wrapper'>
                        <input type={passwordVisible ? 'text' : 'password'} />
                        <span className='toggle-password' onClick={togglePasswordVisibility}>
                            {passwordVisible ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />}
                        </span>
                    </div>
                </div>
                <button type='submit'>Login</button>
            </form>

            <div className='other'>
                <div className='other1'>
                    <hr />
                </div>
                <p>OR</p>
                <div className='other2'>
                    <hr />
                </div>
            </div>

            <button className='google-login'>
                <img src="./SVG.png" alt="Google Icon" />
                Login with Google
            </button>

            <div className='anchor'>
                <a href='#'>Log in to another Account</a>
                {/* Use Link for internal navigation */}
                <Link to="/signup">Need a signup link</Link>
            </div>
            </div>
        </div>
    );
}

export default Login;
