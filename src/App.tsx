import React, {useEffect, useState} from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import {AUTH_PAGE, IRoute, MAIN_PAGE, PrivateRoutes, PublicRoutes} from "./routes/routes";
import Authorization from "./modules/Authorization/Authorization";
import {useAppSelector} from "./hooks/useTypedSelector";



function App() {
    const isAuth = useAppSelector(state => state.login.token)

    return (
    <div>
        {isAuth ?
        <>
            <Header/>
            <div className="app container">
                <Layout>
                    <Routes>
                        {PrivateRoutes.map((r: IRoute) => (
                            <>
                            <Route path={r.path} element={<r.element/>}/>
                            <Route path="*" element={< Navigate to={`${MAIN_PAGE}`} replace />}/>
                            </>
                        ))}
                    </Routes>
                </Layout>
            </div>
        </> :
            <>
                <Routes>
                 <Route path={AUTH_PAGE} element={<Authorization/>}/>
                    <Route path="*" element={< Navigate to={`${AUTH_PAGE}`} />}/>
                </Routes>
            </>
        }
    </div>

  );
}

export default App;
