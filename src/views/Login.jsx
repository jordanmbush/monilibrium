import Header from '@components/global/Header/Header';
import React from 'react';
import './Login.scss';

const Login = () => (
  <div className="login relative flex-col">
    <Header />
    <div className="login-container flex-col flex-center">
      <div className="input-container flex-center">
        <i className="flex-center fs-25 far fa-envelope" />
        <input placeHolder="Email" />
      </div>
      <div className="input-container flex-center">
        <i className="flex-center fs-25 fas fa-lock" />
        <input type="password" placeHolder="Password" />
      </div>
      <button type="button" className="fs-40">
        {window.strings.login}
      </button>
    </div>
  </div>
);

export default Login;
