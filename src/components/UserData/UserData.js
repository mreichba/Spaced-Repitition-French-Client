import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import './UserData.css'

export default class UserData extends Component {
    static contextType = UserContext

    render() {
        const words = this.context.words.map((word, idx) => (
            <ul className='wordUList' key={idx}>
                <li className="wordName">{word.original}</li>
                <li className="wordCorrect">{word.correct_count}</li>
                <li className="wordIncorrect">{word.incorrect_count}</li>
            </ul>
        ))
        return (
            <div className="userData">
                <h3 className="userData_lang">You are learning: {this.context.language}</h3>
                <div className="wordBox">
                    <h4 className="wordHeader">Words</h4>
                    <h4 className="wordScores">Correct</h4>
                    <h4 className="wordScores">Incorrect</h4>
                    <div className="wordListBox">
                        {words}
                    </div>
                </div>
                <p className="userData_score">Total score for correct answers: {this.context.totalScore}</p>
                <button className="startLearning_btn"><Link className="userData_link" to="/learn">Start Learning</Link></button>
            </div>
        )
    }
}