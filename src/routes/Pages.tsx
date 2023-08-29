import {
    ADDING_NEW_PROFILE_PAGE,
    AUTH_PAGE,
    IRoute, MAIN_PAGE, MY_LIST_RESUMES,
    PrivateRoutes,
    REGISTRATION_PAGE
} from "./routes";
import {Route, Routes} from "react-router";
import React, {useEffect, useState} from "react";
import Authorization from "../modules/Authorization/Authorization";
import Registration from "../modules/Registration/Registration";
import {AllListResumes} from "../modules/AllListResumes";
import {useAuth} from "../Context/AuthProvider";
import {UserOutlined, VideoCameraOutlined} from "@ant-design/icons";
import Sidebar from "../shared/Sidebar";

const Pages = () => {
    const context = useAuth()
    const [successPg, setSuccessPg] = useState<boolean | null>(context.successContext);
    const [tokenPg, setTokenPg] = useState<string | null>(context.tokenContext);
    useEffect(() => {
        console.log(successPg)
        onLoadContext()
    }, [context.tokenContext, context.successContext, successPg])

    function onLoadContext() {
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
                <Sidebar items={[
                    {
                        key: MAIN_PAGE,
                        icon: <UserOutlined/>,
                        label: 'Все резюме',
                    },
                    {
                        key: ADDING_NEW_PROFILE_PAGE,
                        icon: <VideoCameraOutlined/>,
                        label: 'Добавить резюме',
                    },
                    {
                        key: MY_LIST_RESUMES,
                        icon: <VideoCameraOutlined/>,
                        label: 'Мои резюме',
                    }
                ]}>
                    <Routes>
                        {PrivateRoutes.map((route: IRoute, index) => (
                            <>
                                <Route key={index} path={route.path} element={<route.element/>}/>
                                <Route path="*" element={<AllListResumes/>}/>
                            </>

                        ))}
                    </Routes>
                </Sidebar>
            }
        </>
    )
}
export default Pages;


