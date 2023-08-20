import {UserAction, UserActionTypes, UserState} from "../../types/user";
import dataUsers from '../action-creators/profileUserExample.json'

const initalState: UserState = {
    users: dataUsers,
    loading: false,
    error: null
}

export const userReducer = (state = initalState, action: UserAction) : UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
           return {loading: true, error: null, users: []}
        case UserActionTypes.FETCH_USERS_SUCCESS:
           return {loading: false, error: null, users: action.payload}
        case UserActionTypes.FETCH_USERS_ERROR:
           return {loading: false, error: action.payload, users: []}
        default:
            return state
    }
}