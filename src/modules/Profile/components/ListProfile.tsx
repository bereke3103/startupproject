
import React, {useEffect, useState} from "react";
import Profile from "./Profile";
import style from './profileStyle.module.css'
import Button from "../../../components/Button/Button";
import {NavigateFunction, useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getUsersAsync} from "../../../store/features/userClice";
import {ThunkDispatch} from "redux-thunk";
import {useAppDispatch, useAppSelector} from "../../../hooks/useTypedSelector";
import Header from "../../../components/Layout/Header";
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