import React from "react";
import {Input, Button} from "antd";

interface AddingToCommentProps {
    userId: number | null | undefined,
    authorResumeId: number | null,
    comment: string,
    setComment: any,
    toAddComment: any,
}

const AddingToComment: React.FC<AddingToCommentProps> = ({
                                                                         userId,
                                                                         authorResumeId,
                                                                         comment,
                                                                         setComment,
                                                                         toAddComment
                                                                     }) => {
    return (
        <>
            {Number(localStorage.getItem("id")) === authorResumeId ? null : <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
                marginTop: "20px"
            }}>
                <Input.TextArea rows={4} placeholder="Добавьте комментарий..." value={comment}
                                onChange={e => setComment(e.target.value)}/>
                <Button onClick={toAddComment} type="primary" size={"large"}>
                    Добавить комментарий
                </Button>
            </div>}
        </>
    )
}
export default AddingToComment