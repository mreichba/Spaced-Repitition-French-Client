import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import Logo from '../../Logo/spaced-rep-logo.png'
import './LoginRoute.css'

class LoginRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    return (
      <section className='loginSec'>
        <img src={Logo} className="spaced-logo"alt="spaced-rep-logo"/>
      <section className='loginSec' aria-live='polite'>
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </section>
    );
  }
}

export default LoginRoute
