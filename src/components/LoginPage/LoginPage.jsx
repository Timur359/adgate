import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import HeadPage from 'components/HeadPage/HeadPage';

import './LoginPage.css';

//Компонент авторизации

const LoginPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [validForm, setValidForm] = useState(false);

  const navigate = useNavigate();

  //Отработка кнопки авторизироваться

  const checkAuth = () => {
    if (
      login.toLowerCase() == 'admin' &&
      password.toLowerCase() == '12345678'
    ) {
      navigate('/news');
      localStorage.setItem('auth', true);
    } else {
      setValidForm('Неверный логин или пароль');
    }
  };

  return (
    <div className="login-page">
      <HeadPage />
      <div className="login-page__box">
        <h1 className="login-page__title">Авторизация</h1>
        <input
          type="text"
          className="login-page__input"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Логин"
          required
        />
        <input
          type="password"
          className="login-page__input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
          required
        />
        <span className="login-page__error">{validForm}</span>
        <button onClick={checkAuth} className="login-page__button">
          Авторизироваться
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
