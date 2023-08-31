import {useParams} from "react-router";
import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks/useTypedSelector";
import {getProfileById} from "../../../store/features/profilesSlice";
import {creatingCommentById, ICreatingComment} from "../../../store/features/commetSlice";
import style from "../../../../modules/PersonalProfile/PersonalProfile.module.css";
import Comment from "../../../../modules/Comment/Comment";
import AddingCommentToResume from "../../../../modules/AddingCommentToResume/AddingCommentToResume";

const PersonCard = () => {
    const params = useParams();
    const [authorResumeId, setAuthorResumeId] = useState<number | null>(null)
    const [comment, setComment] = useState<string>('');
    const userId = localStorage.getItem("id")
    const userState = useAppSelector(state => state.user.profile)
    const [numberUser, setNumberUser] = useState<number | null | undefined>(userState.userId);

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getProfileById(Number(params.id))).then((res) => {
            setAuthorResumeId(Number(res.payload.userId))
            setNumberUser(res.payload.userId)
        })
    }, [numberUser])
    console.log({userState})
    const toAddComment = (e: any) => {
        e.preventDefault();
        const requestForCreatingComment: ICreatingComment = {
            authorId: Number(localStorage.getItem("id")),
            userId: userState.userId,
            resumeId: Number(params.id),
            comment: comment
        }

        console.log({requestForCreatingComment})
        dispatch(creatingCommentById(requestForCreatingComment)).then((res) => {
            setComment("");
        })
    }
    return (
        <>
            <div className={style.personal__block}>
                <div className={style.img_person}>
                    <img className={style.img}
                         src="https://attractivecv.com/wp-content/uploads/2022/01/modele-de-cv-en-anglais-barcelone-bleu-207d-en.jpg"
                         alt=""/>
                </div>
                <div className={style.person__info}>
                    <div className={style.info__person}>
                        <span><b>Никнейм:</b></span> <p>{userState.nickname}</p>
                    </div>
                    <div className={style.info__person}>
                        <span><b>Имя:</b></span> <p>{userState.firstname}</p>
                    </div>
                    <div className={style.info__person}>
                        <span><b>Фамилия:</b></span> <p>{userState.lastname}</p>
                    </div>
                    <div className={style.info__person}>
                        <span><b>Рабочее место:</b></span> <p>{userState.workplace}</p>
                    </div>
                    <div className={style.info__person}>
                        <span><b>Основные инструменты:</b></span> <p>{userState.stack}</p>
                    </div>
                </div>
            </div>
            <div style={{
                marginTop: "50px",
                display: "flex",
                flexDirection: "column",
                gap: "30px"
            }}>
                <Comment userId={numberUser} resumeId={Number(params.id)}/>
                <AddingCommentToResume userId={userState.id} authorResumeId={authorResumeId} setComment={setComment}
                                       comment={comment} toAddComment={toAddComment}/>
            </div>
        </>
    )
}