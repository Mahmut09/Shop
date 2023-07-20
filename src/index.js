import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/global.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/home/Home';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom'

const defaultState = {
    cart: [],
    URL: "http://172.28.0.152:9999/",
    accessToken: localStorage.getItem("accessToken") || "",
    username: localStorage.getItem("username") || "",
    categoryIsOpen: true,
    searchItems: [],
    categoryName: "",
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_GOODS":
            return { ...state, cart: [...state.cart, action.payload] };
        case "SET_ACCESS_TOKEN":
            localStorage.setItem("accessToken", action.payload);
            return { ...state, accessToken: action.payload };
        case "SET_USER_NAME":
            localStorage.setItem("username", action.payload);
            return { ...state, username: action.payload };
        case "SET_MOBILE_IS_OPEN":
            return { ...state, categoryIsOpen: action.payload };
        case "SET_SEARCH_ITEMS":
            return { ...state, searchItems: action.payload };
        case "SET_CATEGORY_NAME":
            return { ...state, categoryName: action.payload };

        default:
            return state;
    }
};

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
        <Provider store={store}>
            <Home />
        </Provider>
    </BrowserRouter>

);

reportWebVitals();
