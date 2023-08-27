import {useAppDispatch, useAppSelector} from "../../hooks/useTypedSelector";
import React, {useEffect} from "react";
import {getProfileById} from "../../store/features/profilesSlice";
import {useParams} from "react-router";
import style from './PersonalProfile.module.css'
import {ADDING_NEW_PROFILE_PAGE, MAIN_PAGE} from "../../routes/routes";
import {UserOutlined, VideoCameraOutlined} from "@ant-design/icons";
import Sidebar from "../../shared/Sidebar";

const PersonalProfile = () => {
    const params = useParams()
    const userState = useAppSelector(state => state.user.profile)
    console.log({userState})
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getProfileById(Number(params.id)))
    }, [])
    return (
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
            <div className={style.personal__block}>

                <div className={style.img_person}>
                    <img className={style.img}
                         src="https://attractivecv.com/wp-content/uploads/2022/01/modele-de-cv-en-anglais-barcelone-bleu-207d-en.jpg"
                         alt=""/>
                </div>

                <div className={style.person__info}>
                    <div className={style.info__person}>
                        <span><b>Никнейм:</b></span> <p>{userState.nickname}</p>
                    </div>
                    <div className={style.info__person}>
                        <span><b>Имя:</b></span> <p>{userState.firstname}</p>
                    </div>
                    <div className={style.info__person}>
                        <span><b>Фамилия:</b></span> <p>{userState.lastname}</p>
                    </div>
                    <div className={style.info__person}>
                        <span><b>Рабочее место:</b></span> <p>{userState.workplace}</p>
                    </div>
                    <div className={style.info__person}>
                        <span><b>Основные инструменты:</b></span> <p>{userState.stack}</p>
                    </div>
                </div>
            </div>
        </Sidebar>
    )
}

export default PersonalProfile;