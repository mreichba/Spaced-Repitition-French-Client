import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import LanguageContext from '../../contexts/LanguageContext';
import './UserData.css'

export default class UserData extends Component {
    static contextType = LanguageContext

    render() {
        return (
            <div className="userData">
                <h3 className="userData_lang">You are learning {this.context.language}</h3>
                <p className="userData_score">Total score for correct answers: {this.context.totalScore}</p>
                <button className="startLearning_btn"><Link className="userData_link" to="/learn">Start Learning</Link></button>
            </div>
        )
    }
}