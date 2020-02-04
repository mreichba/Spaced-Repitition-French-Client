import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import './UserData.css'

export default class UserData extends Component {
    static contextType = UserContext

    render() {
        // const words = this.context.words.map((word, idx) => (
        //     <ul className='wordUList' key={idx}>
        //         <li className="wordName"><h4>{word.original}</h4></li>
        //         <div className='answers'>
        //             <li className="wordCorrect">{word.correct_count}</li>
        //             <li className="wordIncorrect">{word.incorrect_count}</li>
        //         </div>
        //     </ul>
        // ))
        return (
            <div className="UserInfo">
                <h2 className='UserInfo__lang'>Now Learning {this.context.language}</h2>
                <span className='UserInfo__score'>Total correct answers: {this.context.totalScore}</span>
                <Link className='UserInfo__link' to="/learn">Start practicing</Link>
            </div>
        )
    }
}
//         return (
//             <div className="userData">
//                 <h2 className="userData_lang">Now Learning: {this.context.language}</h2>
//                 <div className="wordBox">
//                     <p className="userData_score">Total correct answers: {this.context.totalScore}</p>
//                     <div className="wordListBox">
//                         <div className='head'>
//                             <h3 className="wordHeader">Words to practice</h3>
//                             <h3 className="wordScores">Correct answer count: </h3>
//                             <h3 className="wordScores">Incorrect</h3>
//                         </div>
//                         {words}
//                     </div>
//                     <button className="startLearning_btn"><Link className="userData_link" to="/learn">Start practicing</Link></button>
//                 </div>
//             </div>
//         )
//     }
// }