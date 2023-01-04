import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services";
import counterReducer from "../state/slice/counterSlice"


export const store =configureStore({
    reducer:{
        [api.reducerPath]:api.reducer,
        counter:counterReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
    serializeableCheck: false
})