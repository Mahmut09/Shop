import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/global.css'
import reportWebVitals from './reportWebVitals';
import Home from './components/screens/home/Home';

import { createStore } from 'redux'
import { Provider } from "react-redux";

const defaultState = {
    cart: [],
    URL: "http://127.0.0.1:8000/",
    isLogined: false,
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_GOODS":
            return { ...state, cart: [...state.cart, action.payload] }
        case "SET_LOGINED":
            return { ...state, isLogined: action.payload }


        default:
            return state;
    }
};

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Home />
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
