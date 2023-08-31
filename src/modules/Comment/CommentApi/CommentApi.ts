import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

//параметр для выгрузки комментарий резюме
export interface ICommentRequest {
    userId: number,
    resumeId: number
}


//параметр для загрузки комментарий резюме
export interface ICreatingComment {
    authorId: number,
    userId: number | undefined | null,
    resumeId: number,
    comment: string
}

export type CommentRequestType = ICommentRequest | ICreatingComment;

export interface CommentsState {
    commentsByUserId: []
}
const initialState:CommentsState = {
    commentsByUserId: []
}

export const getCommentByUserIdByResumeIdThunk = createAsyncThunk("/api/Comment/getcommentsbyuserifromresume", async (getCommentsByResumeId:CommentRequestType, {rejectWithValue}) => {
    try {
        const response = await axios.get("https://localhost:7141/api/Comment/getcommentsbyuserifromresume", {
            params: {
                userId: getCommentsByResumeId.userId,
                resumeId: getCommentsByResumeId.resumeId
            }
        })

        return response.data;
    }catch (e: any) {
        return rejectWithValue(e.message)
    }
})

export const creatingCommentByIdThunk = createAsyncThunk("/api/Comment/creatingcomment", async (requestForCreatingComment:ICreatingComment, {rejectWithValue}) => {
    try {
        const response = await axios.post("https://localhost:7141/api/Comment/creatingcomment", requestForCreatingComment);
        return response.data;
    }catch (e: any) {
        return rejectWithValue(e.message)
    }
})

export const CommentSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(getCommentByUserIdByResumeIdThunk.fulfilled, (state, action) => {
            state.commentsByUserId = action.payload;
        })


        builder.addCase(getCommentByUserIdByResumeIdThunk.fulfilled, (state, action) => {
            const newComment = {
                comment: action.payload.comment,
                createdComment: action.payload.createdComment,
                id: action.payload.id,
            }
            // @ts-ignore
            state.commentsByUserId = [...state.commentsByUserId, action.payload];
        })
    }
})

export const commentReducer = CommentSlice.reducer;