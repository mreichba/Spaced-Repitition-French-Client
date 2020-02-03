import React, { Component } from 'react'
import './DashboardRoute.css'
class DashboardRoute extends Component {
  render() {
    return (
      <section className='dash'>
        <h2>Dashboard</h2>]
        <button>Start Practicing</button>
        <h3>Words to Practice</h3>
        <p>WE'LL DO A GET REQUEST HERE FOR WORDS IN DB ALONG WITH CORRECT AND INCORRECT GUESSES</p>
      </section>
    );
  }
}

export default DashboardRoute
