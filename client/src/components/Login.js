import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const initialFormValues = {
    username: '',
    password: ''
  }

  const [formValues, setFormValues ] = useState(initialFormValues)
  const { push } = useHistory()

  const onChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    })
  }

  const onSubmit = event => {
    event.preventDefault()

    axios.post('http://localhost:5000/api/login', formValues)
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.payload)
        push('/bubbles')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={onSubmit} >
        <label>Username:
          <input 
            type='text'
            name='username'
            value={formValues.username}
            onChange={onChange}
          />
        </label>
        <label>Password:
          <input 
            type='password'
            name='password'
            value={formValues.password}
            onChange={onChange}
          />
        </label>
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
