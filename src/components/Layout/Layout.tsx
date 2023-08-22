import React from 'react';
import {Menu, MenuProps} from "antd";
import {DashboardOutlined, HomeOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

const items: MenuProps['items'] = [
    {
        label: "Список профилей",
        key: "",
        icon: <HomeOutlined/>
    },
    {
        label: "Добавить новый профиль",
        key: "/toAddNewProfile",
        icon: <DashboardOutlined/>
    }
]

const Layout = (props: any) => {
    const navigate = useNavigate()
    return (
        <>

            <div style={{display: "flex", flexDirection: "row"}}>

                <Menu
                    onClick={({key}) => {
                        console.log({key})
                        navigate(key)
                    }}
                    items={items}>
                </Menu>
                <div className={"children_main"}>
                {props.children}
                </div>
            </div>
        </>
    )
}
export default Layout;