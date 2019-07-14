import Header from '@components/global/Header/Header';
import screenShotImg from '@assets/images/iphone_dashboard_screenshot_lg.png';
import React, {Component} from 'react';
import './home.scss';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
    };
  }

  render() {
    const {userName} = this.state;

    return (
      <div className="home-page">
        <div className="hero-section">
          <Header />
          <div
            className="hero-banner-text"
            dangerouslySetInnerHTML={{__html: window.strings.createBudgetTodayHtml}}
          />
          {userName && <span>{`${window.strings.welcomeBack} ${userName}`}</span>}
          <img alt="mobile screenshot of dashboard" src={screenShotImg} />
        </div>
        <div className="below-the-fold" />
      </div>
    );
  }
}

export default Home;
