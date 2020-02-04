import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext'
import './LearningRoute.css'

class LearningRoute extends Component {
  static contextType = UserContext;
  render() {

    const words = this.context.words.map((word, idx) => (
      <ul className='wordContainer' key={idx}>
          <li className="currentWord">{word.original}</li>
          <li className="wordCorrect_count">{word.correct_count}</li>
          <li className="wordIncorrect_count">{word.incorrect_count}</li>
      </ul>
    ))

    return (
      <section className="learnSec">
        <h2>Language Practice</h2>
        <h4 className="learn_display">{words[0]}</h4>
      </section>
    );
  }
}

export default LearningRoute
