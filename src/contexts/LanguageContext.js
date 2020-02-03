import React, { Component } from 'react';

const LanguageContext = React.createContext({
    language: null,
    words: [],
    totalScore: 0,
    error: null,
    setLanguage: () => {},
    setWords: () => {},
    setError: () => {},
    clearError: () => {}
})

export default LanguageContext

export class LanguageProvider extends Component {
    state = {
        language: null,
        words: [],
        totalScore: 0,
        error: null
    }

    setLanguage = language => {
        this.setState({
            language: language.name,
            totalScore: language.total_score
        })
    }

    setWords = words => {
        this.setState({ words })
    }

    setTotalScore = (totalScore) => {
        this.setState({ totalScore })
    }

    setError = error => {
        console.log(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    render() {
        const value = {
            language: this.state.language,
            words: this.state.words,
            error: this.state.error,
            totalScore: this.state.totalScore,
            setLanguage: this.setLanguage,
            setWords: this.setWords,
            setTotalScore: this.setTotalScore,
            setError: this.setError,
            clearError: this.clearError
        }

        return (
            <LanguageContext.Provider value={value}>
                {this.props.children}
            </LanguageContext.Provider>
        )
    }
}