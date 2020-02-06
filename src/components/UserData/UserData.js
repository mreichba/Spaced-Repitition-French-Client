import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import './UserData.css'

export default class UserData extends Component {
    static contextType = UserContext

    render() {
        const words = this.context.words.map((word, idx) => (
            <ul className='wordUList' key={idx}>
                <li className="wordName">
                    <h4>{word.original}</h4>
                    <div>correct answer count: {word.correct_count}</div>
                    <div>incorrect answer count: {word.incorrect_count}</div>
                </li>
            </ul>
        ))

        return (
            <div className="userData">
                <h2 className="userData_lang">Now Learning: {this.context.language}</h2>
                <div className="wordBox">
                    <p className="userData_score">Total correct answers: {this.context.totalScore}</p>
                    <div className="wordListBox">
                        <div className='head'>
                            <h3 className="wordHeader">Words to practice</h3>

                        </div>
                        <span className='learningWords'>{words}</span>
                    </div>
                    <button className="startLearning_btn"><Link className="userData_link" to="/learn" role='button'>Start practicing</Link></button>
                </div>
            </div>
        )
    }
}