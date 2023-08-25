import React from 'react';
import {Button, Form, Input} from "antd";
import {useAppDispatch, useAppSelector} from "../../hooks/useTypedSelector";
import {ILogin, loginAsync} from "../../store/features/loginSlice";
import {useNavigate} from "react-router";
import {store} from "../../store/store";
import style from './Authorization.module.css'





type FieldType = {
    login?: string;
    password?: string;
    remember?: string;
};


const Authorization = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const {error} = useAppSelector(state=> state.login)
    const authHandler = async (values: ILogin) => {
        await dispatch(loginAsync(values)).then(() => {
            console.log(store.getState().login)
        });
        navigate('/')
    };
    return (
        <div className={style.block__authorizaton}>
            <div className={style.title}>
                <h1>Авторизация</h1>
                {error && <h3 className={style.error}>Некорректный логин или пароль</h3>}
            </div>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={authHandler}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Логин"
                    name="login"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Пароль"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{ offset: 8, span: 16 }}
                >
                    <Button type="primary" htmlType="submit">
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Authorization;