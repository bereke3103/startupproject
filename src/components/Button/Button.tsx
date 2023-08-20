import {MouseEventHandler} from "react";
import style from "./button.module.css"
type ButtonProps = {
    label: string
    onClick: MouseEventHandler<HTMLButtonElement>
}

const Button = ({label, onClick}: ButtonProps) => {
    return (
        <button className={style.button} onClick={onClick}>{label}</button>
    )
}

export default Button;