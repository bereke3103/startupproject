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
import React, {useEffect, useState} from "react";
import PrivateRoute from "./PrivateRoute";
import Authorization from "../modules/Authorization/Authorization";
import Registration from "../modules/Registration/Registration";
import {useAppSelector} from "../hooks/useTypedSelector";
import {ListProfile} from "../modules/ListProfile";
import {useAuth} from "../Context/AuthProvider";

const Pages = () => {
    const context = useAuth()
    const [successPg, setSuccessPg] = useState<boolean | null>(context.successContext);
    const [tokenPg, setTokenPg] = useState<string | null>(context.tokenContext);
    useEffect(() => {
        console.log(successPg)
        onLoadContext()
    }, [context.tokenContext, context.successContext, successPg])

    function onLoadContext  ()  {
        if (context.successContext === true) {
            setSuccessPg(true)
        }
        if (context.successContext === false || context.successContext === null) {
            setSuccessPg(false);
        }
        if (context.tokenContext !== undefined && context.tokenContext !== null) {
            setTokenPg(context.tokenContext);
        }
    }

    return (
        <>
            {!localStorage.getItem("token")
                ?
                <Routes>
                    <Route path={AUTH_PAGE} element={<Authorization/>}/>
                    <Route path={REGISTRATION_PAGE} element={<Registration/>}/>
                    <Route path="*" element={<Authorization/>}/>
                </Routes>
                :
                <Routes>
                    {PrivateRoutes.map((route: IRoute) => (
                        <>
                            <Route path={route.path} element={<route.element/>}/>
                            <Route path="*" element={<ListProfile/>}/>
                        </>
                    ))}
                </Routes>
            }
        </>
    )
}
export default Pages;


