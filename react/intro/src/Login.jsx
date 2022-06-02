import React from 'react';

// input: obj ()
// output: JSX

const Login = ({ onLogin }) => {
  // console.log(props)
  return <button className="login btn" onClick={onLogin}>Login</button>
}

export default Login