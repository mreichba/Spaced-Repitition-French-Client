import React, { Component } from 'react'
import Button from '../Button/Button'
import { Input, Label } from '../Form/Form'
import LanguageApiService from '../../services/language-api-service';
import './Learning.css'

class Learning extends Component {
    static correctIncorrect;

    constructor(props) {
        super(props);
        this.state = {
            guess: '',
            answer: '',
            isCorrect: '',
            nextWord: this.props.head.nextWord,
            currentWord: '',
            totalScore: this.props.head.totalScore,
            wordCorrectCount: this.props.head.wordCorrectCount,
            wordIncorrectCount: this.props.head.wordIncorrectCount,
            correctIncorect: '',
            showinput: true
        }
    }

    postGuessHandler = (e) => {
        e.preventDefault();
        const { guess } = this.state;
        this.setState({
            currentWord: this.state.nextWord
        })
        LanguageApiService.postGuess(guess).then(res => {
            const {
                answer,
                isCorrect,
                nextWord,
                totalScore,
                wordCorrectCount,
                wordIncorrectCount,
            } = res;

            this.correctIncorrect = this.rightWrong(res.isCorrect);

            this.setState({
                answer,
                isCorrect,
                nextWord,
                totalScore,
                wordCorrectCount,
                wordIncorrectCount
            });
        });
        this.setState({ showinput: false });
    };

    handleNextClick = (e) => {
        LanguageApiService.getHead().then(res => {
            const { wordCorrectCount, wordIncorrectCount } = res;
            this.setState({ wordCorrectCount, wordIncorrectCount });
        })
        this.setState({
            showinput: true,
            answer: ''
        });
    };

    rightWrong = answer => {
        if (answer) {
            return (
                <h2 className='second-h2' style={{ color: 'green' }}>
                    {`You were correct! :D`}
                </h2>
            );
        } else {
            return (
                <h2 className='second-h2' style={{ color: 'red' }}>
                {`Good try, but not quite right :(`}
            </h2>
            );
        }
    };

    updateGuess(guess) {
        this.setState({ guess });
    }

    render() {
        return (
            <div className="learning">
                {' '}
                <div className="learning_stats">
                    <h4 className="learning_correct">
                        You have answered this word correctly {this.state.wordCorrectCount} times.
                    </h4>
                    <h4 className="learning_incorrect">
                        You have answered this word incorrectly {this.state.wordIncorrectCount} times.
                    </h4>
                </div>
                <div className="learning_total_score">
                    <main className="DisplayScore">
                        <p className="DisplayScorep">Your total score is: {this.state.totalScore}</p>
                    </main>
                </div>
                {this.state.showinput && <div className="Learning__Prompt">
                        <h2 className="translateWord">Translate the word:</h2>
                        <span className="learning__word">{this.state.nextWord}</span>
                </div>}
                <div className="DisplayFeedback">
                    {this.state.answer && (
                        <div>
                            <p className="learning_guess">
                                {`The correct translation for ${this.state.currentWord} was ${this.state.answer} and you chose ${this.state.guess}!`}
                            </p>
                            <Button type="submit" className="try_another" onClick={e => this.handleNextClick(e)}>
                                Try another word!
                            </Button>
                        </div>
                    )}
                </div>
                {this.state.showinput && (
                    <form
                        className="learning_answer_form"
                        onSubmit={e => this.postGuessHandler(e)}
                    >
                        <Label
                            className="learning_answer_form_label"
                            htmlFor="learn-guess-input"
                        >
                            What's the translation for this word?
                        </Label>
                        <div className="learning_answer_form_inputs">
                            <Input
                                id="learn-guess-input"
                                type="text"
                                required
                                onChange={e => this.updateGuess(e.target.value)}
                            /><br />
                            <Button type="submit">Submit your answer</Button>
                        </div>
                    </form>
                )}
                {!this.state.showinput && this.correctIncorrect}
            </div>
        )
    }
}
export default Learning;