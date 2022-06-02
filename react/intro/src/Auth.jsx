import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

// state(стейт - об"єкт)
// isLoginIn: boolean
// isProcessing: boolean

// 1. show logic by default
// 2. after logic click - show spinner for 2 seconds
// 3. hide spinner show logout
// 4. after logout - show login

class Auth extends React.Component {
  state = {
    isLoginIn: false,
    isProcessing: false,
  }

  loginHandler = () => {
    // console.log('run')
    // setState:
    // input: obj
    // output: undefined
    this.setState({
      isProcessing: true,
    })

    setTimeout(() => {
      this.setState({
        isProcessing: false,
        isLoginIn: true,
      })
    }, 2000);
  }

  logoutHandler = () => {
    this.setState({
      isLoginIn: false,
    })
  }

  render() {
    const { isProcessing, isLoginIn } = this.state;
    // console.log('render is called')
    if(isProcessing) {
      return <Spinner></Spinner>
    }
    if(isLoginIn) {
      return <Logout onLogout={this.logoutHandler}></Logout>
    }
    return <Login onLogin={this.loginHandler}></Login>
  }
}

export default Auth;