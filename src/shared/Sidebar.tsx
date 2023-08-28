import {Button, Layout, Menu, theme} from "antd";
import {
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from "@ant-design/icons";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {AUTH_PAGE, MAIN_PAGE} from "../routes/routes";
import {useAppDispatch, useAppSelector} from "../hooks/useTypedSelector";
import {store} from "../store/store";
import {removeToken} from "../store/features/loginSlice";
import {useAuth} from "../Context/AuthProvider";
// import {useAuth} from "../Context/AuthProvider";
// import {useAuth} from "../Context/AuthProvider";

interface MenuItemProps {
    key: string,
    icon: React.JSX.Element,
    label: string
}

interface  SidebarProps {
    children: any,
    items: MenuItemProps[]
}

const {Header, Sider, Content} = Layout;
const Sidebar = ({children, items} : SidebarProps) => {
    const {logoutHandle} = useAuth();
    const dispatch = useAppDispatch();
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()
    const {token} = useAppSelector(state=> state.login);


    const {
        token: {colorBgContainer},
    } = theme.useToken();


    const toNavigatePage = ({key }: any) => {
        navigate(key);
    }

    const logout = () => {
        logoutHandle();
    }

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical"/>
                <Menu
                    theme="dark"
                    mode="inline"
                    onClick={toNavigatePage}
                    defaultSelectedKeys={[MAIN_PAGE]}
                    items={items}
                />
            </Sider>
            <Layout>
                <Header style={{padding: 0, background: colorBgContainer}}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <LogoutOutlined style={{cursor: "pointer", padding: 10}} onClick={logout} />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        height: "100vh",
                        background: colorBgContainer,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}

export default Sidebar;