// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App.jsx';
import { Provider } from 'react-redux'; 
import { store } from './app/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 3. Envolver la App con el Provider y pasarle la tienda */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);