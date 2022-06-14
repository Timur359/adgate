import React from 'react';
import { useNavigate } from 'react-router-dom';

import HeadPage from 'components/HeadPage/HeadPage';

import './ProfilePage.css';
import '../LoginPage/LoginPage.css';

//Компонент профиля

const ProfilePage = () => {
  const navigate = useNavigate();

  //Функция выхода из профиля
  const logOut = () => {
    if (localStorage.getItem('auth') === 'true') {
      localStorage.setItem('auth', 'false');
      navigate('/news');
    } else {
      console.log('Что-то пошло не так');
    }
  };
  return (
    <div className="profile-page">
      <HeadPage />
      <h2 className="profile-page__title">Профиль</h2>
      <div className="profile-page__info-box">
        <span className="profile-page__info-box_text">Имя</span>
        <span className="profile-page__info-box_text">Тимур</span>
      </div>
      <div className="profile-page__info-box">
        <span className="profile-page__info-box_text">Фамилия</span>
        <span className="profile-page__info-box_text">Вергазов</span>
      </div>
      <button onClick={logOut} className="login-page__button">
        Выйти из аккаунта
      </button>
    </div>
  );
};

export default ProfilePage;
