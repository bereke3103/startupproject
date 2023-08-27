import Sidebar from "../shared/Sidebar";
import {
    ADDING_NEW_PROFILE_PAGE,
    AUTH_PAGE,
    IRoute,
    MAIN_PAGE,
    PrivateRoutes,
    PublicRoutes,
    REGISTRATION_PAGE
} from "./routes";
import {UserOutlined, VideoCameraOutlined} from "@ant-design/icons";
import {Navigate, Route, Routes} from "react-router";
import PublicHeaderLink from "../components/Header/components/PublicHeaderLink";
import React from "react";
import PrivateRoute from "./PrivateRoute";
import Authorization from "../modules/Authorization/Authorization";
import Registration from "../modules/Registration/Registration";
import {useAppSelector} from "../hooks/useTypedSelector";
import {ListProfile} from "../modules/ListProfile";

const Pages = () => {
    const {success, token} = useAppSelector(state => state.login);
    console.log(success)

    return (
        <>
            {success
                ?
                <Routes>
                    <>
                        {PrivateRoutes.map((route: IRoute) => {
                            <>
                                <Route path={route.path} element={<route.element/>}/>
                                <Route path="*" element={<Authorization/>}/>
                            </>
                        })}
                    </>
                </Routes>
                :
                <Routes>
                    <>
                        {PublicRoutes.map((route: IRoute) => {
                            <>
                                <Route path={route.path} element={<route.element/>}/>
                                <Route path="*" element={<ListProfile/>}/>
                            </>
                        })}
                    </>
                </Routes>
            }
        </>
    )
}
export default Pages;


