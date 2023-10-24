import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { CREATE_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function Signup(props){
    // state
    const [formState, setFormState] = useState({ username: '', password: '', rePassword: '' });
    const [createUser] = useMutation(CREATE_USER);
    let notSame = null;
    // form handler
    const handleFormSubmit = async (event) => {
        // prevents form sumbitting to itself
        event.preventDefault();
        // check if password and repassword are the same
        if(formState.password !== formState.rePassword){
            notSame = 'not the same'
        } else {
            // create user
            const mutationResponse = await CREATE_USER({
                variables: {
                    username: formState.username,
                    password: formState.password,
                }
            });
            // make token for session
            const token = mutationResponse.data.addUser.token;
            // validate token
            Auth.login(token);
        }
        
    };

    // detect change in the form
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
          ...formState,
          [name]: value,
        });
    };

    // the html
    return(
        <div className="container">
            {/* Redirect to signup */}
            <Link to="/login">← Go to Login</Link>
            
            <h2>Signup</h2>
            {/* Form */}
            <form onSubmit={handleFormSubmit}>
                <div className='form-item username'>
                    <label htmlFor='username'>Username:</label>
                    <input
                    placeholder='username'
                    name='username'
                    type='text'
                    id='username'
                    onChange={handleChange}
                    />
                </div>
                <div className='form-item password'>
                    <label htmlFor='password'>Password:</label>
                    <input
                    placeholder='password'
                    name='password'
                    type='password'
                    id='password'
                    onChange={handleChange}
                    />
                </div>
                <div className='form-item password rePassword'>
                    <label htmlFor='rePassword'>Re-enter Password:</label>
                    <input
                    placeholder='password'
                    name='rePassword'
                    type='password'
                    id='rePassword'
                    onChange={handleChange}
                    />
                </div>
                {/* If error, show error message*/}
                {notSame ? (
                    <div>
                        <p className='error-text'>Error: Passwords must be matching</p>
                    </div>
                ) : null}
                {/* submit button */}
                <button className='btn' type='submit'>Submit</button>
            </form>

        </div>
    );
}

export default Signup;