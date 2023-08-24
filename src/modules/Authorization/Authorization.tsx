import React, { useState } from 'react';
import {Button, Checkbox, Form, Input, Layout, Space, Tooltip} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import style from './Authorization.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks/useTypedSelector";
import {ILogin, loginAsync} from "../../store/features/loginSlice";
import {useNavigate} from "react-router";





type FieldType = {
    login?: string;
    password?: string;
    remember?: string;
};


const Authorization = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const onFinish = async (values: ILogin) => {
        await dispatch(loginAsync(values));
        navigate('/')
        console.log(navigate)
    };
    return (
        <div className={style.block__authorizaton}>
            <Form
                name="basic"
                // labelCol={{ span: 8 }}
                // wrapperCol={{ span: 16 }}
                // style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
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