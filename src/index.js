import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/global.css'
import reportWebVitals from './reportWebVitals';
import Home from './components/screens/home/Home';

import { createStore } from 'redux'
import { Provider } from "react-redux";

const defaultState = {
    cart: [],
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_GOODS":
            return { ...state, cart: [...state.cart, action.payload] }


        default:
            return state;
    }
};

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Home />
    </Provider>
);

reportWebVitals();
