import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks/useTypedSelector";
import CommentItem from "../components/CommentItem/CommentItem";
import {getCommentByUserIdByResumeIdThunk, ICommentRequest} from "../CommentApi/CommentApi";

export interface ICommentResponse {
    author: string,
    id: number,
    comment: string,
    createdComment: any
}

export type CommentResponseType = ICommentResponse[];

export interface CommentProps {
    resumeId: number,
    userId: number | undefined | null
}

const Comment: React.FC<CommentProps> = ({resumeId,userId}) => {
    const dispatch = useAppDispatch();
    const {commentsByUserId} = useAppSelector(state => state.comment);

    const [comments, setComments] = useState<CommentResponseType>(commentsByUserId)
    useEffect(() => {
        const request: ICommentRequest = {
            userId: userId!,
            resumeId: Number(resumeId)
        }
        dispatch(getCommentByUserIdByResumeIdThunk(request)).then((res) => {
            console.log(res)
            setComments(res.payload)
        })
    }, [dispatch, userId]);
    return (
        <>
            {comments.map((c: ICommentResponse) => (
                <CommentItem key={c.id} comment={c.comment} createdComment={c.createdComment} id={c.id} author={c.author}/>

            ))}
        </>
    )
}

export default Comment