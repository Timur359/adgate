import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import MainPage from 'components/MainPage/MainPage';
import ProfilePage from 'components/ProfilePage/ProfilePage';

const App = () => {
  return (
    <Routes>
      <Route exact path="/news" element={<HomePage />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/" element={<MainPage />} />
      <Route exact path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default App;
