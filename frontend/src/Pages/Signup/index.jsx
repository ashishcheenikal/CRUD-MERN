import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";

function Signup() {
  const [value, setValue] = useState('')
  const navigate = useNavigate();
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/')
  }
  return (
    <>
      <FormContainer>
        <form action='' onSubmit={(e) => {
          handleSubmit(e)
        }}>
          <div className="brand">
            Times World
          </div>
          <input
            type='text'
            name='name'
            placeholder='Name'
            onChange={(e) => { handleChange(e) }}
          />
          <input
            type="text"
            placeholder='Email Address '
            name='email'
            onChange={(e) => { handleChange(e) }} />
          <input
            type='text'
            name='phoneNumber'
            placeholder='Phone Number'
            onChange={(e) => { handleChange(e) }}
          />
          <input
            type="password"
            placeholder='Password'
            name='password'
            onChange={handleChange} />
          <button type='submit'>Sign In</button>
          <span>
            Already have an account ? <Link to="/login">Login.</Link>
          </span>
        </form>
      </FormContainer>
    </>
  )
}
const FormContainer = styled.div`
height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #32a869;
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #32a869;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }
  button {
    padding: 1rem;
    border: 0.1rem solid #32a869;
    border-radius: 0.4rem;
    color: blac;
    width: 114%;
    font-size: 1rem;
  :hover{
    background-color:#9fc9b3
  }
  }
`;

export default Signup