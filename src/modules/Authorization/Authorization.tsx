import React, {useContext, useEffect} from 'react';
import {Button, Form, Input} from "antd";
import {useAppSelector} from "../../hooks/useTypedSelector";
import {ILogin} from "../../store/features/loginSlice";
import {useNavigate} from "react-router";
import style from './Authorization.module.css'
import {ADDING_NEW_PROFILE_PAGE, MAIN_PAGE} from "../../routes/routes";
import {AuthContext, useAuth} from "../../Context/AuthProvider";
import {UserOutlined, VideoCameraOutlined} from "@ant-design/icons";
import Sidebar from "../../shared/Sidebar";
import PublicHeaderLink from "../../components/Header/components/PublicHeaderLink";


type FieldType = {
    login?: string;
    password?: string;
    remember?: string;
};


const Authorization = () => {

    const auth = useAuth();
    const navigate = useNavigate()
    const {error, loading} = useAppSelector(state => state.login)

    const authHandler = (values: ILogin) => {
        auth.loginHandle(values)
        navigate(MAIN_PAGE)
        console.log({auth})
    };
    return (


<>
            <PublicHeaderLink/>
            <div className={style.block__authorizaton}>
                <div className={style.title}>
                    <h1>Авторизация</h1>
                    {error && <h3 className={style.error}>Некорректный логин или пароль</h3>}
                </div>
                <Form
                    name="basic"
                    initialValues={{remember: true}}
                    onFinish={authHandler}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Логин"
                        name="login"
                        rules={[{required: true, message: 'Please input your username!'}]}
                    >
                        <Input disabled={loading}/>
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Пароль"
                        name="password"
                        rules={[{required: true, message: 'Please input your password!'}]}
                    >
                        <Input.Password disabled={loading}/>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{offset: 8, span: 16}}
                    >
                        <Button type="primary" htmlType="submit" disabled={loading}>
                            Войти
                        </Button>
                    </Form.Item>
                </Form>
            </div>
</>

    );
};

export default Authorization;
