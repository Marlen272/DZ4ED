import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './CounterSlider';
import regReducer from './RegSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        registration: regReducer
    },
});

export default store;