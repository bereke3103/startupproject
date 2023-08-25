import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export interface IRegister {
    login: string,
    password: string,
    success?: string,
    successBool?: boolean,
    loading: boolean,
    error?: boolean
}

const initialState: IRegister = {
    login: "",
    password: "",
    success: "",
    loading: false,
    error: false,
    successBool: false,
}
export const registerAsync = createAsyncThunk(
    "/api/Register/register", async (login: IRegister, {rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await axios.post("https://localhost:7141/api/Register/register", login);
            console.log({response})
            return fulfillWithValue(response.data);
        } catch (e: any) {
            return rejectWithValue(true)
        }
    }
)

export const RegisterSlice = createSlice({
    name: "register",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(registerAsync.pending, (state) => {
            state.successBool = false;
            state.loading = true;
            state.error = false;
        }).addCase(registerAsync.fulfilled, (state, action) => {
            state.successBool = true;
            state.loading = false;
            state.success = action.payload;
        }).addCase(registerAsync.rejected, (state, action) => {
            state.successBool = false;
            state.loading = false;
            state.error = action.meta.rejectedWithValue;
        })
    }
})

export const registerReducer = RegisterSlice.reducer;