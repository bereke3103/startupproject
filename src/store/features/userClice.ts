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
    user: User
}

const initialState: UserState = {
    users: [],
    user: {
        nickname: "",
        firstname: "",
        lastname: "",
        workplace: "",
        stack: ""
    }
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

export const getUserById = createAsyncThunk("", async(id: number, {rejectWithValue}) => {
    try {
        const response = await axios.get(`https://localhost:7141/api/User/getuserById?id=${id}`)
        return response.data;
    }catch (e: any) {
        rejectWithValue(e.message)
    }
})

export const PersonSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getUsersAsync.fulfilled, (state, action) => {
            state.users = action.payload;
        })
        builder.addCase(getUserById.fulfilled, (state, action) => {
            state.user = action.payload;
        })
    }
})
export const userReducer = PersonSlice.reducer;