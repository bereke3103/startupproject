import { Button, Form, Input } from "antd";
import React from "react";
import style from "./Registration.module.css";
import { useNavigate } from "react-router";
import { AUTH_PAGE } from "../../routes/routes";
import PublicHeaderLink from "../../components/Header/components/PublicHeaderLink";
<<<<<<< HEAD
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector";
import { IRegister, registerThunk } from "./RegistrationApi/RegistrationApi";
=======
import {useAppDispatch, useAppSelector} from "../../store/hooks/useTypedSelector";
import {IRegister, registerThunk} from "./RegistrationApi/RegistrationApi";
>>>>>>> 7f1665a67bca0abfe09494e9406b6ff0b4dec54c

type FieldType = {
  login?: string;
  password?: string;
};

const Registration = () => {
  const dispath = useAppDispatch();
  const { success, loading, error, successBool } = useAppSelector(
    (state) => state.register,
  );
  const navigate = useNavigate();

  const registerHandler = (newUser: IRegister) => {
    dispath(registerThunk(newUser)).then((res) => {
      navigate(`${AUTH_PAGE}`);
    });
  };

  return (
    <>
      <PublicHeaderLink />
      <div className={style.block__registration}>
        <div className={"title"}>
          <h1>Регистрация</h1>
        </div>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={registerHandler}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Логин"
            name="login"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input disabled={loading} />
          </Form.Item>

          <Form.Item<FieldType>
            label="Пароль"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password disabled={loading} />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" disabled={loading}>
              Зарегистрироваться
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Registration;
