import {
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/useTypedSelector";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import style from "../components/CardResumeItem/cardResumeItem.module.css";
import { Space, Spin } from "antd";
import { getResumeThunk, Resume } from "../CardsResumeApi/CardsApi";
import CardsResumeItem from "../components/CardResumeItem/CardsResumeItem";

const OtherCardsResumeList = () => {
  const dispatch = useAppDispatch();

  const { allListResumes, loading, error } = useAppSelector(
    (state) => state.cardResume,
  );
  const [allResumesData, setAllResumesData] =
    useState<Resume[]>(allListResumes);

  const navigate = useNavigate();

  const toPersonalProfile = (id: number) => {
    if (id) {
      navigate(`/personalprofile/${id}`);
    }
  };

  useEffect(() => {
    dispatch(getResumeThunk()).then((res) => {
      setAllResumesData(res.payload);
    });
  }, [dispatch]);

  return (
    <>
      <div className="app container">
        <div className={style.block_profiles}>
          <div className="title__block_profiles">
            <h1>Список резюме</h1>
          </div>
          {loading ? (
            <Space direction="vertical" style={{ width: "100%" }}>
              <Spin tip="Loading" size="large">
                <div className="content" />
              </Spin>
            </Space>
          ) : (
            <div className={style.allProfile}>
              {allResumesData.map((resume) => (
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

export default OtherCardsResumeList;
