import {applyMiddleware, combineReducers, createStore} from "redux";
import {userReducer} from "./features/userClice";
import thunk from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        user: userReducer
    }
})

// export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDipatch = typeof store.dispatch;