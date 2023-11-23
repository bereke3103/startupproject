import { configureStore } from "@reduxjs/toolkit";
import { authorizationReducer } from "../modules/Authorization/AuthorizationApi/Authorization";
import { cardsResumeReducer } from "../modules/CardsResume/CardsResumeApi/CardsApi";
import { registerReducer } from "../modules/Registration/RegistrationApi/RegistrationApi";
import { commentReducer } from "../modules/Comment/CommentApi/CommentApi";

export const store = configureStore({
  reducer: {
    cardResume: cardsResumeReducer,
    login: authorizationReducer,
    register: registerReducer,
    comment: commentReducer,
  },
});

// export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDipatch = typeof store.dispatch;
