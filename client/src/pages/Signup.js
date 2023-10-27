import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { CREATE_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function Signup() {
  // Updated state initialization
  const [formState, setFormState] = useState({ 
    username: '', 
    password: '', 
    rePassword: '', 
    firstName: '', 
    lastName: '' 
  });
  
  const [createUser] = useMutation(CREATE_USER);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    if (formState.password !== formState.rePassword) {
      setErrorMessage('Error: Passwords do not match');
    } else {
      try {
        const { data } = await createUser({
          variables: {
            username: formState.username,
            password: formState.password,
            firstName: formState.firstName,
            lastName: formState.lastName
          },
        });
        
        if (data.createUser.token) {
          Auth.login(data.createUser.token);
        }
      } catch (error) {
        console.error(error);
        setErrorMessage('Error: Unable to create user');
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <Link to="/login">← Go to Login</Link>
      
      <h2>Signup</h2>

      <form onSubmit={handleFormSubmit} className="form">
        <div className="form-item firstName form-group row">
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First Name"
            name="firstName"
            type="text"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <br />

        <div className="form-item lastName form-group row">
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last Name"
            name="lastName"
            type="text"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <br />

        <div className="form-item username form-group row">
          <label htmlFor="username">Username:</label>
          <input
            placeholder="username"
            name="username"
            type="text"
            id="username"
            onChange={handleChange}
          />
        </div>
        <br />

        <div className="form-item password form-group row">
          <label htmlFor="password">Password:</label>
          <input
            placeholder="password"
            name="password"
            type="password"
            id="password"
            onChange={handleChange}
          />
        </div>
        <br />

        <div className="form-item password rePassword form-group row">
          <label htmlFor="rePassword">Re-enter Password:</label>
          <input
            placeholder="password"
            name="rePassword"
            type="password"
            id="rePassword"
            onChange={handleChange}
          />
        </div>

        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}

        <br />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;