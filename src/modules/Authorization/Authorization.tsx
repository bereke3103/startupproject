import React, {useState} from 'react';
import {Button, Form, Input} from "antd";
import {useAppSelector} from "../../hooks/useTypedSelector";
import {ILogin} from "../../store/features/loginSlice";
import style from './Authorization.module.css'
import {useAuth} from "../../Context/AuthProvider";
import PublicHeaderLink from "../../components/Header/components/PublicHeaderLink";


type FieldType = {
    login?: string;
    password?: string;
    remember?: string;
};


const Authorization = () => {

    const {tokenContext, loginHandle} = useAuth();
    const {error, loading} = useAppSelector(state => state.login)
    const [tokenForLocal, setTokenForLocal] = useState<string | null>(null)

    const authHandler = (values: ILogin) => {
        loginHandle(values)
    };

    const logout = () => {
       localStorage.removeItem("token")
    }

    return (
        <>
            <button onClick={logout}>УДАЛТЬ</button>
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
