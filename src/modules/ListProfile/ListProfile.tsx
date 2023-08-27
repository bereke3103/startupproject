import React, {useEffect, useState} from "react";
import ItemProfile from "./components/ItemProfile";
import style from './components/profileStyle.module.css'
import ButtonComp from "../../components/Button/ButtonComp";
import {useNavigate} from "react-router";
import {getProfilesAsync} from "../../store/features/profilesSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/useTypedSelector";
import {ADDING_NEW_PROFILE_PAGE, MAIN_PAGE, PERSONAL_PROFILE_PAGE} from "../../routes/routes";
import {Alert, Space, Spin} from "antd";
import {UserOutlined, VideoCameraOutlined} from "@ant-design/icons";
import Sidebar from "../../shared/Sidebar";

export const ListProfile = () => {

    const dispatch = useAppDispatch()

    const {profiles, loading, error} = useAppSelector(state => state.user);

    useEffect(() => {
        dispatch(getProfilesAsync())
    }, []);

    const navigate = useNavigate();

    function toAddNewProfile(e: any) {
        e.preventDefault();
        navigate(`${ADDING_NEW_PROFILE_PAGE}`)
    }

    const toPersonalProfile = (id: number) => {
        if (id) {
            navigate(`${PERSONAL_PROFILE_PAGE}/${id}`)
        }
    }

    return (
        <>
            <Sidebar items={[
                {
                    key: MAIN_PAGE,
                    icon: <UserOutlined/>,
                    label: 'Список профилей',
                },
                {
                    key: ADDING_NEW_PROFILE_PAGE,
                    icon: <VideoCameraOutlined/>,
                    label: 'Добавление нового профиля',
                }
            ]}>
                {/*<PrivateHeaderLink/>*/}
                <div className="app container">
                    <div className={style.block_profiles}>
                        <div className="title__block_profiles">
                            <h1>Список резюме</h1>
                        </div>
                        {loading
                            ?
                            <Space direction="vertical" style={{width: '100%'}}>
                                <Spin tip="Loading" size="large">
                                    <div className="content"/>
                                </Spin>
                            </Space>
                            :
                            <div className={style.allProfile}>
                                {profiles.map(profile => (
                                    <ItemProfile
                                        toPersonalProfile={toPersonalProfile}
                                        key={profile.id}
                                        lastname={profile.lastname}
                                        firstname={profile.firstname}
                                        nickname={profile.nickname}
                                        stack={profile.stack}
                                        workplace={profile.workplace}
                                        id={profile.id}/>
                                ))}
                            </div>
                        }
                        <div className={"toAddProfile"}>
                            <ButtonComp onClick={toAddNewProfile} label={"Добавить свой профиль"}/>
                        </div>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}
