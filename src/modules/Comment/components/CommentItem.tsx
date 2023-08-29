import {useState} from "react";

export interface CommentProps {
    id: number,
    comment: string,
    createdComment: any,
    author: string
}

const CommentItem: React.FC<CommentProps> = ({id, comment, createdComment, author}) => {
    // const [parsedDate, setParsedDate] = useState(new Date(createdComment));
    const correctlyDate = new Date(createdComment);
    const parsedDate = `${correctlyDate.getDate()}-${correctlyDate.getMonth() + 1}-${correctlyDate.getFullYear()} гг.`
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            border: "1px solid #0000004d",
            padding: "15px",
            borderRadius: "5px"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                gap: "5px"
            }}>
                <div>Автор: <span style={{fontWeight: "bold", fontSize: "15px", color: "#135391"}}>{author}</span></div>
                |
                <div>Дата: <span
                    style={{fontWeight: "bold", fontSize: "15px", textDecoration: "underline", color: "#2c5b68d6"}}>{parsedDate}</span>
                </div>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                gap: "7px"
            }}>
                <div>{id}.</div>
                <div>{comment}</div>
            </div>
        </div>
    )
}

export default CommentItem