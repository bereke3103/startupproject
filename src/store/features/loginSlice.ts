import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export interface ILogin {
    login: string,
    password: string,
    token?: any,
    loading?: boolean,
    error?: any,
    success?: boolean
}

const initialState: ILogin = {
    login: "",
    password: "",
    token: "",
    loading: false,
    error: "",
    success: false
}
export const loginAsync = createAsyncThunk
("api/Login/login", async(login: ILogin, {rejectWithValue, fulfillWithValue})=> {
    try {
        const response = await axios.post("https://localhost:7141/api/Login/login", login);
        return fulfillWithValue(response.data);
    } catch (e: any) {
        return rejectWithValue("Error")
    }
})

export const LoginSlice = createSlice({
    name: "login",
    initialState,
    reducers:{
        removeToken(state) {
            localStorage.removeItem("token");
            state.token="";
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
            state.loading = true;
            state.error = false;
            state.success = false;
        })
            .addCase(loginAsync.fulfilled, (state, action) => {
            state.token = action.payload;
            state.loading = false;
            state.success = true;
            state.error = false;
        })
            .addCase(loginAsync.rejected, (state, action) => {
            state.loading = false;
            state.success = true;
            state.error = action.payload;
        })
    }
})

export const {removeToken} = LoginSlice.actions;
export const loginReducer = LoginSlice.reducer;