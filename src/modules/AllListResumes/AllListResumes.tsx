import React, {useEffect, useState} from "react";
import ItemResume from "./components/ItemResume";
import style from './components/profileStyle.module.css'
import ButtonComp from "../../components/Button/ButtonComp";
import {useNavigate} from "react-router";
import {getProfilesAsync, Resume} from "../../store/features/profilesSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/useTypedSelector";
import {ADDING_NEW_PROFILE_PAGE, MAIN_PAGE, MY_LIST_RESUMES} from "../../routes/routes";
import {Space, Spin} from "antd";
import {UserOutlined, VideoCameraOutlined} from "@ant-design/icons";
import Sidebar from "../../shared/Sidebar";

export const AllListResumes = () => {

    const dispatch = useAppDispatch()

    const {allListResumes, loading, error} = useAppSelector(state => state.user);
    const [allResumesData, setAllResumesData] = useState<Resume[]>(allListResumes)

    useEffect(() => {
        dispatch(getProfilesAsync()).then((res) => {
            setAllResumesData(res.payload)
        })
    }, []);

    const navigate = useNavigate();

    function toAddNewProfile(e: any) {
        e.preventDefault();
        navigate(`${ADDING_NEW_PROFILE_PAGE}`)
    }

    const toPersonalProfile = (id: number) => {
        if (id) {
            navigate(`/personalprofile/${id}`)
        }
    }

    return (
        <>
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
                                {allResumesData.map(resume => (
                                    <ItemResume
                                        toPersonalProfile={toPersonalProfile}
                                        key={resume.id}
                                        lastname={resume.lastname}
                                        firstname={resume.firstname}
                                        nickname={resume.nickname}
                                        stack={resume.stack}
                                        workplace={resume.workplace}
                                        id={resume.id}/>
                                ))}
                            </div>
                        }
                        <div className={"toAddProfile"}>
                            <ButtonComp onClick={toAddNewProfile} label={"Добавить свой профиль"}/>
                        </div>
                    </div>
                </div>
        </>
    )
}
