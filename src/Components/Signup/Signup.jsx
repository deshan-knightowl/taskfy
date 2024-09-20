import React, { useState } from 'react';
import './Signup.css';
import { MdOutlineVisibilityOff, MdOutlineVisibility } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Signup() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className='wrapper'>
            <div className='main-form'>
            <header className='header'>
                <img src="./taskfy.png" alt="vvvvv" />
                <h2>SignUp</h2>
            </header>
            <form className='signup-form'>
            <div className='input-group'>
                    <label>Name</label>
                    <input type='text' />
                    </div>
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
                    <button type='submit'>SignUp</button>
            </form>

            <div className='other'>
                <div className='other1'>
                    <hr/>
                </div>
                <p>OR</p> 
                <div className='other2'>
                    <hr/>
                </div>
                </div>

                <button className='google-signup'>
                    <img src="./SVG.png" alt="Google Icon" />
                    Login with Google
                </button>

                <div className='anchor'>
                    <a href='#'>Log in to another Account</a>
                    <Link to="/login">Need a login link</Link>
                </div>
            </div>
            </div>
    );
}

export default Signup;
