import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import './UserData.css'

export default class UserData extends Component {
    static contextType = UserContext

    render() {
        const words = this.context.words.map((word, idx) => (
            <li className='contact' key={idx}>
                <span className='bold'></span>{word.original} | {word.correct_count} | {word.incorrect_count}
            </li>
        ))
        return (
            <div className="userData">
                <h3 className="userData_lang">You are learning: {this.context.language}</h3>
                <div className="wordBox">
                    <h4>Words to Practice</h4>
                    <h5>Word | Correct | Incorrect</h5>
                    {words}
                </div>
                <p className="userData_score">Total score for correct answers: {this.context.totalScore}</p>
                <button className="startLearning_btn"><Link className="userData_link" to="/learn">Start Learning</Link></button>
            </div>
        )
    }
}