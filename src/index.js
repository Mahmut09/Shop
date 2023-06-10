import React from 'react';
import ReactDOM from 'react-dom/client';
import  './assets/global.css'
import reportWebVitals from './reportWebVitals';
import Home from './components/screens/home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Home />
);

reportWebVitals();
