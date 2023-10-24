import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { CREATE_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function Signup(props){
    // state
    const [formState, setFormState] = useState({ username: '', password: '' });
    const [createUser] = useMutation(CREATE_USER);

    // form handler
    const handleFormSubmit = async (event) => {
        // prevents form sumbitting to itself
        event.preventDefault();
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
    };

    // detect change in the form
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
          ...formState,
          [name]: value,
        });
    };
}

export default Signup;