import React from 'react';

import HeadPage from 'components/HeadPage/HeadPage';

import './MainPage.css';

import avatar from '../../images/avatar.png';

//Компонент главной страницы

const MainPage = () => {
  return (
    <div className="main-page">
      <HeadPage />
      <div className="main-page__body">
        <h2 className="main-page__body_title">Тимур Вергазов</h2>
        <img src={avatar} className="main-page__body_avatar" alt="аватар" />
        <p>
          Добрый день! Меня заинтересовала Ваша вакансия Frontend разработчик.
          Мне было бы интересно развиваться у Вас в компании. Я закончил курсы
          Web-разработчика в Яндекс-Практикум. Хорошо понимаю HTML и CSS,
          JavaScript, React/Redux, TypeScript, Node.js, имею аналитический склад
          ума, быстро запоминаю новую информацию и не боюсь конструктивной
          критики. Хочу дальше развивать свои навыки и приобретать новые в
          данной сфере.
          <br /> <br />
          Снаилучшими пожеланиями, Тимур <br />
          Телефон: 8-905-531-01-30, <br />
          e-mail: 205208@mail.ru, <br />
          GitHub:{' '}
          <a
            href="https://github.com/Timur359"
            target="blank"
            className="main-page__body_btn"
          >
            https://github.com/Timur359
          </a>
        </p>
      </div>
    </div>
  );
};

export default MainPage;
