import dataUsers from '../../../store/action-creators/profileUserExample.json'
import React, {useEffect, useState} from "react";
import Profile from "./Profile";
import style from './profileStyle.module.css'
import Button from "../../../components/Button/Button";
import {NavigateFunction, useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {fetchUsers} from "../../../store/action-creators/user";
 export const ListProfile = () => {
     const { users, error, loading } = useTypedSelector(state=> state.user)
    const dispatch: any = useDispatch();

     // useEffect(() => {
     //     dispatch(fetchUsers())
     // }, [])

     const [exampleOfUsers, setExampleOfUsers] = useState(dataUsers)
     const navigate :NavigateFunction = useNavigate();
     function toAddNewProfile(e: any) {
        e.preventDefault();
         navigate("/toAddNewProfile")
     }

     // if(loading) {
     //     return <h1>Идет загрузка</h1>
     // }
     //
     // if(error) {
     //     return <h1>{error}</h1>
     // }

     return (
        <div className={style.block_profiles}>
            <div className="title__block_profiles">
                <h1>Список резюме</h1>
            </div>
            <div className={style.allProfile}>
                {users.map(user => (
                    <Profile
                        key={user.id}
                        nickname={user.nickname}
                        stack={user.stack}
                        workplace={user.workplace}/>
                ))}
            </div>
            <div className={"toAddProfile"}>
                <Button onClick={toAddNewProfile} label={"Добавить свой профиль"}/>
            </div>
        </div>
    )
}