import { useNavigate } from "react-router";
import React, { useState } from "react";
import { useAppDispatch } from "../../hooks/useTypedSelector";
import style from "../../components/Input/input.module.css";
import {
  createResumeThunk,
  IProfileCreate,
} from "../CardsResume/CardsResumeApi/CardsApi";
import InputComp from "../../components/Input/InputComp";
import ButtonComp from "../../components/Button/ButtonComp";
import { Col, Row } from "antd";

const CreatingResume = () => {
  const navigate = useNavigate();

  const [nickname, setNick] = useState<string>("");
  const [firstname, setFirstName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [workplace, setWorkplace] = useState<string>("");
  const [stack, setStack] = useState<string>("");

  const dispatch = useAppDispatch();

  const toAddNewProfile = (e: any) => {
    e.preventDefault();
    const userId = localStorage.getItem("id");
    const newUser: IProfileCreate = {
      userId: Number(userId),
      nickname,
      firstname,
      lastname,
      workplace,
      stack,
    };
    dispatch(createResumeThunk(newUser));
    setNick("");
    setFirstName("");
    setLastName("");
    setWorkplace("");
    setStack("");
    navigate("/");
  };
  return (
    <>
      <Row gutter={[40, 40]}>
        <Col span={12}>
          <InputComp
            label={"Ник"}
            onChange={(e: any) => setNick(e.target.value)}
          />
        </Col>
        <Col span={12}>
          <InputComp
            label={"Имя"}
            onChange={(e: any) => setFirstName(e.target.value)}
          />
        </Col>
        <Col span={12}>
          <InputComp
            label={"Рабочее место"}
            onChange={(e: any) => setWorkplace(e.target.value)}
          />
        </Col>
        <Col span={12}>
          <InputComp
            label={"Фамилия"}
            onChange={(e: any) => setLastName(e.target.value)}
          />
        </Col>
        <Col span={12}>
          <InputComp
            label={"Основной инструмент"}
            onChange={(e: any) => setStack(e.target.value)}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: 40 }}>
        <Col span={12}>
          <ButtonComp label={"Добавить"} onClick={toAddNewProfile} />
        </Col>
      </Row>
    </>
  );
};

export default CreatingResume;
