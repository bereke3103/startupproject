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

const Pages = () => {
    return (
        <Routes>
            <Route path={AUTH_PAGE} element={<Authorization/>}/>
            <Route path={REGISTRATION_PAGE} element={<Registration/>}/>
            <Route path={MAIN_PAGE} element={<PrivateRoute/>}>
                {PrivateRoutes.map((r: IRoute) => (
                    <>
                        <Route path={r.path} element={<r.element/>}/>
                        {/*<Route path="*" element={<Navigate to={`${AUTH_PAGE}`} replace/>}/>*/}
                    </>

                ))}
            </Route>
        </Routes>


    )
}

export default Pages;