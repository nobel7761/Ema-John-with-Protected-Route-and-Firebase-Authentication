import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const [user] = useAuthState(auth)

    const handleSubmit = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError("Password Did Not Matched!!!")
        }
        if (password === confirmPassword) {
            if (password.length < 6) {
                setError("Password Length Must Be 6");
            }
            else {
                createUserWithEmailAndPassword(email, password);
                if (user) {
                    navigate('/shop')
                }
            }

        }
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={(event) => setEmail(event.target.value)} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={(event) => setPassword(event.target.value)} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={(event) => setConfirmPassword(event.target.value)} type="password" name="confirm-password" id="" required />
                    </div>

                    {
                        <p style={{ color: 'red' }}>{error}</p>
                    }

                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p>
                    Already have an account? <Link className='form-link' to="/login">Please Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;