import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import {AUTH_PAGE, IRoute, MAIN_PAGE, PrivateRoutes, PublicRoutes, REGISTRATION_PAGE} from "./routes/routes";
import Authorization from "./modules/Authorization/Authorization";
import {useAppSelector} from "./hooks/useTypedSelector";
import {store} from "./store/store";



function App() {
    const {token} = store.getState().login

    return (
    <div>
        {localStorage.getItem('token') ?
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
                    {PublicRoutes.map((r: IRoute) => (
                        <>
                            <Route path={r.path} element={<r.element/>}/>
                            <Route path="*" element={<Navigate  to={`${REGISTRATION_PAGE}`} replace /> }/>
                        </>
                    ))}
                </Routes>
            </>
        }
    </div>

  );
}

export default App;
