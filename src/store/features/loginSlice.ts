import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export interface ILogin {
    login: string,
    password: string,
    token?: string,
    loading?: boolean,
    error?: any
}

const initialState: ILogin = {
    login: "",
    password: "",
    token: "false",
    loading: false,
    error: null
}
export const loginAsync = createAsyncThunk
("api/Login/login", async(login: ILogin, {rejectWithValue})=> {
    try {
        const response = await axios.post("https://localhost:7141/api/Login/login", login);
        return response.data;
    } catch (e: any) {
        rejectWithValue(e.message)
    }
})

export const LoginSlice = createSlice({
    name: "login",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(loginAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(loginAsync.fulfilled, (state, action) => {
            if (action.payload) {
            localStorage.setItem("token", action.payload);
            }
            state.loading = false;
            state.token = localStorage.getItem("token")!;
            state.error = null;
        }).addCase(loginAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export const loginReducer = LoginSlice.reducer;