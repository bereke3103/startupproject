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
    const [findResume, setFindResume] = useState<string>("")


    const navigate = useNavigate();

    const toPersonalProfile = (id: number) => {
        if (id) {
            navigate(`/personalprofile/${id}`)
        }
    }

    useEffect(() => {
        dispatch(getProfilesAsync()).then((res) => {
            setAllResumesData(res.payload)
        })
    }, [dispatch]);
    const findResumeFn = (e:any) => {
        const valueInpue = e.target.value;
        setFindResume(valueInpue);
        const newValues = allListResumes.filter(item => item.nickname.includes(findResume));
        setAllResumesData(newValues)

        return newValues;
    }


    return (
        <>
                <div className="app container">
                    <div className={style.block_profiles}>
                        <div className="title__block_profiles">
                            <h1>Список резюме</h1>
                            <input type="text" value={findResume} onChange={(e) => findResumeFn(e)} />
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
                    </div>
                </div>
        </>
    )
}
