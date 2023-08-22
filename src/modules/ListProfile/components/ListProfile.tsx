
import React, {useEffect, useState} from "react";
import ItemProfile from "./ItemProfile";
import style from './profileStyle.module.css'
import ButtonComp from "../../../components/Button/ButtonComp";
import {NavigateFunction, useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getUsersAsync} from "../../../store/features/userClice";
import {ThunkDispatch} from "redux-thunk";
import {useAppDispatch, useAppSelector} from "../../../hooks/useTypedSelector";
import Layout from "../../../components/Layout/Layout";
 export const ListProfile = () => {

     const dispatch = useAppDispatch()

     const users = useAppSelector(state=>state.user.users);
     console.log({users})

     useEffect(() => {
         dispatch(getUsersAsync())
     }, []);

     const [exampleOfUsers, setExampleOfUsers] = useState(users)
     const navigate = useNavigate();
     function toAddNewProfile(e: any) {
        e.preventDefault();
         navigate("/toAddNewProfile")
     }

    const toPersonalProfile = (id: number) => {
        if(id){
            navigate(`/personalProfile/${id}`)
        }
    }

     return (
        <div className={style.block_profiles}>
            <div className="title__block_profiles">
                <h1>Список резюме</h1>
            </div>
            <div className={style.allProfile}>
                {users.map(user => (
                    <ItemProfile
                        toPersonalProfile={toPersonalProfile}
                        key={user.id}
                        lastname={user.lastname}
                        firstname={user.firstname}
                        nickname={user.nickname}
                        stack={user.stack}
                        workplace={user.workplace}
                        id={user.id}/>
                ))}
            </div>
            <div className={"toAddProfile"}>
                <ButtonComp onClick={toAddNewProfile} label={"Добавить свой профиль"}/>
            </div>
        </div>
    )
}