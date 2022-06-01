import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

// state(стейт - об"єкт)
// isLoginIn: boolean
// isProcessing: boolean

class Auth extends React.Component {
  render() {
    return (
      <>
        <Login></Login>
        <Logout></Logout>
        <Spinner></Spinner>
      </>
    )
  }
}

export default Auth;