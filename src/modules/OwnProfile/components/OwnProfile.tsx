import Input from "./Input/Input";
import {useState} from "react";
import style from './Input/style.module.css'
import Button from "../../../components/Button/Button";
export const OwnProfile = () => {

    const [nick, setNick] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [workplace, setWorkplace] = useState<string>("");
    const [stack, setStack] = useState<string>("");

    const toAddNewProfile = (e:any) => {
        console.log({e})
    }

    return (
        <div className={style.list__inputs}>
            <Input label={"Ник"} onChange={e => setNick(e.target.value)}/>
            <Input label={"Имя"} onChange={e => setFirstName(e.target.value)}/>
            <Input label={"Фамилия"} onChange={e => setLastName(e.target.value)}/>
            <Input label={"Рабочее место"} onChange={e => setLastName(e.target.value)}/>
            <Input label={"Основной инструмент"} onChange={e => setLastName(e.target.value)}/>
            <Button label={"Добавить"} onClick={toAddNewProfile}/>
        </div>
    )
}