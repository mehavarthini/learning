import React from 'react'
import '../CSS/container.css'

export default function Login() {
  return (
    <div className='form'>
        <span className='line'><h1>Login System</h1>
        <div>
            Email:<br></br>
            <input type='text'/>
            <br></br>
            Password:<br></br>
            <input type='password'/><br></br><br></br>
            <input type="button" value="Login" onclick="You are successfully logged in"></input>
        </div>
        </span>
    </div>
  )
}
