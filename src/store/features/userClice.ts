import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

export interface IUserCreate {
    nickname: string,
    firstname: string,
    lastname: string,
    workplace: string,
    stack: string,
}

export interface User {
    id?: number,
    nickname: string,
    firstname: string,
    lastname: string,
    workplace: string,
    stack: string,
}

interface UserState {
    users: User[]
}

const initialState: UserState = {
    users: []
}

export const getUsersAsync = createAsyncThunk("api/User", async(thunkAPI) => {
    const response = await axios.get("https://localhost:7141/api/User");
    const data = response.data;
    return data;
})

export const createUserThunk = createAsyncThunk("", async(user: IUserCreate, {rejectWithValue,dispatch}) => {
    try{
        const response = await axios.post("https://localhost:7141/api/User", user)
        return response.data;
    } catch (e: any) {
        rejectWithValue(e.message);
    }
})

export const PersonSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // addUser(state, action: PayloadAction<IUserCreate>){
        //     createUserThunk({
        //         nickname: state.users.,
        //         firstname: action.payload.firstname,
        //         lastname: action.payload.lastname,
        //         workplace: action.payload.workplace,
        //         stack: action.payload.stack,
        //     })
        //     // state.users.push();
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(getUsersAsync.fulfilled, (state, action) => {
            state.users = action.payload;
        })
    }
})

// export const {addUser} = PersonSlice.actions;
export const userReducer = PersonSlice.reducer;