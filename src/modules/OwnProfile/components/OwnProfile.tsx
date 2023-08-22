import Input from "./Input/Input";
import {useState} from "react";
import style from './Input/style.module.css'
import Button from "../../../components/Button/Button";
import {createUserThunk, IUserCreate} from "../../../store/features/userClice";
import {useAppDispatch} from "../../../hooks/useTypedSelector";
import {useNavigate} from "react-router";
export const OwnProfile = () => {
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
            <Input label={"Ник"} onChange={e => setNick(e.target.value)}/>
            <Input label={"Имя"} onChange={e => setFirstName(e.target.value)}/>
            <Input label={"Фамилия"} onChange={e => setLastName(e.target.value)}/>
            <Input label={"Рабочее место"} onChange={e => setWorkplace(e.target.value)}/>
            <Input label={"Основной инструмент"} onChange={e => setStack(e.target.value)}/>
            <Button label={"Добавить"} onClick={toAddNewProfile}/>
        </div>
    )
}