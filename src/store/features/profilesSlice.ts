import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

//IUserCreate
export interface IProfileCreate {
    nickname: string,
    firstname: string,
    lastname: string,
    workplace: string,
    stack: string,
}

export interface Profiles {
    id?: number,
    nickname: string,
    firstname: string,
    lastname: string,
    workplace: string,
    stack: string,
    loading: boolean,
    error: any
}

interface UserState {
    profiles: Profiles[]
    profile: Profiles
    loading: boolean,
    error: any
}

const initialState: UserState = {
    profiles: [],
    profile: {
        nickname: "",
        firstname: "",
        lastname: "",
        workplace: "",
        stack: "",
        loading: false,
        error: null
    },
    loading: false,
    error: null

}

export const getProfilesAsync = createAsyncThunk("api/User/getusers", async(thunkAPI) => {
    const response = await axios.get("https://localhost:7141/api/User/getusers");
    const data = response.data;
    return data;
})

export const createProfileThunk = createAsyncThunk("api/User/createuser", async(user: IProfileCreate, {rejectWithValue,dispatch}) => {
    try{
        const response = await axios.post("https://localhost:7141/api/User/createuser", user)
        return response.data;
    } catch (e: any) {
        rejectWithValue(e.message);
    }
})

export const getProfileById = createAsyncThunk("", async(id: number, {rejectWithValue}) => {
    try {
        const response = await axios.get(`https://localhost:7141/api/User/getuserbyid?id=${id}`)
        return response.data;
    }catch (e: any) {
        rejectWithValue(e.message)
    }
})

export const PersonSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {


        builder.addCase(getProfilesAsync.pending, state => {
            state.loading = true;
            state.error = null;
        }).addCase(getProfilesAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.profiles = action.payload;
            state.error = null;
        }).addCase(getProfilesAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })


        builder.addCase(getProfileById.fulfilled, (state, action) => {
            state.profile = action.payload;
        }).addCase(getProfileById.pending, (state) => {
            state.profile.loading = true;
            state.profile.error = null;
        }).addCase(getProfileById.rejected, (state, action) => {
            state.profile.loading = false;
            state.profile.error = action.error.message;
        })

    }
})
export const userReducer = PersonSlice.reducer;