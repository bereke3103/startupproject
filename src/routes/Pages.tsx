import {
<<<<<<< HEAD
  ADDING_NEW_PROFILE_PAGE,
  AUTH_PAGE,
  IRoute,
  MAIN_PAGE,
  MY_LIST_RESUMES,
  PrivateRoutes,
  REGISTRATION_PAGE,
=======
    ADDING_NEW_PROFILE_PAGE,
    AUTH_PAGE,
    IRoute, MAIN_PAGE, MY_LIST_RESUMES, NEWS_PAGE,
    PrivateRoutes,
    REGISTRATION_PAGE
>>>>>>> 7f1665a67bca0abfe09494e9406b6ff0b4dec54c
} from "./routes";
import { Route, Routes } from "react-router";
import React, { useEffect, useState } from "react";
import Authorization from "../modules/Authorization/Authorization";
import Registration from "../modules/Registration/Registration";
<<<<<<< HEAD
import { useAuth } from "../Context/AuthProvider";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
=======
import {useAuth} from "../context/AuthProvider";
import {
    FileMarkdownOutlined,
    LineChartOutlined, PlusOutlined,
    UserOutlined
} from "@ant-design/icons";
>>>>>>> 7f1665a67bca0abfe09494e9406b6ff0b4dec54c
import Sidebar from "../shared/Sidebar";
import OtherCardsResumeList from "../modules/CardsResume/OtherCardsResumeList/OtherCardsResumeList";

const Pages = () => {
<<<<<<< HEAD
  const context = useAuth();
  const [successPg, setSuccessPg] = useState<boolean | null>(
    context.successContext,
  );
  const [tokenPg, setTokenPg] = useState<string | null>(context.tokenContext);
  useEffect(() => {
    console.log(successPg);
    onLoadContext();
  }, [context.tokenContext, context.successContext, successPg]);
=======
    const context = useAuth()
    const [successPg, setSuccessPg] = useState<boolean | null>(context.successContext);
    const [tokenPg, setTokenPg] = useState<string | null>(context.tokenContext);
    useEffect(() => {
        onLoadContext()
    }, [context.tokenContext, context.successContext, successPg])
>>>>>>> 7f1665a67bca0abfe09494e9406b6ff0b4dec54c

  function onLoadContext() {
    if (context.successContext === true) {
      setSuccessPg(true);
    }
    if (context.successContext === false || context.successContext === null) {
      setSuccessPg(false);
    }
    if (context.tokenContext !== undefined && context.tokenContext !== null) {
      setTokenPg(context.tokenContext);
    }
  }

<<<<<<< HEAD
  return (
    <>
      {!localStorage.getItem("token") ? (
        <Routes>
          <Route path={AUTH_PAGE} element={<Authorization />} />
          <Route path={REGISTRATION_PAGE} element={<Registration />} />
          <Route path="*" element={<Authorization />} />
        </Routes>
      ) : (
        <Sidebar
          items={[
            {
              key: MAIN_PAGE,
              icon: <UserOutlined />,
              label: "Все резюме",
            },
            {
              key: ADDING_NEW_PROFILE_PAGE,
              icon: <VideoCameraOutlined />,
              label: "Добавить резюме",
            },
            {
              key: MY_LIST_RESUMES,
              icon: <VideoCameraOutlined />,
              label: "Мои резюме",
            },
          ]}
        >
          <Routes>
            {PrivateRoutes.map((route: IRoute, index) => (
              <>
                <Route
                  key={index}
                  path={route.path}
                  element={<route.element />}
                />
                <Route path="*" element={<OtherCardsResumeList />} />
              </>
            ))}
          </Routes>
        </Sidebar>
      )}
    </>
  );
};
=======
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
>>>>>>> 7f1665a67bca0abfe09494e9406b6ff0b4dec54c
export default Pages;
