import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

//IUserCreate
export interface IProfileCreate {
  userId: number;
  nickname: string;
  firstname: string;
  lastname: string;
  workplace: string;
  stack: string;
}

export interface Resume {
  id?: number;
  userId: number | undefined | null;
  nickname: string;
  firstname: string;
  lastname: string;
  workplace: string;
  stack: string;
  loading: boolean;
  error: any;
}

interface UserState {
  allListResumes: Resume[];
  myListResumes: Resume[];
  profile: Resume;
  loading: boolean;
  error: any;
}

const initialState: UserState = {
  allListResumes: [],
  myListResumes: [],
  profile: {
    userId: 0,
    nickname: "",
    firstname: "",
    lastname: "",
    workplace: "",
    stack: "",
    loading: false,
    error: null,
  },
  loading: false,
  error: null,
};

export const getResumeThunk = createAsyncThunk(
  "api/Resume/getusers",
  async (thunkAPI) => {
    const response = await axios.get(
      "https://localhost:7141/api/Resume/getusers",
    );
    const data = response.data;
    return data;
  },
);

export const createResumeThunk = createAsyncThunk(
  "api/Resume/createuser",
  async (user: IProfileCreate, { rejectWithValue, dispatch }) => {
    try {
      console.log({ user });
      const response = await axios.post(
        "https://localhost:7141/api/Resume/createresumebyid",
        user,
      );
      return response.data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  },
);

export const getResumeByIdThunk = createAsyncThunk(
  "",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://localhost:7141/api/Resume/getuserbyid?id=${id}`,
      );
      return response.data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  },
);

export const getResumesListByIdThunk = createAsyncThunk(
  "api/Resume/getlistofwwnresumes",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://localhost:7141/api/Resume/getlistofwwnresumes",
        {
          params: { id },
        },
      );
      return response.data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  },
);

export const CardsResumeSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getResumeThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getResumeThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.allListResumes = action.payload;
        state.error = null;
      })
      .addCase(getResumeThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(getResumeByIdThunk.fulfilled, (state, action) => {
        state.profile = action.payload;
      })
      .addCase(getResumeByIdThunk.pending, (state) => {
        state.profile.loading = true;
        state.profile.error = null;
      })
      .addCase(getResumeByIdThunk.rejected, (state, action) => {
        state.profile.loading = false;
        state.profile.error = action.error.message;
      });

    builder.addCase(getResumesListByIdThunk.fulfilled, (state, action) => {
      state.myListResumes = action.payload;
    });
  },
});
export const cardsResumeReducer = CardsResumeSlice.reducer;
