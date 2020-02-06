import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import Logo from '../../Logo/spaced-rep-logo.png'
import './RegistrationRoute.css'

class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => { },
    },
  }

  handleRegistrationSuccess = () => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <section className='reg' aria-live='polite'>
        <img src={Logo} className="spaced-logo" alt="spaced-rep-logo" />
        <p>
          Want to learn a new language? Use our spaced repetition app to help with that!<br/>
          This app uses spaced repetition to display a choice word from your list <br/>
          and render the next word based upon a correct or incorrect attempt to translate.
        </p>
        <h2>Sign up</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </section>
    );
  }
}

export default RegistrationRoute
