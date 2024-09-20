import React, { useState } from 'react';
import './Login.css';
import { MdOutlineVisibilityOff, MdOutlineVisibility } from 'react-icons/md';
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase'; 


function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
          console.log(user, 'Logged in successfully');
          // Redirect to the task creation page
          navigate('/create-task');
        } catch (error) {
          console.error('Error logging in:', error);
          alert(error.message);
        }
      };
      
      // Google login
      const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
          const result = await signInWithPopup(auth, provider);
          console.log('Google sign-in success:', result.user);
          // Redirect to the task creation page after successful login
          navigate('/create-task');
        } catch (error) {
          console.error('Error logging in with Google:', error);
          alert(error.message);
        }
      };
      

    return (
        <div className='wrapper'>
            <div className='main-form'>
                <header className='header'>
                    <img src="./taskfy.png" alt="Taskfy Logo" />
                    <h2>Login</h2>
                </header>
                <form className='login-form' onSubmit={handleLogin}>
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
                    <button type='submit'>Login</button>
                </form>

                <div className='other'>
                    <div className='other1'><hr /></div>
                    <p>OR</p>
                    <div className='other2'><hr /></div>
                </div>

                <button className='google-login' onClick={handleGoogleLogin}>
                    <img src="./SVG.png" alt="Google Icon" />
                    Login with Google
                </button>

                <div className='anchor'>
                    <a href='#'>Log in to another Account</a>
                    <Link to="/signup">Need a signup link</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
