import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export interface ILogin {
    login: string,
    password: string,
    token?: any,
    loading?: boolean,
    error?: any,
    success?: any
}

const initialState: ILogin = {
    login: "",
    password: "",
    token: "",
    loading: false,
    error: "",
    success: null
}
export const authorizationThunk = createAsyncThunk
("api/Login/login", async (login: ILogin, {rejectWithValue, fulfillWithValue}) => {
    try {
        const response = await axios.post("https://localhost:7141/api/Login/login", login);
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("id", response.data.id)
        localStorage.setItem("fullname", login.login)
        return response.data;
    } catch (e: any) {
        return rejectWithValue(e)
    }
})

export const AuthorizationSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        removeToken(state) {
            localStorage.removeItem("token");
            state.token = "";
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(authorizationThunk.pending, (state) => {
                state.loading = true;
                state.error = false;
                state.success = false;
            })
            .addCase(authorizationThunk.fulfilled, (state, action) => {
                state.token = action.payload;
                state.loading = false;
                state.success = true;
                state.error = false;
            })
            .addCase(authorizationThunk.rejected, (state, action) => {
                state.token = null;
                state.loading = false;
                state.success = false;
                state.error = action.payload;
            })
    }
})
export const authorizationReducer = AuthorizationSlice.reducer;