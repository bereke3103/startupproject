import {useNavigate} from "react-router";
import React, {useState} from "react";
import {useAppDispatch} from "../../hooks/useTypedSelector";
import {createProfileThunk, IProfileCreate} from "../../store/features/profilesSlice";
import style from "../../../modules/AddingNewProfile/components/Input/style.module.css";
import InputComp from "../../../modules/AddingNewProfile/components/Input/InputComp";
import ButtonComp from "../../../components/Button/ButtonComp";

const CreatingResume = () => {
    const navigate = useNavigate();

    const [nickname, setNick] = useState<string>("");
    const [firstname, setFirstName] = useState<string>("");
    const [lastname, setLastName] = useState<string>("");
    const [workplace, setWorkplace] = useState<string>("");
    const [stack, setStack] = useState<string>("");


    const dispatch = useAppDispatch()

    const toAddNewProfile = (e: any) => {
        e.preventDefault();
        const userId = localStorage.getItem("id")
        const newUser: IProfileCreate = {
            userId: Number(userId),
            nickname,
            firstname,
            lastname,
            workplace,
            stack,
        }
        dispatch(createProfileThunk(newUser))
        setNick("")
        setFirstName("")
        setLastName("")
        setWorkplace("")
        setStack("")
        navigate("/")
    }
    return (
        <div className={style.list__inputs}>
            <InputComp label={"Ник"} onChange={e => setNick(e.target.value)}/>
            <InputComp label={"Имя"} onChange={e => setFirstName(e.target.value)}/>
            <InputComp label={"Фамилия"} onChange={e => setLastName(e.target.value)}/>
            <InputComp label={"Рабочее место"} onChange={e => setWorkplace(e.target.value)}/>
            <InputComp label={"Основной инструмент"} onChange={e => setStack(e.target.value)}/>
            <ButtonComp label={"Добавить"} onClick={toAddNewProfile}/>
        </div>
    )
}