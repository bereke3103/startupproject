import { Button, Form, Input } from "antd";
import React from "react";
import style from "./Registration.module.css";
import { useNavigate } from "react-router";
import { AUTH_PAGE } from "../../routes/routes";
import PublicHeaderLink from "../../components/Header/components/PublicHeaderLink";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector";
import { IRegister, registerThunk } from "./RegistrationApi/RegistrationApi";

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
