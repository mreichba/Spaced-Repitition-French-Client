import React, { Component } from 'react'
import LanguageApiService from '../../services/language-api-service';
import UserContext from '../../contexts/UserContext';
import UserData from '../../components/UserData/UserData';
import './DashboardRoute.css'

class DashboardRoute extends Component {
  static contextType = UserContext;

  componentDidMount() {
    LanguageApiService.getLanguage().then(res => {
      const { language, words } = res;
      this.context.setLanguage(language);
      this.context.setWords(words);
    });
  }

  render() {
    return (
      <section className='dash'>
        <h2>My Dashboard</h2>
        <UserData />
      </section>
    );
  }
}

export default DashboardRoute
