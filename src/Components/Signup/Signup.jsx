import React, { useState } from 'react';
import './Signup.css';
import { MdOutlineVisibilityOff, MdOutlineVisibility } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase'; // Import Firebase configuration

function Signup() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    // Function to handle email/password signup
    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            // Create the user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Update the user's profile with the provided name
            await updateProfile(auth.currentUser, {
                displayName: name,
            });

            console.log('Signed up successfully:', user);
            alert('Signed up successfully!');

            // Optionally, redirect the user to login or another page
        } catch (error) {
            console.error('Error signing up:', error);
            alert(error.message);
        }
    };

    // Function to handle Google Signup
    const handleGoogleSignup = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            console.log('Google sign-up success:', result.user);
            // Optionally, redirect the user after successful signup
        } catch (error) {
            console.error('Error signing up with Google:', error);
            alert(error.message);
        }
    };

    return (
        <div className='wrapper'>
            <div className='main-form'>
                <header className='header'>
                    <img src="./taskfy.png" alt="Taskfy Logo" />
                    <h2>SignUp</h2>
                </header>

                {/* Signup form */}
                <form className='signup-form' onSubmit={handleSignup}>
                    <div className='input-group'>
                        <label>Name</label>
                        <input
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className='input-group'>
                        <label>Email</label>
                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className='input-group'>
                        <label>Password</label>
                        <div className='password-wrapper'>
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <span className='toggle-password' onClick={togglePasswordVisibility}>
                                {passwordVisible ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />}
                            </span>
                        </div>
                    </div>

                    <button type='submit'>Sign Up</button>
                </form>

                <div className='other'>
                    <div className='other1'><hr /></div>
                    <p>OR</p>
                    <div className='other2'><hr /></div>
                </div>

                {/* Google Signup */}
                <button className='google-signup' onClick={handleGoogleSignup}>
                    <img src="./SVG.png" alt="Google Icon" />
                    Sign Up with Google
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
