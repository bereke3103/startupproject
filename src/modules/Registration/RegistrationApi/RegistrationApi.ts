import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export interface IRegister {
    login: string,
    password: string,
    success?: string | undefined,
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
export const registerThunk = createAsyncThunk(
    "/api/Register/register", async (login: IRegister, {rejectWithValue, fulfillWithValue}) => {

        axios.post("https://localhost:7141/api/Register/register", login).then((response) => {
            return fulfillWithValue(response.data);
        }).catch(e => {
            console.log({e})
            return rejectWithValue(true)
        })
    }
)

export const RegisterSlice = createSlice({
    name: "register",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(registerThunk.pending, (state) => {
            state.successBool = false;
            state.loading = true;
            state.error = false;
        }).addCase(registerThunk.fulfilled, (state, action) => {
            state.successBool = true;
            state.loading = false;
            state.success = action.payload!;
        }).addCase(registerThunk.rejected, (state, action) => {
            state.successBool = false;
            state.loading = false;
            state.error = action.meta.rejectedWithValue;
        })
    }
})

export const registerReducer = RegisterSlice.reducer;