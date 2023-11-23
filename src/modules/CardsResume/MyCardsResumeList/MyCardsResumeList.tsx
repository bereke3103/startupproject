import {
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/useTypedSelector";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ADDING_NEW_PROFILE_PAGE } from "../../../routes/routes";
import style from "../components/CardResumeItem/cardResumeItem.module.css";
import { Space, Spin } from "antd";
import { getResumesListByIdThunk, Resume } from "../CardsResumeApi/CardsApi";
import CardsResumeItem from "../components/CardResumeItem/CardsResumeItem";

const MyCardsResumeList = () => {
  const dispatch = useAppDispatch();

  const { myListResumes, loading, error } = useAppSelector(
    (state) => state.cardResume,
  );
  const [myResumesData, setMyResumesData] = useState<Resume[]>(myListResumes);

  useEffect(() => {
    const id = localStorage.getItem("id");
    dispatch(getResumesListByIdThunk(Number(id))).then((res) => {
      setMyResumesData(res.payload);
    });
  }, []);

  const navigate = useNavigate();

  function toAddNewProfile(e: any) {
    e.preventDefault();
    navigate(`${ADDING_NEW_PROFILE_PAGE}`);
  }

  const toPersonalProfile = (id: number) => {
    console.log("id:", id);
    if (id) {
      navigate(`/personalprofile/${id}`);
    }
  };

  return (
    <>
      <div className="app container">
        <div className={style.block_profiles}>
          <div className="title__block_profiles">
            <h1>Мои резюме</h1>
          </div>
          {loading ? (
            <Space direction="vertical" style={{ width: "100%" }}>
              <Spin tip="Loading" size="large">
                <div className="content" />
              </Spin>
            </Space>
          ) : (
            <div className={style.allProfile}>
              {myResumesData.map((resume) => (
                <CardsResumeItem
                  toPersonalProfile={toPersonalProfile}
                  key={resume.id}
                  lastname={resume.lastname}
                  firstname={resume.firstname}
                  nickname={resume.nickname}
                  stack={resume.stack}
                  workplace={resume.workplace}
                  id={resume.id}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyCardsResumeList;
