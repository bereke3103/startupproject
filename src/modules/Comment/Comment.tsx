import React, {useEffect, useState} from "react";
import {getCommentByUserIdByResumeId, ICommentRequest} from "../../store/features/commetSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/useTypedSelector";
import CommentItem from "./components/CommentItem";

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
        const userIdFromLocal = localStorage.getItem("id");
        const request: ICommentRequest = {
            userId: userId!,
            resumeId: Number(resumeId)
        }
        dispatch(getCommentByUserIdByResumeId(request)).then((res) => {
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