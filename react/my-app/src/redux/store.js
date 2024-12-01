import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counterSlice"
import apiReducer from './apiSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        api: apiReducer
    },
})