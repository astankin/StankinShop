import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';



import {
    productListReducer,
    productDetailsReducer,
    // productDeleteReducer,
    // productCreateReducer,
    // productUpdateReducer,
    // productReviewCreateReducer,
    // productTopRatedReducer,
} from './reducers/productReducers';

import { cartReducer } from './reducers/cartReducers';

import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    // userListReducer,
    // userDeleteReducer,
    // userUpdateReducer,
} from './reducers/userReducers';

import {
    orderCreateReducer,
    orderDetailsReducer,
    orderPayReducer,
    // orderListMyReducer,
    // orderListReducer,
    // orderDeliverReducer,
} from './reducers/orderReducers';

// Combine reducers
const reducer = {
    productList: productListReducer,
    productDetails: productDetailsReducer,
    // productDelete: productDeleteReducer,
    // productCreate: productCreateReducer,
    // productUpdate: productUpdateReducer,
    // productReviewCreate: productReviewCreateReducer,
    // productTopRated: productTopRatedReducer,

    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    // userList: userListReducer,
    // userDelete: userDeleteReducer,
    // userUpdate: userUpdateReducer,

    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    // orderListMy: orderListMyReducer,
    // orderList: orderListReducer,
    // orderDeliver: orderDeliverReducer,
};

// Load initial state from localStorage
const cartItemsFromStorage = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [];

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
    ? JSON.parse(localStorage.getItem('shippingAddress'))
    : {};

// Initial state
const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
    },
    userLogin: { userInfo: userInfoFromStorage },
};

// Configure the store

const store = configureStore({
    reducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: process.env.NODE_ENV !== 'production', // Enable DevTools only in development
});

export default store;
