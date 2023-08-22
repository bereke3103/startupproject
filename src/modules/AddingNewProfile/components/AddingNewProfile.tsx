import InputComp from "./Input/InputComp";
import {useState} from "react";
import style from './Input/style.module.css'
import ButtonComp from "../../../components/Button/ButtonComp";
import {createUserThunk, IUserCreate} from "../../../store/features/userClice";
import {useAppDispatch} from "../../../hooks/useTypedSelector";
import {useNavigate} from "react-router";
export const AddingNewProfile = () => {
    const navigate = useNavigate();

    const [nickname, setNick] = useState<string>("");
    const [firstname, setFirstName] = useState<string>("");
    const [lastname, setLastName] = useState<string>("");
    const [workplace, setWorkplace] = useState<string>("");
    const [stack, setStack] = useState<string>("");


    const dispatch = useAppDispatch()

    const toAddNewProfile = (e:any) => {
        e.preventDefault();
        const newUser: IUserCreate = {
            nickname,
            firstname,
            lastname,
            workplace,
            stack,
        }
        dispatch(createUserThunk(newUser))
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