import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/useTypedSelector";
import style from "./personCard.module.css";
import { getResumeByIdThunk } from "../CardsResumeApi/CardsApi";
import {
  creatingCommentByIdThunk,
  ICreatingComment,
} from "../../Comment/CommentApi/CommentApi";
import AddingToComment from "../../Comment/components/AddingToComment/AddingToComment";
import Comment from "../../Comment/CommentList/CommentList";
import { Col, Row } from "antd";

const PersonCard = () => {
  const params = useParams();
  const [authorResumeId, setAuthorResumeId] = useState<number | null>(null);
  const [comment, setComment] = useState<string>("");
  const userId = localStorage.getItem("id");
  const userState = useAppSelector((state) => state.cardResume.profile);
  const [numberUser, setNumberUser] = useState<number | null | undefined>(
    userState.userId,
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getResumeByIdThunk(Number(params.id))).then((res) => {
      setAuthorResumeId(Number(res.payload.userId));
      setNumberUser(res.payload.userId);
    });
  }, [numberUser]);
  console.log({ userState });
  const toAddComment = (e: any) => {
    e.preventDefault();
    const requestForCreatingComment: ICreatingComment = {
      authorId: Number(localStorage.getItem("id")),
      userId: userState.userId,
      resumeId: Number(params.id),
      comment: comment,
    };

    console.log({ requestForCreatingComment });
    dispatch(creatingCommentByIdThunk(requestForCreatingComment)).then(
      (res) => {
        setComment("");
      },
    );
  };
  return (
    <>
      <Row align={"middle"} justify={"space-around"}>
        <Col span={12} flex={"center"}>
          <div className={style.img_person}>
            <img
              className={style.img}
              src="https://attractivecv.com/wp-content/uploads/2022/01/modele-de-cv-en-anglais-barcelone-bleu-207d-en.jpg"
              alt=""
            />
          </div>
        </Col>
        <Col span={12}>
          <div className={style.person__info}>
            <div className={style.info__person}>
              <span>
                <b>Никнейм:</b>
              </span>{" "}
              <p>{userState.nickname}</p>
            </div>
            <div className={style.info__person}>
              <span>
                <b>Имя:</b>
              </span>{" "}
              <p>{userState.firstname}</p>
            </div>
            <div className={style.info__person}>
              <span>
                <b>Фамилия:</b>
              </span>{" "}
              <p>{userState.lastname}</p>
            </div>
            <div className={style.info__person}>
              <span>
                <b>Рабочее место:</b>
              </span>{" "}
              <p>{userState.workplace}</p>
            </div>
            <div className={style.info__person}>
              <span>
                <b>Основные инструменты:</b>
              </span>{" "}
              <p>{userState.stack}</p>
            </div>
          </div>
        </Col>
      </Row>
      {/*<div className={style.personal__block}>*/}

      {/*   */}
      {/*</div>*/}
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <Comment userId={numberUser} resumeId={Number(params.id)} />
        <AddingToComment
          userId={userState.id}
          authorResumeId={authorResumeId}
          setComment={setComment}
          comment={comment}
          toAddComment={toAddComment}
        />
      </div>
    </>
  );
};

export default PersonCard;
