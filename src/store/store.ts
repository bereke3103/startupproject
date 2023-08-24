import {applyMiddleware, combineReducers, createStore} from "redux";
import {userReducer} from "./features/profilesSlice";
import thunk from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";
import {loginReducer} from "./features/loginSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        login: loginReducer
    }
})

// export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDipatch = typeof store.dispatch;