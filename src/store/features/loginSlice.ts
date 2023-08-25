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
    error: ""
}
export const loginAsync = createAsyncThunk
("api/Login/login", async(login: ILogin, {rejectWithValue, fulfillWithValue})=> {
    try {
        const response = await axios.post("https://localhost:7141/api/Login/login", login);
        return fulfillWithValue(response.data);
    } catch (e: any) {
        return rejectWithValue(true)
    }
})

export const LoginSlice = createSlice({
    name: "login",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
            .addCase(loginAsync.fulfilled, (state, action) => {
                console.log({state})
                console.log({action})
                if (action.payload) {
                    localStorage.setItem("token", action.payload);
                    state.token = localStorage.getItem("token")!;
                    state.loading = false;
                    state.error = false;
                }
        })
            .addCase(loginAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export const loginReducer = LoginSlice.reducer;