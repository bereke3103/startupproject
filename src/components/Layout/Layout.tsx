import React from 'react';
import {Menu, MenuProps} from "antd";
import {DashboardOutlined, HomeOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router";
import {ADDING_NEW_PROFILE_PAGE, MAIN_PAGE} from "../../routes/routes";

const items: MenuProps['items'] = [
    {
        label: "Список профилей",
        key: MAIN_PAGE,
        icon: <HomeOutlined/>
    },
    {
        label: "Добавить новый профиль",
        key: ADDING_NEW_PROFILE_PAGE,
        icon: <DashboardOutlined/>
    }
]

const Layout = (props: any) => {
    const navigate = useNavigate()
    return (
            <div style={{display: "flex", flexDirection: "row"}}>
                <Menu
                    onClick={({key}) => {
                        navigate(key)
                    }}
                    items={items}>
                </Menu>
                <div className={"children_main"}>
                {props.children}
                </div>
            </div>
    )
}
export default Layout;