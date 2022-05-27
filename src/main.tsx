import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes } from './routes';

import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
);
