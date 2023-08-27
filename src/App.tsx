import React, {useContext, useEffect, useState} from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router";
import {
    ADDING_NEW_PROFILE_PAGE,
    AUTH_PAGE,
    IRoute,
    MAIN_PAGE,
    PrivateRoutes,
    PublicRoutes,
} from "./routes/routes";
import {useAppSelector} from "./hooks/useTypedSelector";
import PublicHeaderLink from "./components/Header/components/PublicHeaderLink";
import Sidebar from "./shared/Sidebar";
import {UserOutlined, VideoCameraOutlined} from "@ant-design/icons";
import {AuthContext, AuthProvider, useAuth} from "./Context/AuthProvider";
import Pages from "./routes/Pages";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Pages/>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App;
