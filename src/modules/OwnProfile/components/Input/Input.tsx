import {ChangeEventHandler} from "react";
import style from './style.module.css'
type InputProps = {
    onChange: ChangeEventHandler<HTMLInputElement>,
    label: string
}

const Input = ({onChange, label}: InputProps) => {
    return (
        <div className={style.input__item}>
            <div className="input__text">{label}</div>
            <input onChange={onChange} type="text"/>
        </div>
    )
}

export default Input;