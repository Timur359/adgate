import React from 'react';
import { NavLink } from 'react-router-dom';

import './HeadPage.css';

//Компонент хэдера

const HeadPage = () => {
  return (
    <div className="head">
      <NavLink className="head__link" to="/">
        Главная
      </NavLink>
      <NavLink className="head__link" to="/news">
        Новости
      </NavLink>
      <NavLink
        className="head__link "
        to={localStorage.getItem('auth') == 'true' ? '/profile' : '/login'}
      >
        Профиль
      </NavLink>
    </div>
  );
};

export default HeadPage;
