import {Button, Form, Input} from "antd";
import React from "react";
import style from './Registration.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks/useTypedSelector";
import {IRegister, registerAsync} from "../../store/features/registerSlice";
import {useNavigate} from "react-router";
import {AUTH_PAGE, MAIN_PAGE} from "../../routes/routes";
import {store} from "../../store/store";
type FieldType = {
    login?: string;
    password?: string;
};

const Registration = () => {
    const dispath = useAppDispatch()
    // const {success, loading, error, successBool} = useAppSelector(state=> state.register)
    const {error, successBool} = store.getState().register
    const navigate = useNavigate();
    const registerHandler =  (newUser: IRegister) => {
        dispath(registerAsync(newUser))
            console.log(successBool)
        if (successBool) {
            navigate(`${AUTH_PAGE}`)
        }
    }
    return (
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
                    Зарегистрироваться
                </Button>
            </Form.Item>
        </Form>
        </div>
    )
}

export default  Registration;