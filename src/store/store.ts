import {applyMiddleware, combineReducers, createStore} from "redux";
import {userReducer} from "./features/profilesSlice";
import thunk from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";
import {loginReducer} from "./features/loginSlice";
import {registerReducer} from "./features/registerSlice";
import {commentReducer} from "./features/commetSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        login: loginReducer,
        register: registerReducer,
        comment: commentReducer
    }
})

// export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDipatch = typeof store.dispatch;