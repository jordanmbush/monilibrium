import Button from '@atoms/Button';
import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import './header.scss';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
    };
  }

  render() {
    const {userName} = this.state;
    return (
      <div className="header flex ai-center" {...this.props}>
        {userName}
        <Link to="/login">
          <Button className="btn-cta">{window.strings.login}</Button>
        </Link>
      </div>
    );
  }
}

export default Header;
