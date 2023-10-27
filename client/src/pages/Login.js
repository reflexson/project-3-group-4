import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props){
    // state
    const [formState, setFormState] = useState({ username: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);

    // form handler
    const handleFormSubmit = async (event) => {
        //prevents form sumbitting to itself
        event.preventDefault();

        try {
          // finds user based on current formState info
          const mutationResponse = await login({
            variables: {username: formState.username, password: formState.password },
          });
          // make token for session
          const token = mutationResponse.data.loginUser.token;
          // validate token
          Auth.login(token);
        } catch (error) {
          console.log(error);
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
            <Link to="/signup">← Go to Signup</Link>
            
            <h2>Login</h2>
            {/* Form */}
            <form onSubmit={handleFormSubmit}>
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
                {/* If error, show error message*/}
                {error ? (
                    <div>
                        <p className='error-text'>Error, invalid credentials</p>
                    </div>
                ) : null}
                {/* submit button */}
                <br/>
                <button className='btn btn-primary' type='submit'>Submit</button>
            </form>

        </div>
    );
}

export default Login;
