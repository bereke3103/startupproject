import {
    ADDING_NEW_PROFILE_PAGE,
    AUTH_PAGE,
    IRoute, MAIN_PAGE, MY_LIST_RESUMES, NEWS_PAGE,
    PrivateRoutes,
    REGISTRATION_PAGE
} from "./routes";
import {Route, Routes} from "react-router";
import React, {useEffect, useState} from "react";
import Authorization from "../modules/Authorization/Authorization";
import Registration from "../modules/Registration/Registration";
import {useAuth} from "../context/AuthProvider";
import {
    FileMarkdownOutlined,
    LineChartOutlined, PlusOutlined,
    UserOutlined
} from "@ant-design/icons";
import Sidebar from "../shared/Sidebar";
import OtherCardsResumeList from "../modules/CardsResume/OtherCardsResumeList/OtherCardsResumeList";

const Pages = () => {
    const context = useAuth()
    const [successPg, setSuccessPg] = useState<boolean | null>(context.successContext);
    const [tokenPg, setTokenPg] = useState<string | null>(context.tokenContext);
    useEffect(() => {
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
                        icon: <PlusOutlined/>,
                        label: 'Добавить резюме',
                    },
                    {
                        key: MY_LIST_RESUMES,
                        icon: <FileMarkdownOutlined/>,
                        label: 'Мои резюме',
                    },
                    {
                        key: NEWS_PAGE,
                        icon: <LineChartOutlined/>,
                        label: 'Новости',
                    }
                ]}>
                    <Routes>
                        {PrivateRoutes.map((route: IRoute, index) => (
                            <>
                                <Route key={index} path={route.path} element={<route.element/>}/>
                                <Route path="*" element={<OtherCardsResumeList/>}/>
                            </>

                        ))}
                    </Routes>
                </Sidebar>
            }
        </>
    )
}
export default Pages;


