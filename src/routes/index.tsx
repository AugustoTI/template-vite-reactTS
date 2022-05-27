import React from 'react';
import { BrowserRouter, Route, Routes as Router } from 'react-router-dom';
import { Home } from '../pages/Home';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Home />} />
      </Router>
    </BrowserRouter>
  );
};
