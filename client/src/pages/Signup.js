
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { CREATE_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function Signup(props){
    // state
    const [formState, setFormState] = useState({ username: '', password: '', rePassword: '' });
    const [createUser] = useMutation(CREATE_USER);
    //error
    const [errorMessage, setErrorMessage] = useState('');
    // form handler
    const handleFormSubmit = async (event) => {
        // prevents form sumbitting to itself
        event.preventDefault();
        // check if password and repassword are the same
        if(formState.password !== formState.rePassword){
            setErrorMessage('Error: Passwords are NOT matching');
        } else {
            setErrorMessage('');
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
            <form onSubmit={handleFormSubmit} className='form'>
                <div className='form-item username form-group row'>
                    <label htmlFor='username'>Username:</label>
                    <input
                    placeholder='username'
                    name='username'
                    type='text'
                    id='username'
                    onChange={handleChange}
                    />
                </div>
                <br/>
                <div className='form-item password form-group row'>
                    <label htmlFor='password'>Password:</label>
                    <input
                    placeholder='password'
                    name='password'
                    type='password'
                    id='password'
                    onChange={handleChange}
                    />
                </div>
                <br/>
                <div className='form-item password rePassword form-group row'>
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
                {errorMessage && (
                    <div>
                    <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                {/* submit button */}
                <br/>
                <button className='btn btn-primary' type='submit'>Submit</button>
            </form>

        </div>
    );
}

export default Signup;

