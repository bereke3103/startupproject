import {useAppDispatch, useAppSelector} from "../../../hooks/useTypedSelector";
import React, {useEffect, useState} from "react";
import {getProfilesAsync, Resume} from "../../../store/features/profilesSlice";
import {useNavigate} from "react-router";
import style from "../../../../modules/AllListResumes/components/profileStyle.module.css";
import {Space, Spin} from "antd";
import ItemResume from "../../../../modules/AllListResumes/components/ItemResume";

const OtherCardsResumeList = () => {

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

export default OtherCardsResumeList;