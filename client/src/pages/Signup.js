import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { CREATE_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function Signup() {
  // State
  const [formState, setFormState] = useState({ username: '', password: '', rePassword: '' });
  const [createUser] = useMutation(CREATE_USER);
  // Error state
  const [errorMessage, setErrorMessage] = useState('');

  // Form handler
  const handleFormSubmit = async (event) => {
    // Prevent the form from submitting to itself
    event.preventDefault();

    // Check if password and rePassword are the same
    if (formState.password !== formState.rePassword) {
      setErrorMessage('Error: Passwords do not match');
    } else {
      try {
        // Create user by calling the createUser mutation function
        const { data } = await createUser({
          variables: {
            username: formState.username,
            password: formState.password,
          },
        });

        // Check if the mutation was successful and a token was received
        if (data.addUser.token) {
          // Log in the user using the received token
          Auth.login(data.addUser.token);
        }
      } catch (error) {
        console.error(error);
        setErrorMessage('Error: Unable to create user');
      }
    }
  };

  // Handle changes in the form inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container">
      {/* Redirect to login */}
      <Link to="/login">← Go to Login</Link>

      <h2>Signup</h2>
      {/* Signup Form */}
      <form onSubmit={handleFormSubmit} className="form">
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
        {/* Display error message if there is one */}
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        {/* Submit button */}
        <br />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
