import React from 'react';
import {Menu, MenuProps} from "antd";
import {DashboardOutlined, HomeOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router";

const items: MenuProps['items'] = [
    {
        label: "Список профилей",
        key: "",
        icon: <HomeOutlined/>
    },
    {
        label: "Профиль",
        key: "/toAddNewProfile",
        icon: <DashboardOutlined/>
    }
]

const Header = (props: any) => {
    const navigate = useNavigate()
    return (
        <div style={{display: "flex", flexDirection: "row"}}>
            <Menu
                onClick={({key}) => {
                    console.log({key})
                    navigate(key)
                }}
                items={items}>
            </Menu>
            {props.children}
        </div>
    )
}
export default Header;